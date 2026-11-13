import { getContent } from "@/lib/content";
import Words from "@/components/Words";
import credits from "@/public/images/stock/credits.json";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return { title: getContent(lang).ui2.photoCredits };
}

export default async function Credits({ params }) {
  const { lang } = await params;
  const t = getContent(lang);
  return (
    <>
      <section className="page-head"><div className="container"><h1><Words text={t.ui2.photoCredits} /></h1></div></section>
      <section className="section light">
        <div className="container">
          <ul className="credits">
            {Object.entries(credits).map(([k, c]) => (
              <li key={k}>
                <img src={`/images/stock/${k}.jpg`} alt="" loading="lazy" />
                <div>
                  <strong>{c.title}</strong>
                  <span className="readout">{c.artist}, {c.license}</span>
                  <a className="link" href={c.page} target="_blank" rel="noopener">Wikimedia Commons</a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
