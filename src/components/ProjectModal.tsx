"use client";

import React, { useEffect } from "react";
import { Project } from "@/types/portfolio";
import { X, CheckCircle2, Cpu, Smartphone, Layers, ArrowUpRight, ShieldCheck, Zap } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        backgroundColor: "rgba(3, 4, 7, 0.85)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "760px",
          maxHeight: "90vh",
          overflowY: "auto",
          background: "linear-gradient(180deg, #131622 0%, #090a10 100%)",
          border: "1px solid rgba(0, 245, 160, 0.3)",
          borderRadius: "24px",
          padding: "2rem",
          boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.9), 0 0 35px rgba(0, 245, 160, 0.15)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: "absolute",
            top: "1.25rem",
            right: "1.25rem",
            background: "rgba(255, 255, 255, 0.06)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "50%",
            width: "36px",
            height: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#e2e8f0",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.15)")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.06)")}
        >
          <X size={18} />
        </button>

        {/* Header Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", alignItems: "center", marginBottom: "1rem" }}>
          <span
            style={{
              padding: "0.25rem 0.75rem",
              borderRadius: "9999px",
              background: "rgba(0, 245, 160, 0.15)",
              border: "1px solid rgba(0, 245, 160, 0.4)",
              color: "#00f5a0",
              fontSize: "0.75rem",
              fontFamily: "var(--font-mono)",
              fontWeight: 600,
            }}
          >
            {project.categoryLabel}
          </span>
          {project.badge && (
            <span
              style={{
                padding: "0.25rem 0.75rem",
                borderRadius: "9999px",
                background: "rgba(139, 92, 246, 0.18)",
                border: "1px solid rgba(139, 92, 246, 0.4)",
                color: "#c084fc",
                fontSize: "0.75rem",
                fontFamily: "var(--font-mono)",
                fontWeight: 600,
              }}
            >
              {project.badge}
            </span>
          )}
          {project.company && (
            <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
              via <strong style={{ color: "#ffffff" }}>{project.company}</strong>
            </span>
          )}
        </div>

        {/* Title & Subtitle */}
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
            fontWeight: 800,
            color: "#f8fafc",
            marginBottom: "0.5rem",
            lineHeight: 1.2,
          }}
        >
          {project.title}
        </h2>
        <p
          style={{
            fontSize: "1rem",
            color: "var(--neon-cyan)",
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            marginBottom: "1.5rem",
          }}
        >
          {project.subtitle}
        </p>

        {/* Full Overview Description */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            border: "1px solid rgba(255, 255, 255, 0.07)",
            borderRadius: "16px",
            padding: "1.25rem",
            marginBottom: "1.75rem",
          }}
        >
          <div
            style={{
              fontSize: "0.75rem",
              fontFamily: "var(--font-mono)",
              color: "var(--neon-emerald)",
              marginBottom: "0.5rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            // ARCHITECTURE & PROBLEM STATEMENT
          </div>
          <p style={{ color: "#cbd5e1", fontSize: "0.95rem", lineHeight: 1.65 }}>
            {project.longDescription}
          </p>
        </div>

        {/* Engineering Highlights / Architecture Details */}
        <div style={{ marginBottom: "1.75rem" }}>
          <div
            style={{
              fontSize: "0.8rem",
              fontFamily: "var(--font-mono)",
              color: "#94a3b8",
              marginBottom: "0.85rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
            }}
          >
            KEY TECHNICAL IMPLEMENTATIONS:
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {project.architectureDetails.map((detail, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.65rem",
                  fontSize: "0.88rem",
                  color: "#e2e8f0",
                  lineHeight: 1.5,
                }}
              >
                <CheckCircle2
                  size={16}
                  color="var(--neon-emerald)"
                  style={{ flexShrink: 0, marginTop: "3px" }}
                />
                <span>{detail}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Metrics Row */}
        {project.metrics && project.metrics.length > 0 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "0.75rem",
              marginBottom: "1.75rem",
            }}
          >
            {project.metrics.map((m, idx) => (
              <div
                key={idx}
                style={{
                  background: "rgba(0, 245, 160, 0.05)",
                  border: "1px solid rgba(0, 245, 160, 0.2)",
                  borderRadius: "12px",
                  padding: "0.75rem",
                  textAlign: "center",
                }}
              >
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "0.25rem" }}>
                  <Zap size={14} color="var(--neon-emerald)" />
                </div>
                <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#f8fafc" }}>
                  {m}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack Matrix */}
        <div>
          <div
            style={{
              fontSize: "0.75rem",
              fontFamily: "var(--font-mono)",
              color: "var(--text-muted)",
              marginBottom: "0.6rem",
              letterSpacing: "0.05em",
            }}
          >
            BUILT WITH:
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {project.techStack.map((tech) => (
              <span key={tech} className="tech-pill">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Actions */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "0.75rem",
            marginTop: "2rem",
            paddingTop: "1.25rem",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <button onClick={onClose} className="btn-ghost" style={{ padding: "0.6rem 1.25rem", fontSize: "0.85rem" }}>
            Close Case Study
          </button>
          <a
            href="#contact"
            onClick={onClose}
            className="btn-neon"
            style={{ padding: "0.6rem 1.25rem", fontSize: "0.85rem" }}
          >
            <span>Inquire About This Stack</span>
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </div>
  );
}
