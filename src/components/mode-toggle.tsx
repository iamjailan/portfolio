"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

export function ModeToggle({
  className,
  displayOnly = false,
}: {
  className?: string;
  displayOnly?: boolean;
}) {
  const { resolvedTheme, setTheme } = useTheme();
  const icon = (
    <>
      <MoonIcon className="h-full w-full dark:hidden" />
      <SunIcon className="hidden h-full w-full dark:block" />
    </>
  );

  if (displayOnly) {
    return <span className={cn(className)}>{icon}</span>;
  }

  return (
    <Button
      type="button"
      variant="link"
      size="icon"
      className={cn(className)}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {icon}
    </Button>
  );
}
