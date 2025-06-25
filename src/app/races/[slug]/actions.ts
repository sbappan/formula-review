"use server";

// action.ts
import { revalidatePath } from "next/cache";

import { parseWithZod } from "@conform-to/zod";
import { getServerSession } from "next-auth";

import options from "@/config/auth";
import db from "@/db";
import raceReviews, { InsertRaceReviewSchema } from "@/db/schema/race-reviews";
import requireAuth from "@/utils/require-auth";

export async function createRaceReview(prevState: unknown, formData: FormData) {
  await requireAuth();

  const submission = parseWithZod(formData, {
    schema: InsertRaceReviewSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const session = (await getServerSession(options))!;
  // console.log("actions session", session);

  try {
    await db.insert(raceReviews).values({
      userId: session.user.id as string,
      raceId: submission.value.raceId as string,
      rating: submission.value.rating as number,
      comment: submission.value.comment as string,
    });

    revalidatePath(`/races/${submission.value.raceId}`);

    return submission.reply({
      resetForm: true,
    });
  } catch (e) {
    console.error("Failed to create race review", e);
    return submission.reply({
      formErrors: ["An unexpected error occurred. Please try again."],
    });
  }
}
