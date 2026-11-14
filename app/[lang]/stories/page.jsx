import { getContent } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { categories, sortedStories } from "@/lib/stories";
import Words from "@/components/Words";
import StoriesBrowser from "@/components/StoriesBrowser";
import CtaBand from "@/components/CtaBand";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const t = getContent(lang);
  return pageMetadata({ lang, title: t.storiesPage.title, description: t.storiesPage.sub, path: "/stories", image: "/images/stock/voters.jpg" });
}

export default async function Stories({ params }) {
  const { lang } = await params;
  const t = getContent(lang);
  return (
    <>
      <section className="page-head page-head--img" style={{ "--img": "url(/images/stock/voters.jpg)" }}>
        <div className="container">
          <h1><Words text={t.storiesPage.title} /></h1>
          <p className="lead fade-in" style={{ "--d": "240ms" }}>{t.storiesPage.sub}</p>
        </div>
      </section>
      <StoriesBrowser lang={lang} t={t} stories={sortedStories()} categories={categories} />
      <CtaBand t={t} />
    </>
  );
}
