import Reveal from "./Reveal";
import SubscribeForm from "./SubscribeForm";
import SubscribeButton from "./SubscribeButton";
import { CheckIcon } from "./Icons";

// The main place readers are asked to register. Desktop: the full form inline. Phone: a short pitch and a button.
export default function CtaBand({ t }) {
  return (
    <section className="cta" id="subscribe">
      <div className="container cta-grid">
        <Reveal className="cta-copy">
          <h2>{t.cta.title}</h2>
          <p className="lead">{t.cta.sub}</p>
          <ul className="cta-points">
            {t.cta.points.map((x) => <li key={x}><CheckIcon />{x}</li>)}
          </ul>
          <div className="cta-mobile-btn">
            <SubscribeButton label={t.cta.button} />
            <span className="cta-note">{t.cta.note}</span>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="cta-form">
          <div className="cta-form-head"><h3>{t.cta.formTitle}</h3><span>{t.cta.note}</span></div>
          <SubscribeForm t={t} compact source="cta" />
        </Reveal>
      </div>
    </section>
  );
}
