import { useEffect, useState } from "react";
import { Icon, type IconName } from "../components/Icon";
import { Img } from "../components/Img";
import { Reveal } from "../components/Reveal";
import { Counter } from "../components/Counter";
import { MarqueeStrip } from "../components/MarqueeStrip";
import { FaqSection } from "../components/FaqSection";
import { FinalCTA } from "../components/FinalCTA";
import { SERVICES, TESTIMONIALS, IMG } from "../data/content";
import { useGo } from "../lib/nav";

function Typewriter({
  words,
  typeSpeed = 70,
  deleteSpeed = 35,
  holdTime = 1700,
  gapTime = 400,
}: {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  holdTime?: number;
  gapTime?: number;
}) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "deleting">("typing");

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const word = words[idx];
    if (phase === "typing") {
      if (text.length < word.length) {
        t = setTimeout(() => setText(word.slice(0, text.length + 1)), typeSpeed);
      } else {
        t = setTimeout(() => setPhase("deleting"), holdTime);
      }
    } else {
      if (text.length > 0) {
        t = setTimeout(() => setText(word.slice(0, text.length - 1)), deleteSpeed);
      } else {
        t = setTimeout(() => {
          setIdx((i) => (i + 1) % words.length);
          setPhase("typing");
        }, gapTime);
      }
    }
    return () => clearTimeout(t);
  }, [text, phase, idx, words, typeSpeed, deleteSpeed, holdTime, gapTime]);

  return (
    <span style={{ display: "inline-block", whiteSpace: "nowrap" }}>
      <span style={{ color: "var(--eco-green-light)" }}>{text}</span>
      <span className="cursor-blink"></span>
    </span>
  );
}

