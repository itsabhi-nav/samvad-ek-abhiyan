"use client";
import { useState } from "react";
import { submitEnquiry, submitSubscriber } from "@/lib/api";
import { CheckIcon } from "./Icons";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE = /^[+\d][\d\s-]{8,14}$/;

function Field({ id, label, error, children }) {
  return (
    <div className="field" data-invalid={error ? "true" : "false"}>
      <label htmlFor={id}>{label}</label>
      {children}
      {error && <span className="err">{error}</span>}
    </div>
  );
}

// mode "subscribe": name, phone, email, address, consent.  mode "contact": name, email, phone (optional), message.
export default function SubscribeForm({ t, mode = "subscribe", initialEmail = "", autoFocus = false, compact = false, source = "site" }) {
  const f = t.form;
  const isSub = mode === "subscribe";
  const [v, setV] = useState({ name: "", email: initialEmail, phone: "", address: "", message: "", consent: false });
  const [err, setErr] = useState({});
  const [state, setState] = useState("idle");
  const set = (k) => (e) => setV((s) => ({ ...s, [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value }));
  const id = `${mode}${compact ? "-c" : ""}`;

  function validate() {
    const e = {};
    if (!v.name.trim()) e.name = f.errRequired;
    if (!EMAIL.test(v.email.trim())) e.email = v.email.trim() ? f.errEmail : f.errRequired;
    if (isSub) {
      if (!PHONE.test(v.phone.trim())) e.phone = v.phone.trim() ? f.errPhone : f.errRequired;
      if (!v.address.trim()) e.address = f.errRequired;
      if (!v.consent) e.consent = f.errConsent;
    } else {
      if (v.phone.trim() && !PHONE.test(v.phone.trim())) e.phone = f.errPhone;
      if (!v.message.trim()) e.message = f.errRequired;
    }
    return e;
  }
  async function onSubmit(ev) {
    ev.preventDefault();
    const e = validate();
    setErr(e);
    if (Object.keys(e).length) { document.getElementById(`${id}-${Object.keys(e)[0]}`)?.focus(); return; }
    setState("sending");
    await (isSub ? submitSubscriber({ ...v, source, lang: t.lang }) : submitEnquiry(v));
    setState("done");
  }

  if (state === "done") {
    return (
      <div className="form-ok" role="status">
        <span className="form-ok-icon"><CheckIcon /></span>
        <h3>{f.okTitle}</h3>
        <p>{isSub ? f.okSubscribe : f.okContact}</p>
      </div>
    );
  }
  return (
    <form className={`form ${compact ? "form--compact" : ""}`} onSubmit={onSubmit} noValidate>
      <Field id={`${id}-name`} label={f.name} error={err.name}>
        <input id={`${id}-name`} autoComplete="name" value={v.name} onChange={set("name")} autoFocus={autoFocus && !initialEmail} />
      </Field>
      <Field id={`${id}-phone`} label={f.phone} error={err.phone}>
        <input id={`${id}-phone`} type="tel" autoComplete="tel" inputMode="tel" value={v.phone} onChange={set("phone")} />
      </Field>
      <Field id={`${id}-email`} label={f.email} error={err.email}>
        <input id={`${id}-email`} type="email" autoComplete="email" inputMode="email" value={v.email} onChange={set("email")} autoFocus={autoFocus && !!initialEmail} />
      </Field>
      {isSub ? (
        <>
          <Field id={`${id}-address`} label={f.address} error={err.address}>
            <textarea id={`${id}-address`} autoComplete="street-address" rows={2} value={v.address} onChange={set("address")} />
          </Field>
          <div className="field field--wide" data-invalid={err.consent ? "true" : "false"}>
            <label className="check">
              <input type="checkbox" id={`${id}-consent`} checked={v.consent} onChange={set("consent")} />
              <span>{f.consent}</span>
            </label>
            {err.consent && <span className="err">{err.consent}</span>}
          </div>
        </>
      ) : (
        <div className="field--wide">
          <Field id={`${id}-message`} label={f.message} error={err.message}>
            <textarea id={`${id}-message`} rows={5} value={v.message} onChange={set("message")} />
          </Field>
        </div>
      )}
      <div className="form-foot field--wide">
        <button className="btn btn--primary" type="submit" disabled={state === "sending"}>
          {state === "sending" ? f.sending : isSub ? f.submit : f.send}
        </button>
        {isSub && <span className="hint">{f.privacy}</span>}
      </div>
    </form>
  );
}
