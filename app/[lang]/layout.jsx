import { notFound } from "next/navigation";
import { Geist, Fraunces, Noto_Serif_Devanagari, Noto_Sans_Devanagari } from "next/font/google";
import "../../styles/globals.css";
import { LANGS, getContent } from "@/lib/content";
import { getSiteUrl, pageMetadata } from "@/lib/seo";
import { sortedStories, getCategory } from "@/lib/stories";
import Providers from "@/components/Providers";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geist = Geist({ subsets: ["latin"], variable: "--f-geist", display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], axes: ["opsz", "SOFT"], variable: "--f-fraunces", display: "swap" });
const notoSerif = Noto_Serif_Devanagari({ subsets: ["devanagari", "latin"], weight: ["400", "500", "600", "700"], variable: "--f-noto-serif", display: "swap", preload: false });
const notoSans = Noto_Sans_Devanagari({ subsets: ["devanagari", "latin"], weight: ["400", "500", "600"], variable: "--f-noto-sans", display: "swap", preload: false });

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const t = getContent(lang);
  const title = t.meta.title;
  const metadata = pageMetadata({
    lang,
    imageAlt: lang === "hi" ? "संवाद – एक अभियान" : "Samvad – Ek Abhiyaan",
  });
  return {
    metadataBase: getSiteUrl(),
    title: { default: title, template: `%s | ${title}` },
    ...metadata,
    icons: { icon: "/images/logo.png" },
  };
}

export const viewport = { themeColor: "#0e0c0b" };

export default async function RootLayout({ children, params }) {
  const { lang } = await params;
  if (!LANGS.includes(lang)) notFound();
  const t = getContent(lang);
  const fonts = [geist, fraunces, notoSerif, notoSans].map((f) => f.variable).join(" ");

  // Search index for the ⌘K palette
  const index = [
    { type: "page", title: lang === "hi" ? "मुख्य पृष्ठ" : "Home", href: "" },
    ...t.nav.map((n) => ({ type: "page", title: n.label, href: n.href })),
    ...sortedStories().map((s) => ({ type: "story", title: s.title[lang], sub: getCategory(s.category).name[lang], text: s.excerpt[lang], href: `/stories/${s.slug}` })),
    ...t.issues.map((i) => ({ type: "issue", title: `${i.title} (${i.period})`, href: `/magazine/${i.id}` })),
  ];

  return (
    <html lang={lang} className={fonts}>
      <body className={`lang-${lang}`}>
        <noscript><style>{`[data-reveal]{opacity:1!important;transform:none!important}.page-loader{display:none!important}`}</style></noscript>
        <SmoothScroll />
        <Providers lang={lang} t={t} index={index}>
          <a className="skip" href="#main">{t.ui.skip}</a>
          <Header lang={lang} t={t} />
          <main id="main">{children}</main>
          <Footer lang={lang} t={t} />
        </Providers>
      </body>
    </html>
  );
}