function Hero() {
  const go = useGo();
  return (
    <section className="hero-bg" style={{ position: "relative", padding: "40px 0 100px", overflow: "hidden" }}>
      <div className="blob" style={{ width: 500, height: 500, top: -160, right: -120, background: "var(--eco-green-light)" }} />
      <div className="blob" style={{ width: 360, height: 360, bottom: -100, left: -100, background: "var(--eco-accent)", opacity: 0.18 }} />
      <div className="container-x" style={{ position: "relative", paddingTop: 60 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 60, alignItems: "center" }} className="hero-grid">
          <Reveal>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 14px",
                borderRadius: 99,
                background: "rgba(109,200,144,0.16)",
                color: "#B6E3C7",
                fontSize: 13,
                fontWeight: 600,
                marginBottom: 24,
              }}
            >
              <Icon name="leaf" size={14} /> Toronto's #1 plant-based cleaning team
            </span>
            <h1 style={{ fontSize: "clamp(40px, 6.2vw, 76px)", color: "#fff", marginBottom: 22, fontWeight: 800 }}>
              Cleaner homes.
              <br />
              <Typewriter words={["Greener planet.", "Happier families.", "Healthier air.", "Safer for pets.", "Fresher mornings."]} />
            </h1>
            <p style={{ color: "rgba(255,255,255,0.78)", fontSize: 19, maxWidth: 520, marginBottom: 32 }}>
              Premium, plant-based cleaning for the Greater Toronto Area. Safe for kids, pets and your family — never harsh, never fragranced, always thorough.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 36 }}>
              <button
                className="btn btn-primary"
                onClick={() => go("booking")}
                style={{ background: "var(--eco-green-light)", color: "var(--eco-green-dark)" }}
              >
                Book Your Clean <Icon name="arrow-right" size={16} />
              </button>
              <button className="btn btn-outline-light" onClick={() => go("services")}>
                Explore Services
              </button>
            </div>
            <div style={{ display: "flex", gap: 30, flexWrap: "wrap", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ display: "flex" }}>
                  {[IMG.av_w1, IMG.av_m1, IMG.av_w2, IMG.av_m2].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt=""
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        border: "2px solid var(--eco-green-dark)",
                        marginLeft: i === 0 ? 0 : -10,
                        objectFit: "cover",
                      }}
                    />
                  ))}
                </div>
                <div style={{ color: "#fff" }}>
                  <div style={{ display: "flex", gap: 2, color: "var(--eco-accent)" }}>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Icon key={i} name="star" size={14} />
                    ))}
                  </div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", marginTop: 2 }}>
                    <strong style={{ color: "#fff" }}>500+</strong> happy GTA families
                  </div>
                </div>
              </div>
              <div style={{ height: 36, width: 1, background: "rgba(255,255,255,0.12)" }} className="hide-sm" />
              <div style={{ display: "flex", gap: 8, alignItems: "center", color: "rgba(255,255,255,0.78)" }}>
                <Icon name="shield" size={18} />
                <span style={{ fontSize: 14 }}>Fully insured · Background-checked</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div style={{ position: "relative" }}>
              <div
                className="float-y"
                style={{ height: 460, borderRadius: 28, overflow: "hidden", position: "relative", boxShadow: "var(--shadow-lg)" }}
              >
                <Img src={IMG.hero} alt="Bright eco-cleaned home" />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(135deg, rgba(46,115,85,0.0) 30%, rgba(17,39,27,0.35) 100%)",
                  }}
                />
              </div>

              <div
                style={{
                  position: "absolute",
                  bottom: 24,
                  left: -20,
                  background: "#fff",
                  borderRadius: 18,
                  padding: 16,
                  boxShadow: "var(--shadow-lg)",
                  display: "flex",
                  gap: 14,
                  alignItems: "center",
                  minWidth: 250,
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: "rgba(109,200,144,0.2)",
                    color: "var(--eco-green)",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <Icon name="check-circle" size={22} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>Booking confirmed</div>
                  <div style={{ fontSize: 12, color: "var(--eco-muted)", marginTop: 2 }}>Saturday · 11:00 AM · Toronto</div>
                </div>
              </div>

              <div
                style={{
                  position: "absolute",
                  top: 22,
                  right: -20,
                  background: "var(--eco-green-light)",
                  color: "var(--eco-green-dark)",
                  borderRadius: 99,
                  padding: "10px 16px",
                  display: "flex",
                  gap: 8,
                  alignItems: "center",
                  boxShadow: "var(--shadow-md)",
                }}
              >
                <Icon name="leaf" size={16} />
                <span style={{ fontSize: 13, fontWeight: 700 }}>100% plant-based</span>
              </div>

              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  right: -32,
                  transform: "translateY(-50%)",
                  background: "#fff",
                  borderRadius: 18,
                  padding: "14px 18px",
                  boxShadow: "var(--shadow-md)",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 24, fontWeight: 800, color: "var(--eco-green)" }}>4.9</div>
                <div
                  style={{
                    fontSize: 11,
                    color: "var(--eco-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    fontWeight: 600,
                  }}
                >
                  Google rating
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hide-sm { display: none !important; }
        }
      `}</style>
    </section>
  );
}

function TrustGrid() {
  const items: { icon: IconName; title: string; desc: string }[] = [
    { icon: "thumbs-up", title: "100% Satisfaction", desc: "We guarantee it — if you're not happy, we re-clean for free." },
    { icon: "users", title: "Vetted Eco Team", desc: "Background-checked, trained and insured cleaning specialists." },
    { icon: "credit-card", title: "Upfront Pricing", desc: "Transparent flat-rate pricing with no hidden fees, ever." },
    { icon: "lock", title: "Secure Booking", desc: "Encrypted online booking and payment after service." },
  ];
  return (
    <section style={{ background: "#fff", padding: "80px 0", borderBottom: "1px solid var(--eco-line)" }}>
      <div className="container-x">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }} className="trust-grid">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 80}>
              <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: "var(--eco-cream-2)",
                    color: "var(--eco-green)",
                    display: "grid",
                    placeItems: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon name={it.icon} size={22} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{it.title}</div>
                  <div style={{ color: "var(--eco-muted)", fontSize: 14 }}>{it.desc}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 880px){.trust-grid{grid-template-columns:1fr 1fr !important;}}@media (max-width:520px){.trust-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}

function ServicesPreview() {
  const go = useGo();
  const featured = SERVICES.slice(0, 5);
  return (
    <section>
      <div className="container-x">
        <Reveal>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, gap: 40, flexWrap: "wrap" }}>
            <div>
              <span className="eyebrow">Our Services</span>
              <h2 style={{ fontSize: "clamp(34px, 4.5vw, 56px)", marginTop: 14, maxWidth: 640 }}>
                Everything your home needs — <span style={{ color: "var(--eco-green)" }}>none of the chemicals</span>.
              </h2>
            </div>
            <button className="btn btn-ghost" onClick={() => go("services")}>
              View all services <Icon name="arrow-right" size={16} />
            </button>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }} className="svc-preview-grid">
          {featured.map((s, i) => (
            <Reveal key={s.id} delay={i * 70}>
              <div className="card" style={{ padding: 26, height: "100%", display: "flex", flexDirection: "column", position: "relative" }}>
                {s.popular && (
                  <span
                    style={{
                      position: "absolute",
                      top: 18,
                      right: 18,
                      background: "var(--eco-green-light)",
                      color: "var(--eco-green-dark)",
                      padding: "4px 10px",
                      borderRadius: 99,
                      fontSize: 11,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    Popular
                  </span>
                )}
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 16,
                    background: "var(--eco-cream-2)",
                    color: "var(--eco-green)",
                    display: "grid",
                    placeItems: "center",
                    marginBottom: 20,
                  }}
                >
                  <Icon name={s.icon as IconName} size={26} />
                </div>
                <h3 style={{ fontSize: 22, marginBottom: 10 }}>{s.name}</h3>
                <p style={{ color: "var(--eco-muted)", fontSize: 14, marginBottom: 20 }}>{s.desc}</p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "auto",
                    paddingTop: 18,
                    borderTop: "1px solid var(--eco-line)",
                  }}
                >
                  <span style={{ fontWeight: 700, color: "var(--eco-green)" }}>{s.priceLabel}</span>
                  <button
                    className="btn btn-ghost"
                    style={{ padding: "8px 14px", fontSize: 13 }}
                    onClick={() => go("booking", { service: s.id })}
                  >
                    Book <Icon name="arrow-right" size={14} />
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
          <Reveal delay={featured.length * 70}>
            <div
              className="card"
              style={{
                padding: 26,
                height: "100%",
                background: "linear-gradient(160deg, var(--eco-green) 0%, var(--eco-green-dark) 100%)",
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                border: "none",
              }}
            >
              <div>
                <Icon name="sparkles" size={26} />
                <h3 style={{ fontSize: 22, marginTop: 18, marginBottom: 10, color: "#fff" }}>Not sure which clean?</h3>
                <p style={{ color: "rgba(255,255,255,0.78)", fontSize: 14 }}>
                  Take our 30-second quiz and we'll recommend the right service for your home.
                </p>
              </div>
              <button
                className="btn btn-accent"
                style={{ background: "#fff", color: "var(--eco-green-dark)", marginTop: 22, alignSelf: "flex-start" }}
                onClick={() => go("services")}
              >
                Find my service <Icon name="arrow-right" size={16} />
              </button>
            </div>
          </Reveal>
        </div>
      </div>
      <style>{`@media (max-width: 980px){.svc-preview-grid{grid-template-columns:1fr 1fr !important;}}@media (max-width:600px){.svc-preview-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}

