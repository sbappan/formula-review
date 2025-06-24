import { notFound } from "next/navigation";

import { RaceReviewForm } from "@/components/races/race-review-form";
import { RaceReviewList } from "@/components/races/race-review-list";
import { grandPrixes, reviews } from "@/lib/mock-data";
import requireAuth from "@/utils/require-auth";

export default async function RacePage({
  params,
}: {
  params: { raceId: string };
}) {
  await requireAuth();
  const { raceId: encodedRaceId } = params;
  const raceId = decodeURIComponent(encodedRaceId);
  const race = grandPrixes.find((gp) => gp.id === raceId);
  const year = raceId.split("-").at(-1);

  const raceReviews = reviews.filter((review) => review.raceId === raceId);

  if (!race) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-4xl font-bold">
        {race.name.slice(0, race.name.length - 2)} Grand Prix {year}
      </h1>
      <div className="mx-auto max-w-xl space-y-8">
        <div>
          <RaceReviewForm />
        </div>
        <div>
          <RaceReviewList reviews={raceReviews} />
        </div>
      </div>
    </main>
  );
}
