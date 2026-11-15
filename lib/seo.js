import { getContent, site } from "@/lib/content";

export function getSiteUrl() {
  const configuredUrl = new URL(process.env.SITE_URL?.trim() || site.url);
  if (configuredUrl.protocol !== "https:" && configuredUrl.protocol !== "http:") {
    throw new Error("SITE_URL must use HTTP or HTTPS.");
  }
  return new URL(configuredUrl.origin);
}

export function pageMetadata({ lang, title, description, path = "", image = "/images/og-samvad.jpg", imageAlt, type = "website" }) {
  const t = getContent(lang);
  const pageTitle = title || t.meta.title;
  const pageDescription = description || t.meta.description;
  const socialImage = { url: image, alt: imageAlt || pageTitle };
  const localizedPath = `/${lang}${path}`;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: localizedPath,
      languages: { hi: `/hi${path}`, en: `/en${path}` },
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: localizedPath,
      siteName: t.meta.title,
      locale: lang === "hi" ? "hi_IN" : "en_IN",
      type,
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [socialImage],
    },
  };
}