function HowItWorks() {
  const steps: { n: string; icon: IconName; title: string; desc: string }[] = [
    { n: "01", icon: "spray", title: "Pick your service", desc: "Choose from one-time cleans, subscriptions or commercial." },
    { n: "02", icon: "calendar", title: "Schedule online", desc: "Pick a date and time that works — even same-day in many areas." },
    { n: "03", icon: "users", title: "We arrive & clean", desc: "Our vetted, eco-trained team brings everything — you don't lift a finger." },
    { n: "04", icon: "sparkles", title: "Enjoy your space", desc: "Sit back and breathe in your fresh, chemical-free home." },
  ];
  return (
    <section style={{ background: "var(--eco-cream-2)" }}>
      <div className="container-x">
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="eyebrow">How it works</span>
            <h2 style={{ fontSize: "clamp(34px, 4.5vw, 52px)", marginTop: 14, maxWidth: 720, margin: "14px auto 0" }}>
              From booking to breathing easy — in <span style={{ color: "var(--eco-green)" }}>under a minute</span>.
            </h2>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, position: "relative" }} className="how-grid">
          <div
            style={{
              position: "absolute",
              top: 36,
              left: "12.5%",
              right: "12.5%",
              height: 2,
              background: "repeating-linear-gradient(90deg, var(--eco-green-soft) 0 6px, transparent 6px 12px)",
              zIndex: 0,
            }}
            className="hide-on-mobile-only"
          />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: "50%",
                    background: "#fff",
                    color: "var(--eco-green)",
                    display: "grid",
                    placeItems: "center",
                    margin: "0 auto 18px",
                    boxShadow: "var(--shadow-sm)",
                    border: "3px solid var(--eco-cream-2)",
                    position: "relative",
                  }}
                >
                  <Icon name={s.icon} size={28} />
                  <span
                    style={{
                      position: "absolute",
                      top: -6,
                      right: -6,
                      background: "var(--eco-green)",
                      color: "#fff",
                      fontSize: 10,
                      fontWeight: 800,
                      padding: "3px 6px",
                      borderRadius: 99,
                    }}
                  >
                    {s.n}
                  </span>
                </div>
                <h3 style={{ fontSize: 18, marginBottom: 8 }}>{s.title}</h3>
                <p style={{ color: "var(--eco-muted)", fontSize: 14 }}>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 880px){.how-grid{grid-template-columns:1fr 1fr !important;}.hide-on-mobile-only{display:none;}}@media (max-width:520px){.how-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}

