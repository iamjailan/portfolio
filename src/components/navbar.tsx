"use client";

import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { TimeTravelLink } from "@/components/time-travel-link";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import type { PointerEvent as ReactPointerEvent } from "react";

const SOCIAL_ICON_COLORS: Record<string, string> = {
  GitHub: "text-white",
  LinkedIn: "bg-white p-1 text-[#0a66c2]",
  WhatsApp: "text-[#25d366]",
};

function updateGlassLighting(event: ReactPointerEvent<HTMLDivElement>) {
  const glass = event.currentTarget;
  const bounds = glass.getBoundingClientRect();
  const x = event.clientX - bounds.left;
  const y = event.clientY - bounds.top;
  const dx = x - bounds.width / 2;
  const dy = y - bounds.height / 2;
  const angle = (Math.atan2(dx, -dy) * 180) / Math.PI;

  glass.style.setProperty("--mx", `${x}px`);
  glass.style.setProperty("--my", `${y}px`);
  glass.style.setProperty("--lg-light-angle", `${angle.toFixed(1)}deg`);
}

export default function Navbar() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <nav
      aria-label="Primary navigation"
      className="pointer-events-none fixed inset-x-0 bottom-4 z-30 px-3"
    >
      <div
        className="liquid-glass lg-regular lg-dimmed lg-interactive ios-liquid-dock pointer-events-auto mx-auto w-fit"
        onPointerMove={updateGlassLighting}
      >
        <div className="liquid-glass-effect" />
        <div className="liquid-glass-tint" />
        <div className="liquid-glass-shine" />
        <div className="liquid-glass-content p-1">
          <Dock
            magnification={52}
            distance={88}
            className="relative z-50 mx-auto flex h-14 w-fit gap-1.5 border-0 bg-transparent p-1.5 shadow-none"
          >
        {DATA.navbar.map((item) => {
          const isExternal = item.href.startsWith("http");
          const isTimeTravel = item.href === "/retro";
          const isActive =
            item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

          const icon = (
            <DockIcon
              className={cn(
                "ios-glass-icon lg-nav-btn size-full cursor-pointer rounded-[17px] p-0 text-white",
                isActive && "is-active"
              )}
            >
              <item.icon className="size-full overflow-hidden rounded-sm object-contain" />
            </DockIcon>
          );

          return (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                {isTimeTravel ? (
                  <TimeTravelLink
                    href="/retro"
                    aria-label={item.label}
                    aria-current={isActive ? "page" : undefined}
                    className="rounded-[17px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                  >
                    {icon}
                  </TimeTravelLink>
                ) : (
                  <a
                    href={item.href}
                    aria-label={item.label}
                    aria-current={isActive ? "page" : undefined}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="rounded-[17px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                  >
                    {icon}
                  </a>
                )}
              </TooltipTrigger>
              <TooltipContent
                side="top"
                sideOffset={8}
                className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
              >
                <p>{item.label}</p>
                <TooltipArrow className="fill-primary" />
              </TooltipContent>
            </Tooltip>
          );
        })}
        <Separator
          orientation="vertical"
          className="m-auto h-1/2 w-px bg-black/10 dark:bg-white/15"
        />
        {Object.entries(DATA.contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([name, social], index) => {
            const isExternal = social.url.startsWith("http");
            const IconComponent = social.icon;
            return (
              <Tooltip key={`social-${name}-${index}`}>
                <TooltipTrigger asChild>
                  <a
                    href={social.url}
                    aria-label={social.name}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="rounded-[17px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                  >
                    <DockIcon className="ios-glass-icon lg-nav-btn size-full cursor-pointer rounded-[17px] p-0">
                      <IconComponent
                        className={`size-full rounded-sm overflow-hidden object-contain ${SOCIAL_ICON_COLORS[name] ?? "text-foreground"}`}
                      />
                    </DockIcon>
                  </a>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  sideOffset={8}
                  className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
                >
                  <p>{name}</p>
                  <TooltipArrow className="fill-primary" />
                </TooltipContent>
              </Tooltip>
            );
          })}
        <Separator
          orientation="vertical"
          className="m-auto h-1/2 w-px bg-black/10 dark:bg-white/15"
        />
        <Tooltip>
          <TooltipTrigger asChild>
            <DockIcon
              ariaLabel="Toggle theme"
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="ios-glass-icon lg-nav-btn size-full cursor-pointer rounded-[17px] p-0 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
            >
              <ModeToggle displayOnly className="pointer-events-none size-full" />
            </DockIcon>
          </TooltipTrigger>
          <TooltipContent
            side="top"
            sideOffset={8}
            className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
          >
            <p>Theme</p>
            <TooltipArrow className="fill-primary" />
          </TooltipContent>
        </Tooltip>
          </Dock>
        </div>
      </div>
    </nav>
  );
}
