"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import {
  Home,
  Briefcase,
  Layers,
  Terminal,
  Mail,
  ArrowUp,
  Sparkles,
  Smartphone,
} from "lucide-react";

export default function FloatingDock() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const triggerSparkle = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.9 },
      colors: ["#00f5a0", "#00d9f5", "#8b5cf6"],
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const dockItems = [
    { icon: <Home size={18} />, label: "Home", href: "#" },
    { icon: <Smartphone size={18} />, label: "Projects", href: "#projects" },
    { icon: <Briefcase size={18} />, label: "Experience", href: "#experience" },
    { icon: <Layers size={18} />, label: "Skills", href: "#skills" },
    { icon: <Terminal size={18} />, label: "CLI", href: "#terminal" },
    { icon: <Mail size={18} />, label: "Contact", href: "#contact" },
  ];

  return (
    <div
      style={{
        position: "fixed",
        bottom: "1.5rem",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 90,
        display: "flex",
        alignItems: "center",
        gap: "0.4rem",
        padding: "0.45rem 0.65rem",
        background: "rgba(12, 14, 22, 0.82)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "9999px",
        boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 245, 160, 0.15)",
      }}
    >
      {dockItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          aria-label={item.label}
          title={item.label}
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--text-secondary)",
            textDecoration: "none",
            transition: "all 0.2s ease",
            background: "transparent",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "var(--neon-emerald)";
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
            e.currentTarget.style.transform = "scale(1.15) translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "var(--text-secondary)";
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.transform = "scale(1) translateY(0)";
          }}
        >
          {item.icon}
        </a>
      ))}

      {/* Sparkles celebration button */}
      <button
        onClick={triggerSparkle}
        aria-label="Celebrate"
        title="Party Confetti"
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--neon-pink)",
          border: "none",
          background: "transparent",
          cursor: "pointer",
          transition: "all 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.15) translateY(-2px)";
          e.currentTarget.style.background = "rgba(255, 46, 147, 0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1) translateY(0)";
          e.currentTarget.style.background = "transparent";
        }}
      >
        <Sparkles size={18} />
      </button>

      {/* Scroll to Top button if scrolled */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Back to Top"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--neon-cyan)",
            border: "none",
            background: "rgba(0, 217, 245, 0.12)",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.15) translateY(-2px)";
            e.currentTarget.style.background = "rgba(0, 217, 245, 0.25)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1) translateY(0)";
            e.currentTarget.style.background = "rgba(0, 217, 245, 0.12)";
          }}
        >
          <ArrowUp size={18} />
        </button>
      )}
    </div>
  );
}