function WhyUs() {
  const items: { icon: IconName; title: string; desc: string }[] = [
    { icon: "leaf", title: "100% Plant-Based Products", desc: "Every product we use is biodegradable, non-toxic and free of synthetic fragrances." },
    { icon: "users", title: "Trained Cleaning Specialists", desc: "Background-checked, fully trained, and treated well — happy teams clean better." },
    { icon: "shield", title: "Bonded & Insured", desc: "Full liability and bonding coverage on every clean. Total peace of mind." },
    { icon: "credit-card", title: "Flat-Rate Pricing", desc: "Upfront flat-rate pricing — no surprise fees, no upsells, ever." },
    { icon: "headphones", title: "Real Human Support", desc: "Talk to a real person within minutes — not a chatbot, not a queue." },
    { icon: "calendar", title: "Flexible Scheduling", desc: "Reschedule or cancel free up to 24 hours before. Subscription paused anytime." },
  ];
  return (
    <section>
      <div className="container-x">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 60, alignItems: "center" }} className="why-grid">
          <Reveal>
            <span className="eyebrow">Why Eco Elan</span>
            <h2 style={{ fontSize: "clamp(34px, 4.5vw, 52px)", marginTop: 14, marginBottom: 18 }}>
              Premium clean.
              <br />
              <span style={{ color: "var(--eco-green)" }}>Zero compromise.</span>
            </h2>
            <p style={{ color: "var(--eco-muted)", fontSize: 17, marginBottom: 28 }}>
              We've spent four years building a cleaning service that treats your health, your home, and your time the way they deserve. Here's what makes us different.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, padding: 24, background: "var(--eco-cream-2)", borderRadius: 22 }}>
              <div>
                <div style={{ fontSize: 36, fontWeight: 800, color: "var(--eco-green)", letterSpacing: "-0.03em" }}>
                  <Counter to={500} suffix="+" />
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "var(--eco-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    fontWeight: 600,
                  }}
                >
                  Happy Clients
                </div>
              </div>
              <div>
                <div style={{ fontSize: 36, fontWeight: 800, color: "var(--eco-green)", letterSpacing: "-0.03em" }}>
                  <Counter to={4} />+ yrs
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "var(--eco-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    fontWeight: 600,
                  }}
                >
                  Serving the GTA
                </div>
              </div>
              <div>
                <div style={{ fontSize: 36, fontWeight: 800, color: "var(--eco-green)", letterSpacing: "-0.03em" }}>
                  <Counter to={100} suffix="%" />
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "var(--eco-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    fontWeight: 600,
                  }}
                >
                  Plant-based
                </div>
              </div>
              <div>
                <div style={{ fontSize: 36, fontWeight: 800, color: "var(--eco-green)", letterSpacing: "-0.03em" }}>
                  4.9<span style={{ fontSize: 22 }}>★</span>
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "var(--eco-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    fontWeight: 600,
                  }}
                >
                  Google Rating
                </div>
              </div>
            </div>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }} className="why-cards">
            {items.map((it, i) => (
              <Reveal key={it.title} delay={i * 60}>
                <div className="card" style={{ padding: 22, height: "100%" }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: "var(--eco-cream-2)",
                      color: "var(--eco-green)",
                      display: "grid",
                      placeItems: "center",
                      marginBottom: 14,
                    }}
                  >
                    <Icon name={it.icon} size={20} />
                  </div>
                  <h3 style={{ fontSize: 16, marginBottom: 8 }}>{it.title}</h3>
                  <p style={{ color: "var(--eco-muted)", fontSize: 13.5 }}>{it.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 980px){.why-grid{grid-template-columns:1fr !important;}}@media (max-width:600px){.why-cards{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}

function Testimonials() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % TESTIMONIALS.length), 6500);
    return () => clearInterval(id);
  }, []);

  const avatars = [IMG.av_w1, IMG.av_m1, IMG.av_w2, IMG.av_m2];

  return (
    <section style={{ background: "var(--eco-green-dark)", color: "#fff" }}>
      <div className="container-x">
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="eyebrow" style={{ color: "var(--eco-green-light)" }}>
              Client Success
            </span>
            <h2 style={{ fontSize: "clamp(34px, 4.5vw, 52px)", marginTop: 14, color: "#fff", maxWidth: 760, margin: "14px auto 0" }}>
              Toronto's <span style={{ color: "var(--eco-green-light)" }}>top-rated</span> eco-cleaning team.
            </h2>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", maxWidth: 880, margin: "0 auto" }}>
          <Reveal>
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 28,
                padding: 40,
                position: "relative",
                minHeight: 280,
              }}
            >
              <Icon name="sparkles" size={28} stroke={1.6} />
              <div style={{ position: "relative", marginTop: 24, minHeight: 130 }}>
                {TESTIMONIALS.map((t, i) => (
                  <div
                    key={i}
                    style={{
                      position: i === active ? "relative" : "absolute",
                      inset: 0,
                      opacity: i === active ? 1 : 0,
                      transition: "opacity .5s",
                      pointerEvents: i === active ? "auto" : "none",
                    }}
                  >
                    <div style={{ display: "flex", gap: 4, color: "var(--eco-accent)", marginBottom: 16 }}>
                      {Array.from({ length: t.rating }).map((_, k) => (
                        <Icon key={k} name="star" size={18} />
                      ))}
                    </div>
                    <p style={{ fontSize: 22, lineHeight: 1.45, color: "#fff", fontWeight: 500, letterSpacing: "-0.01em" }}>
                      "{t.quote}"
                    </p>
                    <div style={{ marginTop: 24, display: "flex", gap: 12, alignItems: "center" }}>
                      <img
                        src={avatars[i]}
                        alt={t.name}
                        style={{ width: 46, height: 46, borderRadius: "50%", objectFit: "cover" }}
                      />
                      <div>
                        <div style={{ fontWeight: 700 }}>{t.name}</div>
                        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>{t.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: 30 }}>
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  style={{
                    width: i === active ? 40 : 10,
                    height: 10,
                    borderRadius: 99,
                    border: "none",
                    background: i === active ? "var(--eco-green-light)" : "rgba(255,255,255,0.2)",
                    transition: "all .3s",
                    cursor: "pointer",
                  }}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <TrustGrid />
      <ServicesPreview />
      <HowItWorks />
      <WhyUs />
      <Testimonials />
      <FaqSection />
      <FinalCTA />
    </>
  );
}
