import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-head">
      <div className="container">
        <h1>404</h1>
        <p className="lead">This page could not be found. यह पृष्ठ नहीं मिला।</p>
        <p style={{ marginTop: "var(--space-xl)" }}><Link className="btn btn--primary" href="/en">Samvad / संवाद</Link></p>
      </div>
    </section>
  );
}
