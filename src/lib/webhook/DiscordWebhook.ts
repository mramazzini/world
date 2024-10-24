import { WebhookClient } from 'discord.js';
import '@/lib/string.extensions';
const webhookURL = process.env.DISCORD_WEBHOOK_URL;

if (!webhookURL) {
  throw new Error('DISCORD_WEBHOOK_URL is not defined');
}

const webhookClient = new WebhookClient({
  url: process.env.DISCORD_WEBHOOK_URL as string,
});

export const sendNewUserMessage = async (username: string): Promise<void> => {
  await webhookClient.send({
    content: `> **${username}** has joined the website!`,
  });
};

export const sendComment = async (
  comment: string,
  location: string,
  username: string
): Promise<void> => {
  await webhookClient.send({
    content: `> **${username}** commented on **${location
      .split('/')[1]
      .toCapitalCase()}** - **${location.split('/')[2].replaceAll('-', ' ')}**:
      > ${comment}
      > **Read More**: <https://maxdnd.com${location}>
      `,
  });
};
