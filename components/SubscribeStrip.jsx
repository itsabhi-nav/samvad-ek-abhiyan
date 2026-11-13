import SubscribeButton from "./SubscribeButton";
import Reveal from "./Reveal";

// A slim, highlighted prompt to register. Used mid-page on Home and at the end of every article.
export default function SubscribeStrip({ t, className = "" }) {
  return (
    <Reveal className={`strip ${className}`}>
      <div className="strip-text">
        <strong>{t.cta.inlineTitle}</strong>
        <span>{t.cta.inlineText}</span>
      </div>
      <SubscribeButton label={t.cta.button} className="btn btn--primary" />
    </Reveal>
  );
}
