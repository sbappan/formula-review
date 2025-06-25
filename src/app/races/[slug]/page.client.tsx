"use client";

import { useOptimistic } from "react";

import { SubmissionResult } from "@conform-to/react";

import { RaceReviewForm } from "@/components/races/race-review-form";
import { RaceReviewList } from "@/components/races/race-review-list";
import { Race, Review } from "@/lib/types";

interface RacePageClientProps {
  race: Race;
  reviews: Review[];
  user: {
    name?: string | null;
    id?: string | null;
  };
  createRaceReview: (
    state: unknown,
    formData: FormData
  ) => Promise<SubmissionResult<string[]>>;
}

export function RacePageClient({
  race,
  reviews,
  createRaceReview,
  user,
}: RacePageClientProps) {
  const [optimisticReviews, addOptimisticReview] = useOptimistic<
    Review[],
    Omit<Review, "id" | "authorName" | "raceId">
  >(reviews, (state, newReview) => {
    return [
      ...state,
      {
        ...newReview,
        id: crypto.randomUUID(),
        authorName: user.name ?? "Anonymous",
        raceId: race.id,
      },
    ];
  });

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-4xl font-bold">
        {race.name.slice(0, race.name.length - 2)} Grand Prix{" "}
        {race.name.split("-").at(-1)}
      </h1>
      <div className="mx-auto max-w-xl space-y-8">
        <div>
          <RaceReviewForm
            raceId={race.id}
            formAction={async (state, formData) => {
              const newReview = {
                rating: Number(formData.get("rating")),
                comment: formData.get("comment") as string,
              };
              addOptimisticReview(newReview);
              return await createRaceReview(state, formData);
            }}
          />
        </div>
        <div>
          <RaceReviewList reviews={optimisticReviews} />
        </div>
      </div>
    </main>
  );
}
