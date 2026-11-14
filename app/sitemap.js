import { content, LANGS } from "@/lib/content";
import { people } from "@/lib/people";
import { stories } from "@/lib/stories";
import { getSiteUrl } from "@/lib/seo";

export default function sitemap() {
  const siteUrl = getSiteUrl();
  const paths = [
    "",
    "/about",
    "/stories",
    "/magazine",
    "/contact",
    "/credits",
    ...stories.map((story) => `/stories/${story.slug}`),
    ...people.map((person) => `/about/${person.slug}`),
    ...content.en.issues.map((issue) => `/magazine/${issue.id}`),
  ];

  return LANGS.flatMap((lang) =>
    paths.map((path) => ({
      url: new URL(`/${lang}${path}`, siteUrl).toString(),
      alternates: {
        languages: Object.fromEntries(LANGS.map((otherLang) => [
          otherLang,
          new URL(`/${otherLang}${path}`, siteUrl).toString(),
        ])),
      },
    })),
  );
}
