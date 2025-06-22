export type Review = {
  id: string;
  author: string;
  rating: number;
  text: string;
};

export type Race = {
  id: string;
  name: string;
  reviews: Review[];
}; 