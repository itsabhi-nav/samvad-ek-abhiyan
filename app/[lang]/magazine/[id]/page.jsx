import Link from "next/link";
import { notFound } from "next/navigation";
import { LANGS, content, getContent, issueMeta, issuePreviews } from "@/lib/content";
import Tilt from "@/components/Tilt";
import IssueReader from "@/components/IssueReader";
import PagePreviews from "@/components/PagePreviews";
import CtaBand from "@/components/CtaBand";
import { ArrowLeft, ArrowRight, DownloadIcon } from "@/components/Icons";

export function generateStaticParams() {
  return LANGS.flatMap((lang) => content[lang].issues.map((i) => ({ lang, id: i.id })));
}
export async function generateMetadata({ params }) {
  const { lang, id } = await params;
  const is = getContent(lang).issues.find((i) => i.id === id);
  return is ? { title: `${is.title} (${is.period})`, openGraph: { images: [is.cover] } } : {};
}

export default async function Issue({ params }) {
  const { lang, id } = await params;
  const t = getContent(lang);
  const idx = t.issues.findIndex((i) => i.id === id);
  if (idx < 0) notFound();
  const is = t.issues[idx];
  const newer = t.issues[idx - 1], older = t.issues[idx + 1];
  const q = issueMeta[is.id].q;
  const facts = [
    { l: `${t.ui.volume} / ${t.ui.issue}`, v: `${is.volume} / ${is.number}` },
    { l: t.ui.pages, v: String(is.pages) },
    { l: t.ui.price, v: is.price },
    { l: "", v: t.ui.hindiTag },
  ];
  return (
    <>
      <section className="page-head page-head--spot page-head--compact">
        <div className="container spot-grid">
          <div>
            <Link className="back-link" href={`/${lang}/magazine`}><ArrowLeft />{t.nav[1].label}</Link>
            <span className="tag tag--accent">Q{q}, {t.quarterly.q[q - 1]} {is.year}</span>
            <h1 className="issue-title">{is.title}</h1>
            <p className="lead">{is.text}</p>
            <dl className="hero-facts issue-facts">
              {facts.map((f) => (<div key={f.v}><dt>{f.v}</dt>{f.l && <dd>{f.l}</dd>}</div>))}
            </dl>
            <div className="hero-actions">
              <IssueReader issue={is} t={t} />
              <a className="btn btn--ghost btn--lg" href={is.pdf} download>{t.ui.download}<DownloadIcon /></a>
            </div>
          </div>
          <div><div className="cover-stage cover-stage--sm"><Tilt max={10}><div className="cover-card"><img src={is.cover} alt={is.title} width="680" height="900" /></div></Tilt></div></div>
        </div>
      </section>

      <section className="section section--compact previews-section">
        <div className="container"><PagePreviews issue={is} previews={issuePreviews[is.id] ?? []} t={t} /></div>
      </section>

      {(older || newer) && (
        <section className="issue-nav-wrap">
          <div className="container issue-nav">
            {older ? <Link href={`/${lang}/magazine/${older.id}`} className="issue-nav-link"><ArrowLeft /><span><span className="label">{t.magazinePage.prev}</span><strong>{older.title}</strong></span></Link> : <span />}
            {newer ? <Link href={`/${lang}/magazine/${newer.id}`} className="issue-nav-link issue-nav-link--r"><span><span className="label">{t.magazinePage.next}</span><strong>{newer.title}</strong></span><ArrowRight /></Link> : <span />}
          </div>
        </section>
      )}
      <CtaBand t={t} />
    </>
  );
}
