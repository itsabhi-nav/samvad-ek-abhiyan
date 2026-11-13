import { getContent } from "@/lib/content";
import Words from "@/components/Words";
import Reveal from "@/components/Reveal";
import CampaignRail from "@/components/CampaignRail";
import Timeline from "@/components/Timeline";
import FocusCards from "@/components/FocusCards";
import CtaBand from "@/components/CtaBand";
import { ArrowRight } from "@/components/Icons";
import { getFounder, getTeam } from "@/lib/people";
import Link from "next/link";

const focusImages = [
  { src: "/images/stock/gram-sabha.jpg", pos: "50% 55%" },
  { src: "/images/stock/parliament.jpg", pos: "50% 50%" },
  { src: "/images/stock/wheat.jpg", pos: "40% 50%" },
];
const journeyImages = {
  1997: { src: "/images/stock/parliament.jpg" },
  2000: { src: "/images/stock/harvest.jpg" },
  2005: { src: "/images/stock/gram-sabha.jpg" },
  2007: { src: "/images/campaign-hariyali.jpg" },
  2012: { src: "/images/campaign-hsm.jpg" },
  2014: { src: "/images/issue-2014-q4.jpg", cover: true },
  2015: { src: "/images/issue-2015-q3.jpg", cover: true },
};

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return { title: getContent(lang).nav[2].label };
}

export default async function About({ params }) {
  const { lang } = await params;
  const t = getContent(lang);
  const a = t.about;
  const arrowLabels = { prev: a.scrollPrev, next: a.scrollNext };
  const base = `/${lang}`;
  const founder = getFounder();
  const team = getTeam();
  return (
    <>
      <section className="page-head page-head--img page-head--compact" style={{ "--img": "url(/images/stock/parliament.jpg)" }}>
        <div className="container">
          <h1><Words text={a.title} /></h1>
          <p className="lead fade-in" style={{ "--d": "240ms" }}>{a.sub}</p>
        </div>
      </section>

      {/* people first: the founder, then the team */}
      <section id="team" className="section section--compact">
        <div className="container">
          <Reveal className="founder-card">
            <Link href={`${base}/about/${founder.slug}`} className="founder-card-photo"><img src={founder.photo} alt={founder.name[lang]} /></Link>
            <div className="founder-card-body">
              <span className="tag">{founder.role[lang]}</span>
              <h2>{founder.name[lang]}</h2>
              <p>{t.founder.bio}</p>
              <p className="founder-more">{t.founder.bio2}</p>
              <ul className="chips-list">{t.founder.points.map((x) => <li key={x}>{x}</li>)}</ul>
              <Link className="btn btn--ghost btn--small founder-btn" href={`${base}/about/${founder.slug}`}>{t.ui2.knowMore}<ArrowRight /></Link>
            </div>
          </Reveal>

          <div className="section-head section-head--tight"><Reveal><h2>{a.teamTitle}</h2><p>{a.teamSub}</p></Reveal></div>
          <div className="team-grid">
            {team.map((p, i) => (
              <Reveal key={p.slug} className="team-card" delay={i * 0.08}>
                <Link href={`${base}/about/${p.slug}`} className="team-card-photo"><img src={p.photo} alt={p.name[lang]} loading="lazy" style={{ objectPosition: p.position }} /></Link>
                <div className="team-card-body">
                  <h3>{p.name[lang]}</h3>
                  <span className="role">{p.role[lang]}</span>
                  <p>{p.short[lang]}</p>
                  <Link className="btn btn--ghost btn--small" href={`${base}/about/${p.slug}`}>{t.ui2.knowMore}<ArrowRight /></Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* story: a photo band with the guiding line, then origin, vision and the four principles */}
      <section id="story" className="story-band">
        <img src="/images/stock/gram-sabha.jpg" alt="" loading="lazy" />
        <div className="story-band-veil" />
        <div className="container story-band-inner">
          <span className="tag">{a.bandLabel}</span>
          <Reveal as="p" className="story-quote">{a.story.quote}</Reveal>
        </div>
      </section>

      <section className="section section--compact light">
        <div className="container">
          <div className="ov-grid">
            <Reveal className="ov-card">
              <span className="ov-label">{a.originLabel}</span>
              <p>{a.story.p1}</p>
            </Reveal>
            <Reveal className="ov-card ov-card--vision" delay={0.08}>
              <span className="ov-label">{a.visionLabel}</span>
              <p>{a.story.p2}</p>
            </Reveal>
          </div>
          <h2 className="princ-title">{a.editorial.title}</h2>
          <div className="princ-grid">
            {a.editorial.items.map((x, i) => (
              <Reveal key={x} className="princ" delay={i * 0.06}>
                <span className="princ-n">{String(i + 1).padStart(2, "0")}</span>
                <p>{x}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FocusCards id="focus" title={a.focusTitle} items={t.focus.items} images={focusImages} labels={arrowLabels} />

      <Timeline id="journey" theme="light" title={a.journeyTitle} items={t.journey} images={journeyImages} labels={arrowLabels} />

      <CampaignRail id="work" title={a.workTitle} sub={a.workSub} items={t.work} labels={arrowLabels} />
      <CtaBand t={t} />
    </>
  );
}
