"use client";

import Link from "next/link";

import { signIn, useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function HomeClient() {
  const { status } = useSession();

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Welcome to BoxBox BoxBox</CardTitle>
          <CardDescription>F1 race reviews and ratings</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed">
            BoxBox BoxBox is a website that allows users to review Formula 1
            races, and rate them.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Get Started</CardTitle>
          <CardDescription>Explore race reviews and ratings</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-sm leading-relaxed">
            Ready to dive into the world of Formula 1? Access your dashboard to
            view the latest race reviews, and ratings.
          </p>
          {status === "authenticated" ? (
            <Link
              href="/dashboard"
              className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow transition-colors focus-visible:ring-1 focus-visible:outline-none"
            >
              Go to Dashboard
            </Link>
          ) : (
            <Button onClick={() => signIn("google")}>
              Sign in to get started
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
