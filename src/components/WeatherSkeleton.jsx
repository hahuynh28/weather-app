import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const WeatherSkeleton = () => {
  return (
    <div className="flex flex-col items-center text-center gap-3 mb-14">
      <Skeleton className="h-5 w-1/3" />
      <Skeleton className="h-4 w-1/2" />
      <Skeleton className="h-4 w-2/3" />
    </div>
  );
};

export default WeatherSkeleton;
