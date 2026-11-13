"use client";
import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import StoryCard from "./StoryCard";
import { SearchIcon } from "./Icons";

function Browser({ lang, t, stories, categories }) {
  const params = useSearchParams();
  const [cat, setCat] = useState("all");
  const [q, setQ] = useState("");
  const [sort, setSort] = useState("new");
  const [limit, setLimit] = useState(6);

  useEffect(() => {
    const topic = params.get("topic");
    if (topic && categories.some((c) => c.id === topic)) setCat(topic);
  }, [params, categories]);

  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    let r = stories.filter((x) => (cat === "all" || x.category === cat) && (!s || (x.title[lang] + " " + x.excerpt[lang]).toLowerCase().includes(s)));
    r = [...r].sort((a, b) => (sort === "new" ? (a.date < b.date ? 1 : -1) : a.date > b.date ? 1 : -1));
    return r;
  }, [stories, cat, q, sort, lang]);

  const featured = cat === "all" && !q.trim() && sort === "new" ? list[0] : null;
  const rest = featured ? list.slice(1) : list;
  const shown = rest.slice(0, limit);
  const pills = [{ id: "all", name: { hi: t.ui2.all, en: t.ui2.all } }, ...categories];

  return (
    <>
      <div className="filter-bar">
        <div className="container filter-inner">
          <LayoutGroup id="pills">
            <div className="pills" role="tablist" aria-label="Topics">
              {pills.map((c) => (
                <button key={c.id} role="tab" aria-selected={cat === c.id} className="pill" onClick={() => { setCat(c.id); setLimit(6); }}>
                  {cat === c.id && <motion.span layoutId="pill-bg" className="pill-bg" transition={{ type: "spring", stiffness: 420, damping: 36 }} />}
                  <span>{c.name[lang]}</span>
                </button>
              ))}
            </div>
          </LayoutGroup>
          <div className="filter-tools">
            <label className="search-field">
              <SearchIcon />
              <input value={q} onChange={(e) => { setQ(e.target.value); setLimit(6); }} placeholder={t.storiesPage.search} aria-label={t.storiesPage.search} />
            </label>
            <button className="btn btn--ghost btn--small" onClick={() => setSort((s) => (s === "new" ? "old" : "new"))}>{t.ui2.sort}: {sort === "new" ? t.ui2.newest : t.ui2.oldest}</button>
          </div>
        </div>
      </div>

      <div className="container stories-body">
        <p className="results-count readout">{list.length} {t.ui2.results}</p>

        {featured && (
          <motion.div layout className="featured-wrap">
            <span className="tag tag--accent">{t.storiesPage.featured}</span>
            <StoryCard story={featured} lang={lang} t={t} variant="feature" priority />
          </motion.div>
        )}

        <motion.div layout className="story-grid">
          <AnimatePresence mode="popLayout">
            {shown.map((s) => (
              <motion.div key={s.slug} layout initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}>
                <StoryCard story={s} lang={lang} t={t} variant="tile" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {list.length === 0 && <p className="empty-note">{t.storiesPage.empty}</p>}
        {rest.length > shown.length && (
          <div className="more"><button className="btn btn--ghost btn--lg" onClick={() => setLimit((l) => l + 6)}>{t.ui2.loadMore}</button></div>
        )}
      </div>
    </>
  );
}

export default function StoriesBrowser(props) {
  return <Suspense fallback={null}><Browser {...props} /></Suspense>;
}
