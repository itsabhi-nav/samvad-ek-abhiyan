"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useApp } from "./Providers";
import { SearchIcon } from "./Icons";
import { categories } from "@/lib/stories";

function LangToggle({ lang, rest }) {
  const router = useRouter();
  const [sel, setSel] = useState(lang);
  useEffect(() => { setSel(lang); document.documentElement.classList.remove("lang-fade"); }, [lang]);
  const go = (l) => (e) => {
    e.preventDefault();
    if (l === lang) return;
    setSel(l);                                   // the thumb slides at once
    window.dispatchEvent(new CustomEvent("samvad:navstart", { detail: { path: `/${l}${rest}` } }));
    document.documentElement.classList.add("js", "lang-fade");
    const tail = `${window.location.search}${window.location.hash}`;
    setTimeout(() => router.push(`/${l}${rest}${tail}`), 240);
  };
  return (
    <div className="lang-switch" role="group" aria-label="Language / भाषा">
      {[["hi", "हिंदी"], ["en", "EN"]].map(([l, label]) => (
        <Link key={l} href={`/${l}${rest}`} hrefLang={l} lang={l} onClick={go(l)} aria-current={sel === l ? "true" : undefined} aria-label={l === "hi" ? "हिंदी" : "English"}>
          {sel === l && <motion.i layoutId="lang-thumb" className="lang-thumb" transition={{ type: "spring", stiffness: 420, damping: 32 }} />}
          <span>{label}</span>
        </Link>
      ))}
    </div>
  );
}

export default function Header({ lang, t }) {
  const pathname = usePathname() || `/${lang}`;
  const { openSubscribe, openSearch } = useApp();
  const [top, setTop] = useState(true);
  const [menu, setMenu] = useState(false);
  const rest = pathname.replace(/^\/(hi|en)/, "");
  const base = `/${lang}`;

  useEffect(() => {
    const on = () => setTop(window.scrollY < 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => setMenu(false), [pathname]);
  useEffect(() => {
    if (!menu) return;
    window.__lenis?.stop(); document.documentElement.style.overflow = "clip";
    const esc = (e) => e.key === "Escape" && setMenu(false);
    window.addEventListener("keydown", esc);
    return () => { window.__lenis?.start(); document.documentElement.style.overflow = ""; window.removeEventListener("keydown", esc); };
  }, [menu]);

  const active = (href) => pathname.startsWith(base + href);
  const LangSwitch = <LangToggle lang={lang} rest={rest} />;

  return (
    <header className="site-header" data-top={top} data-menu={menu}>
      <div className="container header-inner">
        <Link href={base} className="brand" aria-label={`${t.brand.name} ${t.brand.tag}`}>
          <img className="brand-logo" src="/images/logo.png" alt="" width="66" height="44" />
          <span className="brand-text"><b>{t.brand.name}</b><span>{t.brand.tag}</span></span>
        </Link>

        <nav className="nav" aria-label="Primary">
          <Link href={base} aria-current={pathname === base ? "page" : undefined}>
            <span>{t.ui2.home}</span>
            {pathname === base && <motion.i layoutId="nav-line" className="nav-line" transition={{ type: "spring", stiffness: 380, damping: 34 }} />}
          </Link>
          {t.nav.map((n) => (
            <Link key={n.href} href={base + n.href} aria-current={active(n.href) ? "page" : undefined}>
              <span>{n.label}</span>
              {active(n.href) && <motion.i layoutId="nav-line" className="nav-line" transition={{ type: "spring", stiffness: 380, damping: 34 }} />}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          {LangSwitch}
          <button className="btn btn--primary btn--small header-sub" onClick={() => openSubscribe()}>{t.ui.subscribe}</button>
          <button className="menu-btn" aria-expanded={menu} aria-controls="mobile-menu" aria-label={t.ui.menu} onClick={() => setMenu((m) => !m)}><span /></button>
        </div>
      </div>

      <AnimatePresence>
        {menu && (
          <motion.div id="mobile-menu" className="mobile-menu" onClick={(e) => e.target.closest("a") && setMenu(false)} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
            <nav aria-label="Mobile">
              {[{ href: "", label: t.ui2.home }, ...t.nav].map((n, i) => (
                <motion.div key={n.href} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.04 * i + 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
                  <Link href={base + n.href} aria-current={(n.href ? active(n.href) : pathname === base) ? "page" : undefined}>{n.label}</Link>
                </motion.div>
              ))}
            </nav>
            <div className="mobile-topics">
              {categories.map((c) => <Link key={c.id} href={`${base}/stories?topic=${c.id}`} className="chip">{c.name[lang]}</Link>)}
            </div>
            <div className="mobile-actions">
              <button className="btn btn--primary" onClick={() => { setMenu(false); openSubscribe(); }}>{t.ui.subscribe}</button>
              <button className="btn btn--ghost" onClick={() => { setMenu(false); openSearch(); }}><SearchIcon />{t.ui2.search}</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
