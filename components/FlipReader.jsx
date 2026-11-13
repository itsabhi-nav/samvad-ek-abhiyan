"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "./Icons";

// Page-turning reader. pdf.js draws each PDF page to an image on demand, StPageFlip turns the pages.
// Pages near the one being read are rendered first, so a 64-page issue opens quickly.
export default function FlipReader({ pdf, title, startPage = 1, t }) {
  const host = useRef(null);
  const flipRef = useRef(null);
  const [state, setState] = useState({ status: "loading", total: 0, cur: 0, rendered: 0 });

  useEffect(() => {
    let dead = false;
    let flip;
    const cache = new Map();   // page index -> blob url
    const imgs = [];
    const busy = new Set();
    let doc;
    let scale = 1;

    async function renderPage(i) {
      if (dead || cache.has(i) || busy.has(i) || i < 0 || i >= imgs.length) return;
      busy.add(i);
      try {
        const page = await doc.getPage(i + 1);
        const vp = page.getViewport({ scale });
        const canvas = document.createElement("canvas");
        canvas.width = Math.floor(vp.width); canvas.height = Math.floor(vp.height);
        await page.render({ canvasContext: canvas.getContext("2d"), viewport: vp }).promise;
        const blob = await new Promise((r) => canvas.toBlob(r, "image/jpeg", 0.86));
        if (dead) return;
        const url = URL.createObjectURL(blob);
        cache.set(i, url);
        imgs[i].src = url;
        imgs[i].parentElement.dataset.ready = "true";
        setState((s) => ({ ...s, rendered: cache.size }));
      } catch (e) { /* a single bad page should not stop the book */ }
      busy.delete(i);
    }
    async function around(i) {
      const order = [i, i + 1, i - 1, i + 2, i - 2, i + 3, i + 4, i - 3, i + 5];
      for (const k of order) await renderPage(k);
    }

    (async () => {
      try {
        const pdfjs = await import("pdfjs-dist/build/pdf");
        pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";
        doc = await pdfjs.getDocument(pdf).promise;
        if (dead) return;
        const first = await doc.getPage(1);
        const base = first.getViewport({ scale: 1 });
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        scale = Math.min(2.2, (820 * dpr) / base.width);
        const n = doc.numPages;

        // build the pages by hand: StPageFlip moves these nodes itself, React must not own them
        const els = [];
        for (let i = 0; i < n; i++) {
          const el = document.createElement("div");
          el.className = "fr-page";
          const img = document.createElement("img");
          img.alt = `${title}, ${i + 1}`; img.draggable = false;
          const num = document.createElement("span"); num.className = "fr-num"; num.textContent = String(i + 1);
          el.append(img, num);
          imgs.push(img); els.push(el);
          host.current.appendChild(el);
        }
        const { PageFlip } = await import("page-flip");
        flip = new PageFlip(host.current, {
          width: Math.round(base.width), height: Math.round(base.height), size: "stretch",
          minWidth: 220, maxWidth: 1000, minHeight: 300, maxHeight: 1400,
          showCover: true, usePortrait: true, mobileScrollSupport: false,
          maxShadowOpacity: 0.45, flippingTime: 750, drawShadow: true, startPage: Math.max(0, Math.min(n - 1, startPage - 1)),
        });
        flipRef.current = flip;
        flip.loadFromHTML(els);
        flip.on("flip", (e) => { setState((s) => ({ ...s, cur: e.data })); around(e.data); });
        const start = Math.max(0, Math.min(n - 1, startPage - 1));
        setState({ status: "ready", total: n, cur: start, rendered: 0 });
        around(start);
      } catch (e) {
        if (!dead) setState((s) => ({ ...s, status: "error" }));
      }
    })();

    return () => {
      dead = true;
      try { flip?.destroy(); } catch {}
      cache.forEach((u) => URL.revokeObjectURL(u));
      flipRef.current = null;
    };
  }, [pdf, title, startPage]);

  useEffect(() => {
    const on = (e) => {
      if (e.key === "ArrowRight") flipRef.current?.flipNext();
      if (e.key === "ArrowLeft") flipRef.current?.flipPrev();
    };
    window.addEventListener("keydown", on);
    return () => window.removeEventListener("keydown", on);
  }, []);

  const { status, total, cur } = state;
  const portrait = typeof window !== "undefined" && window.innerWidth < 720;
  const label = total ? `${cur + 1}${!portrait && cur > 0 && cur + 2 <= total ? `–${cur + 2}` : ""} / ${total}` : "";

  return (
    <div className="fr">
      <div className="fr-stage">
        <div ref={host} className="fr-book" />
        {status === "loading" && <div className="fr-msg" role="status"><i className="fr-spin" />{t.ui2.opening}</div>}
        {status === "error" && <div className="fr-msg">{t.ui2.readerError}</div>}
      </div>
      {status === "ready" && (
        <div className="fr-bar">
          <button className="icon-btn" onClick={() => flipRef.current?.flipPrev()} aria-label={t.magazinePage.prev}><ArrowLeft /></button>
          <input className="fr-range" type="range" min="1" max={total} value={cur + 1} aria-label={t.ui2.pageWord}
            onChange={(e) => flipRef.current?.turnToPage(Number(e.target.value) - 1)} />
          <span className="fr-count num">{label}</span>
          <button className="icon-btn" onClick={() => flipRef.current?.flipNext()} aria-label={t.magazinePage.next}><ArrowRight /></button>
        </div>
      )}
    </div>
  );
}
