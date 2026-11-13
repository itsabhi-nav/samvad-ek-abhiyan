import Link from "next/link";
import { notFound } from "next/navigation";
import { LANGS, getContent } from "@/lib/content";
import { formatDate, getCategory, getStory, sortedStories, stories } from "@/lib/stories";
import { getAuthor } from "@/lib/authors";
import StoryCard from "@/components/StoryCard";
import AuthorCard from "@/components/AuthorCard";
import SubscribeStrip from "@/components/SubscribeStrip";
import ShareBar from "@/components/ShareBar";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { ArrowLeft, ArrowRight } from "@/components/Icons";

export function generateStaticParams() {
  return LANGS.flatMap((lang) => stories.map((s) => ({ lang, slug: s.slug })));
}

export async function generateMetadata({ params }) {
  const { lang, slug } = await params;
  const s = getStory(slug);
  if (!s) return {};
  return { title: s.title[lang], description: s.excerpt[lang], openGraph: { images: [s.image] } };
}

export default async function Story({ params }) {
  const { lang, slug } = await params;
  const s = getStory(slug);
  if (!s) notFound();
  const t = getContent(lang);
  const cat = getCategory(s.category);
  const author = getAuthor(t, s.authorId);
  const all = sortedStories();
  const idx = all.findIndex((x) => x.slug === s.slug);
  const next = all[(idx + 1) % all.length];
  const related = all.filter((x) => x.slug !== s.slug).sort((a) => (a.category === s.category ? -1 : 1)).slice(0, 3);
  const body = s.body[lang];

  return (
    <article>
      <header className="article-hero">
        <div className="article-hero-media"><img src={s.image} alt="" fetchPriority="high" style={{ objectPosition: s.position }} /></div>
        <div className="article-hero-veil" />
        <div className="container article-hero-inner">
          <Link className="back-link" href={`/${lang}/stories`}><ArrowLeft />{t.ui2.backStories}</Link>
          <Link className="tag tag--accent" href={`/${lang}/stories?topic=${cat.id}`}>{cat.name[lang]}</Link>
          <h1>{s.title[lang]}</h1>
          <p className="lead">{s.excerpt[lang]}</p>
          <div className="byline">
            <img src={author.photo} alt="" width="44" height="44" />
            <div>
              <strong>{author.name}</strong>
              <span className="readout">{formatDate(s.date, lang)}</span>
              <span className="readout">{s.readMins} {t.ui2.readMin}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="light article-wrap"><div className="container article-layout">
        <aside className="article-side"><ShareBar title={s.title[lang]} t={t} /></aside>
        <div className="article-body">
          <p className="dropcap">{body[0]}</p>
          <blockquote>{s.quote[lang]}</blockquote>
          {body.slice(1).map((p, i) => <p key={i}>{p}</p>)}
          <AuthorCard author={author} t={t} lang={lang} bio={author.text} />
          <SubscribeStrip t={t} className="strip--article" />
        </div>
      </div></div>

      <section className="section light">
        <div className="container">
          <div className="section-head"><Reveal><h2>{t.ui2.related}</h2></Reveal></div>
          <div className="story-grid story-grid--3">
            {related.map((r, i) => <Reveal key={r.slug} delay={i * 0.08}><StoryCard story={r} lang={lang} t={t} variant="tile" /></Reveal>)}
          </div>
        </div>
      </section>

      <Link href={`/${lang}/stories/${next.slug}`} className="next-story">
        <div className="next-media"><img src={next.image} alt="" loading="lazy" style={{ objectPosition: next.position }} /></div>
        <div className="container next-inner">
          <span className="label">{t.ui2.nextStory}</span>
          <h2>{next.title[lang]}<ArrowRight /></h2>
        </div>
      </Link>

      <CtaBand t={t} />
    </article>
  );
}
