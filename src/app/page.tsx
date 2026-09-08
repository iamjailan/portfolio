/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import { Button } from "@/components/ui/button";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";
import { ArrowUpRight, Download, History } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
            <div className="gap-2 flex flex-col order-2 md:order-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
              />
              <BlurFadeText
                className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 2} className="mt-3">
                <div className="flex flex-wrap gap-2">
                  <Button asChild variant="outline" className="w-fit gap-2">
                    <a href={DATA.resumeUrl} download="Jailan_Samun_CV.pdf">
                      <Download className="size-4" aria-hidden />
                      Download CV
                    </a>
                  </Button>
                  <Button asChild variant="secondary" className="w-fit gap-2">
                    <Link href="/retro">
                      <History className="size-4" aria-hidden />
                      Let&apos;s travel 30 years back
                    </Link>
                  </Button>
                </div>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <div className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted bg-muted/40 p-5 flex items-center justify-center">
                <img
                  src={DATA.avatarUrl}
                  alt="Go Gopher mascot"
                  className="size-full object-contain"
                />
              </div>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="terminal-intro" aria-labelledby="terminal-intro-heading">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 id="terminal-intro-heading" className="text-xl font-bold">
              A quick introduction
            </h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <Terminal className="w-full" title="jailan@portfolio: ~ — zsh">
              <TypingAnimation className="text-[#8ae234]">
                {"jailan@portfolio:~$ whoami"}
              </TypingAnimation>
              <AnimatedSpan className="text-[#f7f1f5]">
                Jailan Samun — Full-Stack Developer
              </AnimatedSpan>
              <TypingAnimation className="mt-2 text-[#8ae234]">
                {"jailan@portfolio:~$ cat profile.txt"}
              </TypingAnimation>
              <AnimatedSpan className="text-[#f7f1f5]">
                {DATA.description}
              </AnimatedSpan>
              <TypingAnimation className="mt-2 text-[#8ae234]">
                {"jailan@portfolio:~$ stack --primary"}
              </TypingAnimation>
              <AnimatedSpan className="text-[#fce94f]">
                Go · Python · Node.js · TypeScript · PostgreSQL · MySQL
              </AnimatedSpan>
              <TypingAnimation className="mt-2 text-[#8ae234]">
                {"jailan@portfolio:~$ pwd"}
              </TypingAnimation>
              <AnimatedSpan className="text-[#d6c5d1]">
                {DATA.location}
              </AnimatedSpan>
              <TypingAnimation className="mt-2 text-[#8ae234]">
                {"jailan@portfolio:~$ echo $MISSION"}
              </TypingAnimation>
              <AnimatedSpan className="text-[#fcaf3e]">
                Building thoughtful products that feel fast, useful, and dependable.
              </AnimatedSpan>
            </Terminal>
          </BlurFade>
        </div>
      </section>
      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>
                {DATA.summary}
              </Markdown>
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          <div className="flex flex-col gap-8">
            {DATA.education.map((education, index) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + index * 0.05}
              >
                <Link
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-3 justify-between group"
                >
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    {education.logoUrl ? (
                      <img
                        src={education.logoUrl}
                        alt={education.school}
                        className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-white overflow-hidden object-contain flex-none"
                      />
                    ) : (
                      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
                    )}
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <div className="font-semibold leading-none flex items-center gap-2">
                        {education.school}
                        <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" aria-hidden />
                      </div>
                      <div className="font-sans text-sm text-muted-foreground">
                        {education.degree}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                    <span>
                      {education.start} - {education.end}
                    </span>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-8">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl">
              My Skills
            </h2>
          </BlurFade>
          <div className="flex flex-col gap-y-7">
            {DATA.skillCategories.map((category, categoryIndex) => (
              <div key={category.name} className="flex flex-col items-center gap-3">
                <BlurFade delay={BLUR_FADE_DELAY * 10 + categoryIndex * 0.08}>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {category.name}
                  </h3>
                </BlurFade>
                <div className="flex flex-wrap justify-center gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <BlurFade
                      key={skill.name}
                      delay={BLUR_FADE_DELAY * 10 + categoryIndex * 0.08 + skillIndex * 0.03}
                    >
                      <div className="border bg-muted/60 border-border rounded-xl h-10 w-fit px-4 flex items-center gap-2">
                        {skill.icon && (
                          <skill.icon className="size-4 rounded overflow-hidden object-contain" />
                        )}
                        <span className="text-foreground text-sm font-medium">
                          {skill.name}
                        </span>
                      </div>
                    </BlurFade>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <ProjectsSection />
        </BlurFade>
      </section>
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
