"use client";
import { useMemo, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";

// Long profile text, organised: tabs when a person has several parts, and a "read full profile" fold on phones.
function Expand({ children, t }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="pexpand-wrap">
      <div className={`pexpand ${open ? "" : "clamp"}`}>{children}</div>
      <button type="button" className="pexpand-btn" onClick={() => setOpen((o) => !o)} aria-expanded={open}>{open ? t.showLess : t.readFull}</button>
    </div>
  );
}

function Block({ b, lang, t, showTitle }) {
  const body = (
    <>
      {b.kind === "paras" && b[lang].map((x, n) => <p key={n}>{x}</p>)}
      {b.kind === "list" && <ol>{b[lang].map((x, n) => <li key={n}><span className="num">{String(n + 1).padStart(2, "0")}</span><span>{x}</span></li>)}</ol>}
      {b.kind === "quote" && (<div className="pquote"><strong>{b.label[lang]}</strong>{b[lang].map((x, n) => <p key={n}>{x}</p>)}</div>)}
    </>
  );
  return (
    <section className={`pblock pblock--${b.kind}`}>
      {showTitle && <h2>{b.title[lang]}</h2>}
      {b.kind === "paras" ? <Expand t={t}>{body}</Expand> : body}
    </section>
  );
}

export default function PersonBody({ blocks, lang, t }) {
  const groups = useMemo(() => {
    const g = [];
    blocks.forEach((b) => {
      const label = b.tab ?? b.title;
      let x = g.find((y) => y.key === label.en);
      if (!x) { x = { key: label.en, label: label[lang], blocks: [] }; g.push(x); }
      x.blocks.push(b);
    });
    return g;
  }, [blocks, lang]);
  const [i, setI] = useState(0);
  const many = groups.length > 1;
  const cur = groups[i];

  return (
    <div className="pbody">
      {many && (
        <LayoutGroup id="ptabs">
          <div className="tabs ptabs" role="tablist">
            {groups.map((g, k) => (
              <button key={g.key} role="tab" className="tab" aria-selected={i === k} onClick={() => setI(k)}>
                {i === k && <motion.span layoutId="ptab-pill" className="tab-pill" transition={{ type: "spring", stiffness: 420, damping: 36 }} />}
                <span>{g.label}</span>
              </button>
            ))}
          </div>
        </LayoutGroup>
      )}
      <AnimatePresence mode="wait">
        <motion.div key={cur.key} className="ppanel" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
          {cur.blocks.map((b, n) => (
            <Block key={n} b={b} lang={lang} t={t} showTitle={!many || n > 0} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
