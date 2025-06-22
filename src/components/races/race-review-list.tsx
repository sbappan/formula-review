import { Review } from "@/lib/types";

import { RaceReviewCard } from "./race-review-card";

interface RaceReviewListProps {
  reviews: Review[];
}

export function RaceReviewList({ reviews }: RaceReviewListProps) {
  if (reviews.length === 0) {
    return (
      <div className="py-8 text-center text-gray-500">
        No reviews yet. Be the first to share your thoughts!
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-center text-2xl font-bold">Community Reviews</h2>
      <div className="space-y-4">
        {reviews.map((review) => (
          <RaceReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}
