export type Review = {
  id: string;
  author: string;
  rating: number;
  text: string;
  raceId: string;
};

export type Race = {
  id: string;
  name: string;
  latestRace?: boolean;
};
