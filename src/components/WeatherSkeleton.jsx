import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const WeatherSkeleton = () => {
  return (
    <div className="mt-4 rounded-lg bg-[rgb(var(--color-card))] shadow p-4 space-y-2">
      <Skeleton className="h-5 w-1/3" />
      <Skeleton className="h-4 w-1/2" />
      <Skeleton className="h-4 w-2/3" />
    </div>
  );
};

export default WeatherSkeleton;
