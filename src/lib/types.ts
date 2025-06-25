export type Review = {
  id: string;
  authorName: string;
  rating: number;
  comment: string;
  raceId: string;
};

export type Race = {
  id: string;
  name: string;
  latestRace?: boolean;
};
