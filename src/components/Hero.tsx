"use client";

import React, { useEffect, useRef } from "react";
import { PERSONAL_INFO, STATS } from "@/data/portfolioData";
import { ArrowRight, Terminal, Sparkles, Smartphone, Code2, Zap, Send } from "lucide-react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-badge", {
        opacity: 0,
        y: -20,
        duration: 0.8,
      })
        .from(
          headlineRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 1,
          },
          "-=0.5"
        )
        .from(
          subtitleRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
          },
          "-=0.6"
        )
        .from(
          actionsRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
          },
          "-=0.5"
        )
        .from(
          statsRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
          },
          "-=0.5"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="about"
      style={{
        paddingTop: "7.5rem",
        paddingBottom: "5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left Column: Headline, Bio & CTAs */}
          <div style={{ maxWidth: "680px" }}>
            {/* Status & Role Pill */}
            <div
              className="badge-pill status-available hero-badge"
              style={{ marginBottom: "1.25rem" }}
            >
              <span className="pulse-dot" />
              <span>FLUTTER SPECIALIST • AI SYSTEMS • AHMEDABAD, IN</span>
            </div>

            {/* Gen-Z Big Typography Headline */}
            <h1
              ref={headlineRef}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.4rem, 5.2vw, 4.2rem)",
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                marginBottom: "1.5rem",
              }}
            >
              Building <span className="gradient-text">Ultra-Fast Mobile</span> Apps &amp;{" "}
              <span className="gradient-text-cyber">Real-Time AI</span>
            </h1>

            {/* Subtitle / Bio */}
            <p
              ref={subtitleRef}
              style={{
                fontSize: "clamp(1.02rem, 1.25vw, 1.18rem)",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                marginBottom: "2rem",
              }}
            >
              Hey, I&apos;m <strong style={{ color: "#ffffff" }}>Pratham Prajapati</strong>. With{" "}
              <strong style={{ color: "var(--neon-emerald)" }}>3+ years</strong> of production engineering,
              I&apos;ve shipped <strong style={{ color: "#ffffff" }}>20+ mobile apps</strong> across
              travel, fintech, sports, and e-commerce. Currently mastering high-throughput{" "}
              <span style={{ color: "var(--neon-cyan)" }}>WebSockets</span> &amp; in-app subscriptions at{" "}
              <strong style={{ color: "#ffffff" }}>Saturncube Technology</strong>, while building autonomous{" "}
              <span style={{ color: "var(--neon-violet)" }}>AI voice agents</span>.
            </p>

            {/* Action Buttons */}
            <div
              ref={actionsRef}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                marginBottom: "2.5rem",
              }}
            >
              <a href="#projects" className="btn-neon">
                <span>Explore 20+ Projects</span>
                <ArrowRight size={18} />
              </a>

              <a href="#terminal" className="btn-ghost">
                <Terminal size={18} color="var(--neon-emerald)" />
                <span>Launch CLI Terminal</span>
              </a>

              <a href="#contact" className="btn-ghost">
                <Send size={16} color="var(--neon-cyan)" />
                <span>Contact Pratham</span>
              </a>
            </div>

            {/* Live Stats Row */}
            <div
              ref={statsRef}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                gap: "1rem",
                padding: "1.25rem",
                background: "rgba(18, 21, 32, 0.45)",
                backdropFilter: "blur(12px)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "16px",
              }}
            >
              {STATS.map((s, idx) => (
                <div key={idx}>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.75rem",
                      fontWeight: 800,
                      color:
                        idx === 0
                          ? "var(--neon-emerald)"
                          : idx === 1
                          ? "var(--neon-cyan)"
                          : idx === 2
                          ? "var(--neon-violet)"
                          : "var(--neon-pink)",
                      lineHeight: 1,
                      marginBottom: "0.3rem",
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                    }}
                  >
                    {s.label}
                  </div>
                  <div
                    style={{
                      fontSize: "0.68rem",
                      color: "var(--text-muted)",
                      marginTop: "2px",
                    }}
                  >
                    {s.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
