"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StarIcon } from "@/components/ui/star-icon";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export function RaceReviewForm() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Submit Your Review</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="flex items-center gap-2">
            <p className="text-sm font-medium">Your Rating:</p>
            <div
              className="flex items-center"
              onMouseLeave={() => setHoverRating(0)}
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon
                  key={star}
                  className={cn(
                    "h-6 w-6 cursor-pointer",
                    (hoverRating || rating) >= star
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  )}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                />
              ))}
            </div>
          </div>
          <div>
            <Textarea placeholder="Share your thoughts on the race..." />
          </div>
          <Button type="submit">Submit Review</Button>
        </form>
      </CardContent>
    </Card>
  );
}
