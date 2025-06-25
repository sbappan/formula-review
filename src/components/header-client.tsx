"use client";

import Link from "next/link";

import { useSession } from "next-auth/react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/ui/theme-switcher";

import AuthButton from "./auth-button";
import ListItem from "./list-item";

interface Race {
  id: string;
  name: string;
  latestRace: boolean;
}
interface HeaderClientProps {
  races: Race[];
}

export function HeaderClient({ races }) {
  const { status } = useSession();

  return (
    <header className="px-4 py-4 sm:px-20">
      <div className="flex items-center justify-between">
        <NavigationMenu>
          <NavigationMenuList>
            {status === "authenticated" && (
              <>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href="/dashboard">Dashboard</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href="/profile">Profile</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>2025</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[calc(100vw-2rem)] gap-3 p-4 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {races.map((race) => (
                        <li key={race.id}>
                          <NavigationMenuLink asChild>
                            <Link href={`/races/${race.slug}`} passHref>
                              <ListItem
                                title={race.name}
                                latestRace={race.latestRace}
                              />
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </>
            )}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <AuthButton />
        </div>
      </div>
    </header>
  );
}
