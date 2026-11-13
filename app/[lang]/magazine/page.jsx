import Link from "next/link";
import { getContent, issueMeta, archiveYears } from "@/lib/content";
import Words from "@/components/Words";
import Reveal from "@/components/Reveal";
import Tilt from "@/components/Tilt";
import YearArchive from "@/components/YearArchive";
import IssueReader from "@/components/IssueReader";
import CtaBand from "@/components/CtaBand";
import { ArrowUpRight } from "@/components/Icons";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return { title: getContent(lang).nav[1].label };
}

export default async function Magazine({ params }) {
  const { lang } = await params;
  const t = getContent(lang);
  const m = t.magazinePage;
  const latest = t.issues[0];
  return (
    <>
      <section className="page-head page-head--spot page-head--compact">
        <div className="container spot-grid">
          <div>
            <h1><Words text={m.title} /></h1>
            <p className="lead fade-in" style={{ "--d": "240ms" }}>{m.sub}</p>
            <div className="spot-meta meta-line fade-in" style={{ "--d": "320ms" }}>
              <span>{t.ui2.latestIssue}: {latest.period}</span>
              <span>{t.ui.volume} {latest.volume}, {t.ui.issue} {latest.number}</span>
            </div>
            <div className="hero-actions fade-in" style={{ "--d": "360ms" }}>
              <IssueReader issue={latest} t={t} />
              <Link className="btn btn--ghost btn--lg" href={`/${lang}/magazine/${latest.id}`}>{t.ui.learnMore}<ArrowUpRight /></Link>
            </div>
          </div>
          <div className="fade-in" style={{ "--d": "200ms" }}>
            <div className="cover-stage cover-stage--sm">
              <Tilt max={10}><Link href={`/${lang}/magazine/${latest.id}`} className="cover-card"><img src={latest.cover} alt={latest.title} width="680" height="900" /></Link></Tilt>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--compact light">
        <div className="container">
          <div className="section-head"><Reveal><h2>{m.archiveTitle}</h2><p>{t.quarterly.note}</p></Reveal></div>
          <YearArchive lang={lang} t={t} years={archiveYears} issues={t.issues} meta={issueMeta} />
        </div>
      </section>
      <CtaBand t={t} />
    </>
  );
}
