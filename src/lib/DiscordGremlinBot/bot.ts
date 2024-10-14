"use server";
import { Client, ClientOptions } from "discord.js";
import ready from "./listeners/ready";
import interactionCreate from "./listeners/interactionCreate";

(async () => {
  const token = process.env.DISCORD_BOT_TOKEN;

  console.log("Bot is starting...");

  const client = new Client({
    intents: [],
  });

  await ready(client);

  await client.login(token);

  await interactionCreate(client);

  console.log("Bot is started");
})();
