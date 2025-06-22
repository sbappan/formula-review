/* eslint-disable check-file/folder-naming-convention */
import { notFound } from "next/navigation";

import { grandPrixes } from "@/lib/mock-data";

export default function RacePage({ params }: { params: { raceId: string } }) {
  const race = grandPrixes.find((gp) => gp.id === params.raceId);

  if (!race) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-4xl font-bold">{race.name}</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>{/* Review form will go here */}</div>
        <div>{/* Reviews list will go here */}</div>
      </div>
    </main>
  );
}
