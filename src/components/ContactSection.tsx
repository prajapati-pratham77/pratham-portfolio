"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import confetti from "canvas-confetti";
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  MessageCircle,
  Sparkles,
  ArrowUpRight,
  Globe,
} from "lucide-react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#00f5a0", "#00d9f5", "#8b5cf6"],
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormSubmitted(true);
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 },
      colors: ["#00f5a0", "#00d9f5", "#ff2e93", "#8b5cf6"],
    });

    // Reset after showing confirmation
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setFormSubmitted(false);
    }, 6000);
  };

  return (
    <section
      id="contact"
      style={{
        padding: "6rem 0 8rem",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <div className="section-tag">
            <span>Direct Communication</span>
          </div>
          <h2 className="section-title">
            Let&apos;s Build Something <span className="gradient-text">Exceptional</span>
          </h2>
          <p className="section-subtitle">
            Whether you need a high-concurrency mobile application, real-time WebSocket infrastructure,
            or an autonomous voice AI integration, I&apos;m ready to dive in.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2.5rem",
          }}
          className="contact-grid"
        >
          {/* Left Column: Direct Info & Quick Actions */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* Quick Copy Email Card */}
            <div className="glass-card" style={{ padding: "1.75rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "rgba(0, 245, 160, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--neon-emerald)",
                  }}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                    DIRECT EMAIL
                  </div>
                  <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "#ffffff" }}>
                    {PERSONAL_INFO.email}
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.75rem", marginTop: "1rem" }}>
                <button
                  onClick={handleCopyEmail}
                  className="btn-neon"
                  style={{
                    flex: 1,
                    padding: "0.65rem 1rem",
                    fontSize: "0.85rem",
                  }}
                >
                  {copied ? (
                    <>
                      <Check size={16} />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="btn-ghost"
                  style={{ padding: "0.65rem 1rem", fontSize: "0.85rem" }}
                >
                  <ArrowUpRight size={16} />
                  <span>Send Mail</span>
                </a>
              </div>
            </div>

            {/* Direct WhatsApp Action Card */}
            <div className="glass-card" style={{ padding: "1.75rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "rgba(0, 217, 245, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--neon-cyan)",
                  }}
                >
                  <MessageCircle size={20} />
                </div>
                <div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                    WHATSAPP &amp; PHONE
                  </div>
                  <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "#ffffff" }}>
                    {PERSONAL_INFO.phone}
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.75rem", marginTop: "1rem" }}>
                <a
                  href={PERSONAL_INFO.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-neon"
                  style={{
                    flex: 1,
                    padding: "0.65rem 1rem",
                    fontSize: "0.85rem",
                    background: "var(--neon-cyan)",
                    boxShadow: "0 0 25px -4px rgba(0, 217, 245, 0.5)",
                  }}
                >
                  <MessageCircle size={16} />
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="btn-ghost"
                  style={{ padding: "0.65rem 1rem", fontSize: "0.85rem" }}
                >
                  <Phone size={16} />
                  <span>Call</span>
                </a>
              </div>
            </div>

            {/* Location & Languages Card */}
            <div className="glass-card" style={{ padding: "1.75rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", marginBottom: "1.25rem" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "rgba(139, 92, 246, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--neon-violet)",
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                    LOCATION &amp; TIMEZONE
                  </div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#ffffff" }}>
                    {PERSONAL_INFO.location}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginTop: "2px" }}>
                    {PERSONAL_INFO.address}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "var(--neon-emerald)", marginTop: "4px", fontFamily: "var(--font-mono)" }}>
                    IST (UTC +5:30) • Open to Remote &amp; Global Hybrid
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.07)", paddingTop: "1rem" }}>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)", marginBottom: "0.5rem" }}>
                  LANGUAGES:
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {PERSONAL_INFO.languages.map((lang) => (
                    <span key={lang.name} className="tech-pill">
                      {lang.name} ({lang.level})
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="glass-card" style={{ padding: "2.25rem" }}>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.45rem",
                fontWeight: 700,
                color: "#ffffff",
                marginBottom: "0.5rem",
              }}
            >
              Send a Direct Dispatch
            </h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "1.75rem" }}>
              Have an opening, contract project, or mobile architecture challenge? Fill out the brief form below.
            </p>

            {formSubmitted ? (
              <div
                style={{
                  background: "rgba(0, 245, 160, 0.1)",
                  border: "1px solid var(--neon-emerald)",
                  borderRadius: "16px",
                  padding: "2rem",
                  textAlign: "center",
                }}
              >
                <Sparkles size={36} color="var(--neon-emerald)" style={{ margin: "0 auto 1rem" }} />
                <h4 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.5rem" }}>
                  Dispatch Received!
                </h4>
                <p style={{ color: "#cbd5e1", fontSize: "0.9rem" }}>
                  Thanks for reaching out! Pratham will review your message and reply to{" "}
                  <strong style={{ color: "var(--neon-emerald)" }}>{formData.email}</strong> shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.8rem",
                      fontFamily: "var(--font-mono)",
                      color: "var(--text-secondary)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Vance"
                    style={{
                      width: "100%",
                      padding: "0.85rem 1rem",
                      borderRadius: "10px",
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      color: "#ffffff",
                      fontSize: "0.9rem",
                      outline: "none",
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.8rem",
                      fontFamily: "var(--font-mono)",
                      color: "var(--text-secondary)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    style={{
                      width: "100%",
                      padding: "0.85rem 1rem",
                      borderRadius: "10px",
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      color: "#ffffff",
                      fontSize: "0.9rem",
                      outline: "none",
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.8rem",
                      fontFamily: "var(--font-mono)",
                      color: "var(--text-secondary)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    SUBJECT / ROLE
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Mobile App Project / Senior Flutter Role"
                    style={{
                      width: "100%",
                      padding: "0.85rem 1rem",
                      borderRadius: "10px",
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      color: "#ffffff",
                      fontSize: "0.9rem",
                      outline: "none",
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.8rem",
                      fontFamily: "var(--font-mono)",
                      color: "var(--text-secondary)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    PROJECT OR OPPORTUNITY DETAILS *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your mobile vision, timeline, or team setup..."
                    style={{
                      width: "100%",
                      padding: "0.85rem 1rem",
                      borderRadius: "10px",
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      color: "#ffffff",
                      fontSize: "0.9rem",
                      outline: "none",
                      resize: "vertical",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-neon"
                  style={{
                    width: "100%",
                    padding: "0.9rem",
                    marginTop: "0.5rem",
                  }}
                >
                  <Send size={16} />
                  <span>Transmit Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 960px) {
          .contact-grid {
            grid-template-columns: 1fr 1.15fr !important;
          }
        }
      `}</style>
    </section>
  );
}
