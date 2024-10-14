"use server";

import { Client } from "discord.js";
import { Commands } from "../commands";

export default async (client: Client): Promise<void> => {
  client.on("ready", async () => {
    if (!client.user || !client.application) {
      console.log("Bot is not ready yet");
      return;
    }

    await client.application.commands.set(Commands);

    console.log(`${client.user.username} is online`);
  });
};
