import { getContent, site } from "@/lib/content";
import Reveal from "@/components/Reveal";
import Words from "@/components/Words";
import SubscribeForm from "@/components/SubscribeForm";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return { title: getContent(lang).nav[3].label };
}

export default async function Contact({ params }) {
  const { lang } = await params;
  const t = getContent(lang);
  const c = t.contact, c2 = t.contact2;
  const map = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address.en.join(", "))}`;
  return (
    <>
      <section className="page-head page-head--img" style={{ "--img": "url(/images/stock/night-road.jpg)" }}>
        <div className="container">
          <h1><Words text={c.title} /></h1>
          <p className="lead fade-in" style={{ "--d": "240ms" }}>{c.sub}</p>
        </div>
      </section>

      <section className="section light">
        <div className="container contact-grid">
          <Reveal className="contact-list">
            <div className="contact-item"><span className="label">{c.officeTitle}</span><address>{site.address[lang].map((l) => <span key={l}>{l}</span>)}<a className="link" href={map} target="_blank" rel="noopener">Google Maps</a></address></div>
            <div className="contact-item"><span className="label">{c.personTitle}</span><span>{site.contactPerson[lang]}</span></div>
            <div className="contact-item"><span className="label">{c.phoneTitle}</span><a className="link num" href={`tel:+${site.phoneRaw}`}>{site.phone}</a></div>
            <div className="contact-item"><span className="label">{c.emailTitle}</span><a className="link" href={`mailto:${site.email}`}>{site.email}</a></div>
            <div className="contact-item"><span className="label">{c2.writeTitle}</span><span>{c2.writeText}</span></div>
            <div className="contact-item"><span className="label">{c2.adTitle}</span><span>{c2.adText}</span></div>
          </Reveal>
          <Reveal delay={0.1} className="contact-form-wrap">
            <h2>{c.formTitle}</h2>
            <SubscribeForm t={t} mode="contact" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
