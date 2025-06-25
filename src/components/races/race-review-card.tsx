import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StarIcon } from "@/components/ui/star-icon";
import { Review } from "@/lib/types";
import { cn } from "@/lib/utils";

interface RaceReviewCardProps {
  review: Review;
}

export function RaceReviewCard({ review }: RaceReviewCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg">{review.authorName}</CardTitle>
            <div className="mt-1 flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon
                  key={star}
                  className={cn(
                    "h-5 w-5",
                    review.rating >= star
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 dark:text-gray-300">{review.comment}</p>
      </CardContent>
    </Card>
  );
}
