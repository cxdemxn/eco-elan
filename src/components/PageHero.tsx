import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type PageHeroProps = {
  title: string;
  accent: string;
  subtitle: string;
  children?: ReactNode;
};

export function PageHero({ title, accent, subtitle, children }: PageHeroProps) {
  return (
    <section className="hero-bg" style={{ position: "relative", padding: "60px 0 80px", overflow: "hidden" }}>
      <div className="blob" style={{ width: 480, height: 480, top: -150, right: -120, background: "var(--eco-green-light)" }} />
      <div className="container-x" style={{ paddingTop: 80, position: "relative" }}>
        <Reveal>
          <h1 style={{ fontSize: "clamp(36px, 5.5vw, 68px)", color: "#fff", maxWidth: 800 }}>
            {title}
            <br />
            <span style={{ color: "var(--eco-green-light)" }}>{accent}</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.78)", fontSize: 19, marginTop: 20, maxWidth: 600 }}>{subtitle}</p>
          {children}
        </Reveal>
      </div>
    </section>
  );
}
