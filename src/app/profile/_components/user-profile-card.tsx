import Image from "next/image";

import { type User } from "next-auth";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface UserProfileCardProps {
  user: Pick<User, "email" | "name" | "image">;
}

export function UserProfileCard({ user }: UserProfileCardProps) {
  const { name, email, image } = user;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-4">
          {image && (
            <Image
              src={image}
              alt={name ?? "User avatar"}
              width={64}
              height={64}
              className="rounded-full"
            />
          )}
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{email}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
