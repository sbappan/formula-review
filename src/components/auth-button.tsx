"use client";

import { signIn, signOut, useSession } from "next-auth/react";

import { Button } from "./ui/button";

export default function AuthButton() {
  const { status } = useSession();

  if (status === "loading") {
    return <Button disabled>Loading...</Button>;
  }

  if (status === "authenticated") {
    return <Button onClick={() => signOut()}>Sign out</Button>;
  }

  return <Button onClick={() => signIn("google")}>Sign in</Button>;
}
