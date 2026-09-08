/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DATA } from "@/data/resume";
import { ChevronRight } from "lucide-react";
import Markdown from "react-markdown";

function LogoImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-white overflow-hidden object-contain flex-none"
      onError={() => setImageError(true)}
    />
  );
}

export default function WorkSection() {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue={DATA.work[0].company}
      className="w-full grid gap-6"
    >
      {DATA.work.map((work) => (
        <AccordionItem
          key={work.company}
          value={work.company}
          className="w-full border-b-0 grid gap-2"
        >
          <div className="flex items-center gap-x-3 w-full">
            <a
              href={work.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${work.company}`}
              className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <LogoImage src={work.logoUrl} alt={work.company} />
            </a>
            <AccordionTrigger className="hover:no-underline p-0 cursor-pointer transition-colors rounded-none group [&>svg]:hidden flex-1 min-w-0">
              <div className="flex items-center gap-x-3 justify-between w-full text-left">
                <div className="flex-1 min-w-0 gap-0.5 flex flex-col">
                  <div className="font-semibold leading-none flex items-center gap-2">
                    {work.company}
                    <ChevronRight
                      className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-90"
                      aria-hidden
                    />
                  </div>
                  <div className="font-sans text-sm text-muted-foreground">
                  {work.title}
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                  <span>
                    {work.start} - {work.end ?? "Present"}
                  </span>
                </div>
              </div>
            </AccordionTrigger>
          </div>
          <AccordionContent className="p-0 ml-13 text-xs sm:text-sm text-muted-foreground">
            <Markdown
              components={{
                p: ({ children }) => (
                  <p className="m-0 leading-relaxed">{children}</p>
                ),
                strong: ({ children }) => (
                  <strong className="font-semibold text-foreground">
                    {children}
                  </strong>
                ),
              }}
            >
              {work.description}
            </Markdown>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
