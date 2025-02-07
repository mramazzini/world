export const buildDiscordURI = () => {
  let base = '';
  if (typeof window !== 'undefined') {
    // Client-side
    base = window.location.origin;
  } else {
    // Server-side (fallback for when you need to provide a default)
    base = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  }

  const urlEncoded = encodeURIComponent(base + '/oauth/discord/register');
  return `https://discord.com/oauth2/authorize?client_id=1335433498198016105&response_type=code&redirect_uri=${urlEncoded}&scope=identify+email`;
};
