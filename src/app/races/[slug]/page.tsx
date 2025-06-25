import { notFound } from "next/navigation";

import { eq } from "drizzle-orm";
import { getServerSession } from "next-auth";

import { RacePageClient } from "@/app/races/[slug]/page.client";
import authOptions from "@/config/auth";
import db from "@/db";
import { raceReviews, races } from "@/db/schema";
import { Review } from "@/lib/types";
import requireAuth from "@/utils/require-auth";

import { createRaceReview } from "./actions";

export default async function RacePage({
  params,
}: {
  params: { slug: string };
}) {
  await requireAuth();
  const { slug: encodedSlug } = await params;
  const slug = decodeURIComponent(encodedSlug);
  const race = await db.query.races.findFirst({
    where: eq(races.slug, slug),
  });

  if (!race) {
    notFound();
  }

  const session = await getServerSession(authOptions);

  const dbReviews = await db.query.raceReviews.findMany({
    where: eq(raceReviews.raceId, race.id),
    with: {
      author: true,
    },
  });

  const reviews: Review[] = dbReviews.map((review) => ({
    id: review.id,
    raceId: review.raceId,
    rating: review.rating,
    comment: review.comment ?? "",
    authorName: review.author.name ?? "Anonymous",
  }));

  return (
    <RacePageClient
      race={race}
      reviews={reviews}
      createRaceReview={createRaceReview}
      user={{
        id: session?.user.id,
        name: session?.user.name,
      }}
    />
  );
}
