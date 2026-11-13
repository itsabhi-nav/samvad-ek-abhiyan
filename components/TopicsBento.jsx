import Link from "next/link";
import { categories, stories } from "@/lib/stories";
import Reveal from "./Reveal";
import { ArrowUpRight } from "./Icons";

export default function TopicsBento({ lang, t }) {
  return (
    <div className="bento">
      {categories.map((c, i) => {
        const n = stories.filter((s) => s.category === c.id).length;
        return (
          <Reveal key={c.id} className={`bento-tile bento-${i + 1}`} delay={(i % 3) * 0.08}>
            <Link href={`/${lang}/stories?topic=${c.id}`}>
              <img src={c.image} alt="" loading="lazy" style={{ objectPosition: c.position }} />
              <span className="bento-veil" />
              <span className="bento-text">
                <span className="readout">{n} {n === 1 && lang === "en" ? "story" : t.topics.count}</span>
                <strong>{c.name[lang]}</strong>
                <span className="bento-blurb">{c.blurb[lang]}</span>
              </span>
              <span className="bento-arrow"><ArrowUpRight /></span>
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}
