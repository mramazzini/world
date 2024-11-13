export const createSlug = (name: string) =>
  name
    .toLowerCase() // Convert to lowercase
    .trim() // Trim whitespace from both ends
    .replace(/[\s_]+/g, '-') // Replace spaces or underscores with dashes
    .replace(/[^\w-]+/g, '') // Remove non-word characters except dashes
    .replace(/--+/g, '-') // Replace multiple dashes with a single dash
    .replace(/^-+|-+$/g, '');
