CREATE TABLE "race-review" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"userId" uuid NOT NULL,
	"raceId" uuid NOT NULL,
	"rating" integer NOT NULL,
	"comment" text,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "race" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"slug" varchar(255) NOT NULL,
	"name" varchar(255) NOT NULL,
	"latestRace" boolean DEFAULT false NOT NULL,
	CONSTRAINT "race_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
ALTER TABLE "race-review" ADD CONSTRAINT "race-review_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "race-review" ADD CONSTRAINT "race-review_raceId_race_id_fk" FOREIGN KEY ("raceId") REFERENCES "public"."race"("id") ON DELETE cascade ON UPDATE no action;