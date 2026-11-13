import Link from "next/link";
import { formatDate, getCategory } from "@/lib/stories";

// variant: "feature" (big, image-led) | "row" (thumbnail + text) | "tile" (grid card)
export default function StoryCard({ story, lang, t, variant = "tile", priority = false }) {
  const cat = getCategory(story.category);
  const href = `/${lang}/stories/${story.slug}`;
  const meta = (
    <span className="story-meta">
      <span className="story-cat">{cat.name[lang]}</span>
      <span className="readout">{formatDate(story.date, lang)}</span>
      <span className="readout">{story.readMins} {t.ui2.readMin}</span>
    </span>
  );
  return (
    <article className={`story story--${variant}`}>
      <Link href={href} className="story-link">
        <div className="story-media">
          <img src={story.image} alt="" loading={priority ? "eager" : "lazy"} style={{ objectPosition: story.position }} />
        </div>
        <div className="story-body">
          {meta}
          <h3>{story.title[lang]}</h3>
          {variant !== "row" && <p className="story-excerpt">{story.excerpt[lang]}</p>}
        </div>
      </Link>
    </article>
  );
}
