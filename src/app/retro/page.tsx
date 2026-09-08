/* eslint-disable @next/next/no-img-element */
import { DATA } from "@/data/resume";
import { TimeTravelLink } from "@/components/time-travel-link";
import type { Metadata } from "next";
import styles from "./retro.module.css";

const pageUrl = new URL("/retro", DATA.url).toString();
const pageDescription =
  "Travel back to 1996 with a static, old-school edition of Jailan Samun's full-stack developer portfolio.";

export const metadata: Metadata = {
  title: "Let’s Travel 30 Years Back — 1990s Portfolio",
  description: pageDescription,
  keywords: [
    "Jailan Samun retro portfolio",
    "1990s website portfolio",
    "Full-Stack Developer portfolio",
    "software engineer Afghanistan",
  ],
  alternates: {
    canonical: "/retro",
  },
  openGraph: {
    title: "Jailan Samun’s 1990s Portfolio",
    description: pageDescription,
    url: pageUrl,
    siteName: DATA.name,
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    title: "Jailan Samun’s 1990s Portfolio",
    description: pageDescription,
    card: "summary_large_image",
  },
};

export default function RetroPortfolioPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "Jailan Samun’s 1990s Portfolio",
    description: pageDescription,
    url: pageUrl,
    mainEntity: {
      "@type": "Person",
      name: DATA.name,
      url: DATA.url,
      jobTitle: "Full-Stack Developer",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kabul",
        addressCountry: "AF",
      },
      sameAs: [
        DATA.contact.social.GitHub.url,
        DATA.contact.social.LinkedIn.url,
      ],
    },
  };

  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <a className={styles.skipLink} href="#main-content">
        Skip to content
      </a>

      <div className={styles.window}>
        <header className={styles.header}>
          <p className={styles.welcome}>*** WELCOME TO MY HOME PAGE ***</p>
          <h1>{DATA.name}&apos;s Place on the World Wide Web</h1>
          <p className={styles.subtitle}>Full-Stack Developer &amp; Internet Builder</p>
          <div className={styles.rainbowRule} aria-hidden="true" />
          <p className={styles.notice}>
            🚧 This page is permanently under construction! 🚧
          </p>
        </header>

        <nav className={styles.linkBar} aria-label="Retro portfolio navigation">
          <a href="#about">[ ABOUT ME ]</a>
          <a href="#experience">[ EXPERIENCE ]</a>
          <a href="#skills">[ SKILLS ]</a>
          <a href="#projects">[ COOL LINKS ]</a>
          <a href="#contact">[ E-MAIL ME ]</a>
          <TimeTravelLink href="/" direction="future">
            [ RETURN TO 2026 ]
          </TimeTravelLink>
        </nav>

        <main id="main-content" className={styles.content}>
          <section id="about" className={styles.section}>
            <h2>About Your Webmaster</h2>
            <div className={styles.aboutGrid}>
              <img
                className={styles.avatar}
                src={DATA.avatarUrl}
                alt="Go Gopher mascot"
                width="128"
                height="128"
              />
              <div>
                <p>
                  <b>Hi! I&apos;m Jailan.</b> Thanks for surfing into my little
                  corner of cyberspace.
                </p>
                <p>{DATA.description}</p>
                <p>
                  <b>Location:</b> {DATA.location}
                  <br />
                  <b>Experience:</b> More than 5 years
                  <br />
                  <b>Status:</b> Available on the Information Superhighway
                </p>
              </div>
            </div>
          </section>

          <section id="experience" className={styles.section}>
            <h2>My Work History</h2>
            <div className={styles.tableWrap}>
              <table className={styles.dataTable}>
                <thead>
                  <tr>
                    <th>Dates</th>
                    <th>Company / Position</th>
                    <th>What I Did</th>
                  </tr>
                </thead>
                <tbody>
                  {DATA.work.map((job) => (
                    <tr key={`${job.company}-${job.start}`}>
                      <td>
                        {job.start}
                        <br />to<br />
                        {job.end}
                      </td>
                      <td>
                        <a href={job.href} target="_blank" rel="noreferrer">
                          <b>{job.company}</b>
                        </a>
                        <br />
                        {job.title}
                        <br />
                        <small>{job.location}</small>
                      </td>
                      <td>{job.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="skills" className={styles.section}>
            <h2>Computer Skills</h2>
            <dl className={styles.skillList}>
              {DATA.skillCategories.map((category) => (
                <div key={category.name}>
                  <dt>{category.name}:</dt>
                  <dd>{category.skills.map((skill) => skill.name).join(" • ")}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section id="projects" className={styles.section}>
            <h2>My Cool Web Sites</h2>
            <p className={styles.newLabel}>★ NEW! CHECK THESE OUT! ★</p>
            <div className={styles.projects}>
              {DATA.projects.map((project) => (
                <article className={styles.project} key={project.title}>
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`Screenshot of ${project.title}`}
                      width="140"
                      height="92"
                    />
                  ) : null}
                  <div>
                    <h3>
                      <a href={project.href} target="_blank" rel="noreferrer">
                        {project.title}
                      </a>
                    </h3>
                    <p>{project.description}</p>
                    <p>
                      <b>Made with:</b> {project.technologies.join(", ")}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="contact" className={styles.section}>
            <h2>Sign My Guestbook</h2>
            <p>
              Want to build something cool? Send electronic mail to:
            </p>
            <p className={styles.emailBox}>
              📧 <a href={`mailto:${DATA.contact.email}`}>{DATA.contact.email}</a>
            </p>
            <p>
              You can also find me on{" "}
              <a
                href={DATA.contact.social.GitHub.url}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>{" "}
              and{" "}
              <a
                href={DATA.contact.social.LinkedIn.url}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              .
            </p>
          </section>
        </main>

        <footer className={styles.footer}>
          <div className={styles.counter} aria-label="Visitor counter 000042">
            VISITOR NO. <span>000042</span>
          </div>
          <p>Best viewed with Netscape Navigator at 800 × 600 resolution.</p>
          <p>
            Last updated: September 8, 2026 · © {DATA.name}
          </p>
          <p>
            <TimeTravelLink href="/" direction="future">
              Click here to return to the modern portfolio
            </TimeTravelLink>
          </p>
        </footer>
      </div>
    </div>
  );
}
