import { SiteShell } from "@/components/site-shell";
import { ThemeProvider } from "@/components/theme-provider";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "@sohumsuthar/liquid-glass/css/liquid-glass-core.css";
import "@sohumsuthar/liquid-glass/css/liquid-glass-nav.css";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mono",
});

const siteName = DATA.name;
const defaultTitle = `${DATA.name} — Full-Stack Developer`;
const siteHostname = new URL(DATA.url).hostname.replace(/^www\./, "");

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${DATA.url}/#website`,
      name: siteName,
      alternateName: [siteHostname, `${DATA.name} Portfolio`],
      url: DATA.url,
      description: DATA.description,
      inLanguage: "en-US",
      publisher: { "@id": `${DATA.url}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${DATA.url}/#person`,
      name: DATA.name,
      url: DATA.url,
      image: new URL(DATA.avatarUrl, DATA.url).toString(),
      jobTitle: "Full-Stack Developer",
      description: DATA.description,
      email: DATA.contact.email,
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
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  applicationName: siteName,
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: DATA.description,
  keywords: [
    "Jailan Samun",
    "Full-Stack Developer",
    "Software Engineer",
    "Go Developer",
    "Python Developer",
    "Node.js Developer",
    "Next.js Developer",
    "API Developer",
    "PostgreSQL",
    "MySQL",
    "Kabul Afghanistan",
  ],
  authors: [{ name: DATA.name, url: DATA.url }],
  creator: DATA.name,
  publisher: siteName,
  category: "technology",
  classification: "Portfolio",
  referrer: "origin-when-cross-origin",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: siteName,
  },
  alternates: {
    canonical: "/",
    types: {
      "text/plain": "/llms.txt",
    },
  },
  openGraph: {
    title: defaultTitle,
    description: DATA.description,
    url: DATA.url,
    siteName,
    locale: "en_US",
    type: "website",
    emails: [DATA.contact.email],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: defaultTitle,
    description: DATA.description,
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative",
          geist.variable,
          geistMono.variable
        )}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteShell>{children}</SiteShell>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
