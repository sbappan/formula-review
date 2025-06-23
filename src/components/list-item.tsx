"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  latestRace?: boolean;
}

const ListItem = React.forwardRef<HTMLDivElement, ListItemProps>(
  ({ className, title, latestRace, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none",
          { "bg-primary text-primary-foreground": latestRace },
          className
        )}
        {...props}
      >
        <div className="flex h-full flex-col justify-center">
          <div className="text-sm leading-none font-medium">{title}</div>
        </div>
      </div>
    );
  }
);
ListItem.displayName = "ListItem";

export default ListItem;
