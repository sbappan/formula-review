"use client";

import { useActionState, useState } from "react";

import { SubmissionResult, useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StarIcon } from "@/components/ui/star-icon";
import { Textarea } from "@/components/ui/textarea";
import { InsertRaceReviewSchema } from "@/db/schema/race-reviews";
import { cn } from "@/lib/utils";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Submitting...
        </>
      ) : (
        "Submit Review"
      )}
    </Button>
  );
}

interface RaceReviewFormProps {
  raceId: string;
  formAction: (
    state: unknown,
    formData: FormData
  ) => Promise<SubmissionResult<string[]>>;
}

export function RaceReviewForm({ raceId, formAction }: RaceReviewFormProps) {
  const [hoverRating, setHoverRating] = useState(0);

  const [lastResult, action] = useActionState(formAction, undefined);
  const [form, fields] = useForm({
    // Sync the result of last submission
    lastResult,

    // Reuse the validation logic on the client
    onValidate({ formData }) {
      return parseWithZod(formData, {
        schema: InsertRaceReviewSchema,
      });
    },

    // Validate the form on blur event triggered
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  const currentRating = String(fields.rating.value || "0");

  return (
    <Card>
      <CardHeader>
        <CardTitle>Submit Your Review</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          id={form.id}
          action={action}
          onSubmit={form.onSubmit}
          className="space-y-4"
          noValidate
        >
          {/* Hidden inputs for raceId and rating */}
          <input type="hidden" name="raceId" value={raceId} />
          <input
            type="hidden"
            key={fields.rating.key}
            name={fields.rating.name}
            value={currentRating || ""}
          />

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
                    (hoverRating || Number(currentRating)) >= star
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  )}
                  onClick={() => {
                    form.update({
                      name: fields.rating.name,
                      value: star.toString(),
                    });
                  }}
                  onMouseEnter={() => setHoverRating(star)}
                />
              ))}
            </div>
            {fields.rating.errors && (
              <p className="text-destructive text-sm">
                {fields.rating.errors.join(", ")}
              </p>
            )}
          </div>
          <div>
            <Textarea
              key={fields.comment.key}
              name={fields.comment.name}
              placeholder="Share your thoughts on the race..."
              className={cn(
                fields.comment.errors && "border-destructive",
                fields.comment.errors && "aria-invalid:ring-destructive/20"
              )}
            />
            <p className="text-destructive text-sm">
              {fields.comment.errors?.join(", ")}
            </p>
          </div>
          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
}
