import Link from "next/link";
import { getContent, issueMeta } from "@/lib/content";
import { sortedStories } from "@/lib/stories";
import Hero from "@/components/Hero";
import Standard from "@/components/Standard";
import SubscribeStrip from "@/components/SubscribeStrip";
import ScrollWords from "@/components/ScrollWords";
import StoryCard from "@/components/StoryCard";
import FocusShowcase from "@/components/FocusShowcase";
import MagazineShelf from "@/components/MagazineShelf";
import TopicsBento from "@/components/TopicsBento";
import CampaignRail from "@/components/CampaignRail";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { ArrowRight } from "@/components/Icons";

export default async function Home({ params }) {
  const { lang } = await params;
  const t = getContent(lang);
  const base = `/${lang}`;
  const latest = t.issues[0];
  const top = sortedStories().slice(0, 4);
  const year = issueMeta[latest.id].year;
  const quarters = [1, 2, 3, 4].map((q) => ({ q, state: t.issues.some((i) => issueMeta[i.id].year === year && issueMeta[i.id].q === q) ? "live" : "soon" }));

  return (
    <>
      <Hero lang={lang} t={t} issues={t.issues} />

      <section className="section section--statement">
        <div className="container">
          <ScrollWords text={t.statement} />
        </div>
      </section>

      <section className="section light">
        <div className="container">
          <div className="section-head">
            <Reveal>
              <h2>{t.latest.title}</h2>
              <p>{t.latest.sub}</p>
            </Reveal>
            <Reveal delay={0.1} className="head-cta">
              <Link className="btn btn--dark" href={`${base}/stories`}>{t.latest.cta}<ArrowRight /></Link>
            </Reveal>
          </div>
          <div className="latest-grid">
            <Reveal><span className="tag tag--accent latest-tag">{t.ui2.latestStory}</span><StoryCard story={top[0]} lang={lang} t={t} variant="feature" priority /></Reveal>
            <div className="latest-rows">
              {top.slice(1).map((s, i) => (
                <Reveal key={s.slug} delay={0.08 * (i + 1)}><StoryCard story={s} lang={lang} t={t} variant="row" /></Reveal>
              ))}
            </div>
          </div>
          <div className="section-foot">
            <Link className="btn btn--dark btn--lg" href={`${base}/stories`}>{t.latest.cta}<ArrowRight /></Link>
          </div>
        </div>
      </section>

      <section className="strip-section"><div className="container"><SubscribeStrip t={t} /></div></section>

      <FocusShowcase
        title={t.focusShow.title}
        items={t.focus.items}
        images={[
          { src: "/images/stock/gram-sabha.jpg", position: "50% 55%" },
          { src: "/images/stock/parliament.jpg", position: "50% 50%" },
          { src: "/images/stock/wheat.jpg", position: "40% 50%" },
        ]}
      />

      <section className="section section--shelf">
        <MagazineShelf lang={lang} t={t} issues={t.issues} quarters={quarters} />
      </section>

      <section className="section light">
        <div className="container">
          <div className="section-head">
            <Reveal><h2>{t.topics.title}</h2><p>{t.topics.sub}</p></Reveal>
          </div>
          <TopicsBento lang={lang} t={t} />
        </div>
      </section>

      <Standard t={t} />

      <CampaignRail theme="light" title={t.workHome.title} sub={t.workHome.sub} items={t.work} labels={{ prev: t.about.scrollPrev, next: t.about.scrollNext }} />

      <CtaBand t={t} />
    </>
  );
}
