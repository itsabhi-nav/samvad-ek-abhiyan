"use client";
import { useState } from "react";
import { LinkIcon, WhatsAppIcon, XIcon } from "./Icons";

export default function ShareBar({ title, t }) {
  const [copied, setCopied] = useState(false);
  const url = () => (typeof window !== "undefined" ? window.location.href : "");
  const enc = encodeURIComponent;
  async function copy() {
    try { await navigator.clipboard.writeText(url()); setCopied(true); setTimeout(() => setCopied(false), 1800); } catch {}
  }
  return (
    <div className="share" aria-label={t.ui2.share}>
      <span className="label">{t.ui2.share}</span>
      <a className="icon-btn" href="#" onClick={(e) => { e.preventDefault(); window.open(`https://wa.me/?text=${enc(title + " " + url())}`, "_blank", "noopener"); }} aria-label="WhatsApp"><WhatsAppIcon /></a>
      <a className="icon-btn" href="#" onClick={(e) => { e.preventDefault(); window.open(`https://twitter.com/intent/tweet?text=${enc(title)}&url=${enc(url())}`, "_blank", "noopener"); }} aria-label="X"><XIcon /></a>
      <button className="icon-btn" onClick={copy} aria-label={t.ui2.copy}><LinkIcon /></button>
      <span className="share-note" role="status">{copied ? t.ui2.copied : ""}</span>
    </div>
  );
}
