/* eslint-disable check-file/folder-naming-convention */
import { notFound } from "next/navigation";

import { RaceReviewForm } from "@/components/races/race-review-form";
import { RaceReviewList } from "@/components/races/race-review-list";
import { grandPrixes } from "@/lib/mock-data";

type PageProps = {
  params: Promise<{ raceId: string }>;
};

export default async function RacePage({ params }: PageProps) {
  const { raceId } = await params;
  const race = grandPrixes.find((gp) => gp.id === raceId);

  if (!race) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-4xl font-bold">{race.name}</h1>
      <div className="mx-auto max-w-xl space-y-8">
        <div>
          <RaceReviewForm />
        </div>
        <div>
          <RaceReviewList reviews={race.reviews} />
        </div>
      </div>
    </main>
  );
}
