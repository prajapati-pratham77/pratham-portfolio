"use client";

import React from "react";
import Image from "next/image";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Heart, Smartphone, ArrowUpRight, MessageCircle, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255, 255, 255, 0.07)",
        background: "rgba(6, 7, 10, 0.95)",
        padding: "4rem 0 7rem",
        position: "relative",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "2.5rem",
            marginBottom: "3rem",
          }}
        >
          {/* Col 1: Brand & Bio */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}>
              <div
                style={{
                  position: "relative",
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  flexShrink: 0,
                  border: "2px solid var(--neon-emerald)",
                  boxShadow: "0 0 15px rgba(0, 245, 160, 0.4)",
                }}
              >
                <Image
                  src="/pratham.jpg"
                  alt="Pratham Prajapati"
                  fill
                  sizes="38px"
                  style={{ objectFit: "cover", objectPosition: "center 20%" }}
                />
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem" }}>
                PRATHAM<span style={{ color: "var(--neon-emerald)" }}>.DEV</span>
              </div>
            </div>
            <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.6, maxWidth: "320px" }}>
              Flutter Developer &amp; AI Integrator with 3+ years of production experience shipping 20+ mobile apps across real-time WebSockets, subscriptions, and voice agents.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <div
              style={{
                fontSize: "0.78rem",
                fontFamily: "var(--font-mono)",
                color: "var(--neon-emerald)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "1rem",
              }}
            >
              // NAVIGATION
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                { name: "About Me", href: "#about" },
                { name: "Projects (20+ Apps)", href: "#projects" },
                { name: "Work History", href: "#experience" },
                { name: "Skill Matrix", href: "#skills" },
                { name: "CLI Terminal", href: "#terminal" },
                { name: "Contact & Inquiries", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    style={{
                      color: "var(--text-secondary)",
                      textDecoration: "none",
                      fontSize: "0.88rem",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--neon-emerald)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Projects */}
          <div>
            <div
              style={{
                fontSize: "0.78rem",
                fontFamily: "var(--font-mono)",
                color: "var(--neon-cyan)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "1rem",
              }}
            >
              // FLAGSHIP SHIPPED
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                "Remindly AI (Voice & Geofencing)",
                "Socket Real-Time Chat Stream",
                "Travpholer (Vector World Map)",
                "Crypto Game App & IAP",
                "Dawai Wallet (Subscriptions)",
                "Time Umpire & Volly Plus",
              ].map((proj) => (
                <li key={proj}>
                  <a
                    href="#projects"
                    style={{
                      color: "var(--text-secondary)",
                      textDecoration: "none",
                      fontSize: "0.85rem",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--neon-cyan)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                  >
                    {proj}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Direct Channels */}
          <div>
            <div
              style={{
                fontSize: "0.78rem",
                fontFamily: "var(--font-mono)",
                color: "var(--neon-violet)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "1rem",
              }}
            >
              // CONNECT DIRECTLY
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#cbd5e1",
                  textDecoration: "none",
                  fontSize: "0.88rem",
                }}
              >
                <Mail size={16} color="var(--neon-emerald)" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <a
                href={PERSONAL_INFO.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#cbd5e1",
                  textDecoration: "none",
                  fontSize: "0.88rem",
                }}
              >
                <MessageCircle size={16} color="var(--neon-cyan)" />
                <span>WhatsApp (+91 9054484449)</span>
              </a>
              <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>
                Based in Ahmedabad, Gujarat, India • Open to Worldwide Remote
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.06)",
            paddingTop: "1.5rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            fontSize: "0.8rem",
            color: "var(--text-muted)",
          }}
        >
          <div>
            &copy; {currentYear} Pratham Prajapati. All rights reserved.
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span>Engineered with Next.js, GSAP &amp; Flutter Spirit</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
