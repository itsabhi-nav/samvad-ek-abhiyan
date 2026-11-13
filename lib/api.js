// Frontend-only stubs. When the Next.js backend exists, replace the bodies with
// fetch("/api/subscribe", { method: "POST", body: JSON.stringify(data) }).
//
// Subscriber record the backend should store (one row per person):
//   name      string   required
//   email     string   required
//   phone     string   required   (kept so issues can later be sent on WhatsApp too)
//   address   string   required
//   consent   boolean  must be true
//   lang      "hi" | "en"
//   createdAt timestamp
// How issues are delivered (email, WhatsApp, post) is decided later; the admin exports this list as CSV/PDF.
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

export async function submitSubscriber(data) {
  await wait(900);
  if (process.env.NODE_ENV !== "production") console.info("[subscribe stub]", data);
  return { ok: true };
}

export async function submitEnquiry(data) {
  await wait(900);
  if (process.env.NODE_ENV !== "production") console.info("[contact stub]", data);
  return { ok: true };
}
