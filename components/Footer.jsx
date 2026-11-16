import Link from "next/link";
import { site } from "@/lib/content";
import { categories } from "@/lib/stories";
import SubscribeButton from "./SubscribeButton";

export default function Footer({ lang, t }) {
  const base = `/${lang}`;
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href={base} className="brand" aria-label={t.brand.name}>
              <img className="brand-logo" src="/images/logo.png" alt="" width="88" height="64" />
              <span className="brand-text"><b>{t.brand.name}</b><span>{t.brand.tag}</span></span>
            </Link>
            <p className="footer-tag">{t.footer.tag}</p>
          </div>
          <div className="footer-sub">
            <p className="footer-statement">{t.footer.statement}</p>
            <div><SubscribeButton label={t.ui.subscribe} /></div>
          </div>
        </div>

        <div className="footer-grid">
          <div>
            <h4>{t.footer.explore}</h4>
            <ul>
              <li><Link href={base}>{lang === "hi" ? "मुख्य पृष्ठ" : "Home"}</Link></li>
              {t.nav.map((n) => <li key={n.href}><Link href={base + n.href}>{n.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <h4>{t.footer2.topics}</h4>
            <ul>{categories.map((c) => <li key={c.id}><Link href={`${base}/stories?topic=${c.id}`}>{c.name[lang]}</Link></li>)}</ul>
          </div>
          <div>
            <h4>{t.footer.reach}</h4>
            <ul>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><a href={`tel:+${site.phoneRaw}`} className="num">{site.phone}</a></li>
              {site.address[lang].map((l) => <li key={l} className="muted">{l}</li>)}
            </ul>
          </div>
        </div>

        <div className="footer-base">
          <span>© {new Date().getFullYear()} {t.brand.name} – {t.brand.tag}. {t.footer.rights}.</span>
          <span>{t.footer.rni}: {site.rni}</span>
          <Link href={`${base}/credits`} className="link">{t.ui2.photoCredits}</Link>
        </div>
      </div>
    </footer>
  );
}
