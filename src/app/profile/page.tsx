import { User, getServerSession } from "next-auth";

import options from "@/config/auth";
import requireAuth from "@/utils/require-auth";

import { UserProfileCard } from "./_components/user-profile-card";

export default async function ProfilePage() {
  await requireAuth();
  const session = await getServerSession(options);

  return (
    <div className="flex h-full w-full items-center justify-center p-4">
      <UserProfileCard
        user={session?.user as Pick<User, "email" | "name" | "image">}
      />
    </div>
  );
}
