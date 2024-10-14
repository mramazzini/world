import { REST, Routes } from "discord.js";
import { Commands } from "./commands";
const token = process.env.DISCORD_BOT_TOKEN;
const clientId = process.env.DISCORD_CLIENT_ID;
const guildId = process.env.DISCORD_GUILD_ID;
// Construct and prepare an instance of the REST module
if (!token) {
  throw new Error("Discord bot token is required");
}
if (!clientId) {
  throw new Error("Discord client ID is required");
}
if (!guildId) {
  throw new Error("Discord guild ID is required");
}

const rest = new REST().setToken(token);

// and deploy your commands!
(async () => {
  try {
    console.log(
      `Started refreshing ${Commands.length} application (/) commands.`
    );

    // The put method is used to fully refresh all commands in the guild with the current set
    const data = (await rest.put(
      Routes.applicationGuildCommands(clientId, guildId),
      { body: Commands }
    )) as unknown as Array<unknown>;

    console.log(
      `Successfully reloaded ${data.length} application (/) commands.`
    );
  } catch (error) {
    // And of course, make sure you catch and log any errors!
    console.error(error);
  }
})();
