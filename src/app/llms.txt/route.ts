import { DATA } from "@/data/resume";
import { allPosts } from "content-collections";

export const dynamic = "force-static";

function absoluteUrl(path: string) {
  return new URL(path, DATA.url).toString();
}

export function GET() {
  const posts = [...allPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const content = [
    `# ${DATA.name}`,
    "",
    `> ${DATA.description}`,
    "",
    `${DATA.name} is a full-stack developer based in ${DATA.location}. This site contains a professional portfolio, selected projects, work experience, technical skills, and articles about software development.`,
    "",
    "## Main pages",
    "",
    `- [Portfolio](${absoluteUrl("/")}): Work experience, education, skills, projects, and contact information.`,
    `- [Blog](${absoluteUrl("/blog")}): Articles about web development and software engineering.`,
    `- [1990s Portfolio](${absoluteUrl("/retro")}): A static, accessible 1990s-style edition of the same portfolio.`,
    `- [Résumé PDF](${absoluteUrl(DATA.resumeUrl)}): Downloadable professional résumé.`,
    "",
    "## Selected projects",
    "",
    ...DATA.projects.map(
      (project) =>
        `- ${project.title}: ${project.description} Technologies: ${project.technologies.join(", ")}.`
    ),
    "",
    "## Blog posts",
    "",
    ...posts.map((post) => {
      const slug = post._meta.path.replace(/\.mdx$/, "");
      return `- [${post.title}](${absoluteUrl(`/blog/${slug}`)}): ${post.summary}`;
    }),
    "",
    "## Contact",
    "",
    `- [Email](mailto:${DATA.contact.email})`,
    `- [GitHub](${DATA.contact.social.GitHub.url})`,
    `- [LinkedIn](${DATA.contact.social.LinkedIn.url})`,
    "",
  ].join("\n");

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
