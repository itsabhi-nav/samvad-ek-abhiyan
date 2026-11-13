"use client";
import { useState } from "react";
import { ReaderLayer, useReaderLock } from "./IssueReader";
import Reveal from "./Reveal";

// A strip of real pages from the magazine. Clicking one opens the reader on that page.
export default function PagePreviews({ issue, previews, t }) {
  const [page, setPage] = useState(null);
  const open = (p) => { setPage(p); useReaderLock(true); };
  const close = () => { setPage(null); useReaderLock(false); };
  return (
    <>
      <div className="previews-head">
        <Reveal><h2>{t.ui2.pagesInside}</h2><p>{t.ui2.pagesInsideSub}</p></Reveal>
      </div>
      <div className="previews" tabIndex={0}>
        {previews.map((p, i) => (
          <button key={p.n} className="preview" onClick={() => open(p.page)} style={{ "--i": i }}>
            <img src={`/images/preview/${issue.id}-${p.n}.jpg`} alt={`${issue.title}, ${t.ui2.pageWord} ${p.page}`} loading="lazy" width="620" height="820" />
            <span className="meta-line">{t.ui2.pageWord} {p.page}</span>
          </button>
        ))}
      </div>
      <ReaderLayer open={!!page} issue={issue} t={t} page={page || 1} onClose={close} />
    </>
  );
}
