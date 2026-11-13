import Link from "next/link";
import { notFound } from "next/navigation";
import { LANGS, getContent } from "@/lib/content";
import { people, getPerson } from "@/lib/people";
import PersonBody from "@/components/PersonBody";
import CtaBand from "@/components/CtaBand";
import SubscribeStrip from "@/components/SubscribeStrip";
import { ArrowLeft, ArrowRight } from "@/components/Icons";

export function generateStaticParams() {
  return LANGS.flatMap((lang) => people.map((p) => ({ lang, slug: p.slug })));
}
export async function generateMetadata({ params }) {
  const { lang, slug } = await params;
  const p = getPerson(slug);
  return p ? { title: `${p.name[lang]}, ${p.role[lang]}`, description: p.short[lang], openGraph: { images: [p.photo] } } : {};
}

export default async function Person({ params }) {
  const { lang, slug } = await params;
  const p = getPerson(slug);
  if (!p) notFound();
  const t = getContent(lang);
  const base = `/${lang}`;
  const others = people.filter((x) => x.slug !== slug);

  return (
    <>
      <section className="person-hero">
        <div className="container person-hero-grid">
          <div className="ph-head">
            <Link className="back-link" href={`${base}/about`}><ArrowLeft />{t.ui2.personAbout}</Link>
            <span className="tag tag--accent">{p.role[lang]}</span>
            <h1>{p.name[lang]}</h1>
          </div>
          <p className="lead ph-lead">{p.short[lang]}</p>
          <div className="person-hero-photo">
            <img src={p.photo} alt={p.name[lang]} style={{ objectPosition: p.position }} fetchPriority="high" />
          </div>
        </div>
      </section>

      <section className="section--compact light person-body">
        <div className="container person-layout">
          <aside className="person-facts">
            <h2>{t.ui2.personAt}</h2>
            <dl>
              {p.facts.map((f) => (
                <div key={f.l.en}><dt>{f.l[lang]}</dt><dd>{f.v[lang]}</dd></div>
              ))}
            </dl>
          </aside>
          <PersonBody blocks={p.blocks} lang={lang} t={t.ui2} />
        </div>
      </section>

      <section className="person-more">
        <div className="container">
          <h2>{t.ui2.moreTeam}</h2>
          <div className="more-grid">
            {others.map((o) => (
              <Link key={o.slug} href={`${base}/about/${o.slug}`} className="more-card">
                <img src={o.photo} alt="" loading="lazy" style={{ objectPosition: o.position }} />
                <span><strong>{o.name[lang]}</strong><span>{o.role[lang]}</span></span>
                <ArrowRight />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="only-desktop"><CtaBand t={t} /></div>
      <section className="strip-section only-mobile"><div className="container"><SubscribeStrip t={t} /></div></section>
    </>
  );
}
