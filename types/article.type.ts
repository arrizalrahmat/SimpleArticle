export type Article = {
  id: string;
  createdAt: string;
  lastUpdatedAt: string;
  publishedAt: string;
  image: string;
  imagePlaceholder: string;
  title: string;
  slug: string;
  description: string;
  language: any;
  featured: boolean;
  editorPick: boolean;
  authorId: any;
  author: any;
  channelId: string;
  channel: Channel;
  externalData: ExternalData;
  statsId: string;
  stats: Stats;
  tags: any[];
};

export type Channel = {
  id: string;
  createdAt: string;
  lastUpdatedAt: string;
  handle: string;
  name: string;
  about: string;
  image: string;
  imagePlaceholder: string;
  type: string;
  public: boolean;
  country: any;
  mainLanguage: any;
  verified: boolean;
  ownerId: any;
};

export type ExternalData = {
  id: string;
  sourceId: string;
  link: string;
  imageOrigin: string;
  authorName: string;
  authorAvatar: string;
  authorAvatarOrigin: string;
  authorAvatarPlaceholder: string;
  authorId: string;
  postId: string;
};

export type Stats = {
  id: string;
  lastUpdatedAt: string;
  impressionStatsId: string;
  readStatsId: string;
  shareStatsId: string;
  impression: Impression;
  read: Read;
  share: Share;
};

export type Impression = {
  id: string;
  daily: number;
  weekly: number;
  monthly: number;
  yearly: number;
};

export type Read = {
  id: string;
  daily: number;
  weekly: number;
  monthly: number;
  yearly: number;
};

export type Share = {
  id: string;
  daily: number;
  weekly: number;
  monthly: number;
  yearly: number;
};
