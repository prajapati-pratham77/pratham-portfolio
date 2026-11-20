"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PERSONAL_INFO, PHOTO_SRC } from "@/data/portfolioData";
import { Menu, X, ArrowUpRight, Terminal, Sparkles, Download } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects (20+)", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Terminal", href: "#terminal" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s ease",
        padding: scrolled ? "0.75rem 0" : "1.25rem 0",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        backgroundColor: scrolled ? "rgba(6, 7, 10, 0.85)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.07)" : "none",
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Monogram Logo */}
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            textDecoration: "none",
            color: "var(--text-primary)",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              overflow: "hidden",
              flexShrink: 0,
              border: "2px solid var(--neon-emerald)",
              boxShadow: "0 0 15px rgba(0, 245, 160, 0.4)",
            }}
          >
            <Image
              src={PHOTO_SRC}
              alt="Pratham Prajapati"
              fill
              sizes="42px"
              style={{ objectFit: "cover", objectPosition: "center 20%" }}
            />
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem", letterSpacing: "-0.02em" }}>
              PRATHAM<span style={{ color: "var(--neon-emerald)" }}>.DEV</span>
            </div>
            <div style={{ fontSize: "0.68rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
              FLUTTER & AI
            </div>
          </div>
        </a>

        {/* Live Status Pill (Desktop only) */}
        <div
          className="badge-pill status-available"
          style={{
            display: "none",
            fontSize: "0.78rem",
          }}
          id="nav-status-pill"
        >
          <span className="pulse-dot" />
          <span>Available for High-Impact Roles</span>
        </div>

        {/* Desktop Nav Items */}
        <nav
          style={{
            display: "none",
            alignItems: "center",
            gap: "1.75rem",
          }}
          id="nav-desktop-links"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: "var(--text-secondary)",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 500,
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--neon-emerald)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <a
            href="#contact"
            className="btn-neon"
            style={{
              padding: "0.6rem 1.15rem",
              fontSize: "0.85rem",
              borderRadius: "10px",
              display: "none",
            }}
            id="nav-cta-talk"
          >
            <span>Let&apos;s Build</span>
            <ArrowUpRight size={15} />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "8px",
              padding: "0.5rem",
              color: "var(--text-primary)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            id="nav-mobile-toggle"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "rgba(9, 10, 16, 0.96)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            padding: "1.5rem 1.5rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <div className="badge-pill status-available" style={{ alignSelf: "flex-start", marginBottom: "0.5rem" }}>
            <span className="pulse-dot" />
            <span>Available for Mobile & AI Roles</span>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: "var(--text-primary)",
                textDecoration: "none",
                fontSize: "1.1rem",
                fontWeight: 600,
                padding: "0.5rem 0",
                borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>{link.name}</span>
              <ArrowUpRight size={18} color="var(--neon-emerald)" />
            </a>
          ))}

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "1rem" }}>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-neon"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={16} />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="btn-ghost"
              style={{ width: "100%", justifyContent: "center", fontSize: "0.88rem" }}
            >
              <Download size={16} />
              <span>Contact Directly ({PERSONAL_INFO.email})</span>
            </a>
          </div>
        </div>
      )}

      {/* Responsive media queries style element */}
      <style jsx>{`
        @media (min-width: 900px) {
          #nav-desktop-links {
            display: flex !important;
          }
          #nav-cta-talk {
            display: inline-flex !important;
          }
          #nav-mobile-toggle {
            display: none !important;
          }
        }
        @media (min-width: 1100px) {
          #nav-status-pill {
            display: inline-flex !important;
          }
        }
      `}</style>
    </header>
  );
}
