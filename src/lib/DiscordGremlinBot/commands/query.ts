import {
  CommandInteraction,
  Client,
  ApplicationCommandOptionType,
} from "discord.js";
import "@/lib/string.extensions";
import { Command } from "../command";
import { QueryParams } from "../../utils/types/types";
import { searchEverything } from "../../actions/db/general/read.actions";

export const Query: Command = {
  name: "query",
  description: "Returns the top search result from Max's DnD Database.",
  options: [
    {
      name: "query",
      description: "The query to search for",
      type: ApplicationCommandOptionType.String,
    },
  ],
  run: async (client: Client, interaction: CommandInteraction) => {
    console.log("Query command received");
    const query = interaction.options.get("query")?.value as string;
    const params: QueryParams = {
      query,
      page: 0,
      searchFields: [],
      relationalFields: [],
    };

    const result = await searchEverything(params);

    if (!result || result.length == 0) {
      console.error("No results found");
      await interaction.followUp({
        ephemeral: true,
        content: "> **No results found**",
      });
      return;
    }

    const content = `> # ${
      result[0].type == "Class"
        ? result[0].name.toCapitalCase()
        : result[0].name
    }
    > **Type:** ${result[0].type}
    > **Description:** ${result[0].description}
    > **Read More:** <https://www.maxdnd.com/${result[0].type.toLowerCase()}/${result[0].name.replaceAll(
      " ",
      "-"
    )}>
    `;
    console.log("Sending response");
    await interaction.followUp({
      ephemeral: true,
      content,
    });
  },
};
