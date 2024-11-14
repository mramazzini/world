export type DBMetadata = {
  id: string;
  name: string;
  description: string;
  flavorText: string;
  updatedAt: Date;
  slug: string;
};

export type SingleDataQuery = {
  query: string;
  type: 'id' | 'name' | 'slug';
};
