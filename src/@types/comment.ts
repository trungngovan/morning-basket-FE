export type Comment = {
  user: {
    name: string;
    imgUrl: string;
  };
  content: string;
  mediaUrls: string[];
  createdAt: Date;
  rank: number;
};
