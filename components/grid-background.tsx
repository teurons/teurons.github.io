"use client";

import { cn } from "@/lib/utils";
import { FC } from "react";
import { useTheme } from "next-themes";

interface GridBackgroundProps {
  columns?: number;
  className?: string;
  baseColor?: string;
  dottedColor?: string;
  maxWidthClass?: string;
}

export const GridBackground: FC<GridBackgroundProps> = ({
  columns = 4,
  className = "",
  maxWidthClass = "container",
}) => {
  const { theme } = useTheme();

  // Create array based on column count
  const columnElements = Array.from({ length: columns }, (_, i) => (
    <div
      key={i}
      className="h-full w-px"
      style={{
        backgroundColor: i === 0 ? "var(--grid-base-color)" : "transparent",
        backgroundImage:
          i === 0
            ? "none"
            : `linear-gradient(180deg, var(--grid-dots-color) 50%, transparent 50%)`,
        backgroundSize: i === 0 ? "auto" : "1px 8px",
      }}
    />
  ));

  return (
    <div
      className={`stripe-grid absolute -z-50 inset-0 h-full w-full ${className}`}
    >
      <div className="relative h-full w-full overflow-hidden">
        <div
          className="pointer-events-none absolute top-0 left-0 h-full w-full"
          aria-hidden="true"
        >
          <div
            className={cn(
              "relative mx-auto grid h-full grid-cols-4 grid-rows-1",
              maxWidthClass
            )}
          >
            {columnElements}
            <div
              className="absolute top-0 right-0 h-full w-px"
              style={{ backgroundColor: "var(--grid-base-color)" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
