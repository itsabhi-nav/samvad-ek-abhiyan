"use client";
import { useApp } from "./Providers";

export default function SubscribeButton({ label, className = "btn btn--primary btn--lg" }) {
  const { openSubscribe } = useApp();
  return <button className={className} onClick={() => openSubscribe()}>{label}</button>;
}
