"use client";

import React from "react";
import { EXPERIENCES, PERSONAL_INFO } from "@/data/portfolioData";
import { Briefcase, Calendar, MapPin, CheckCircle2, GraduationCap, Award, Sparkles } from "lucide-react";

export default function ExperienceTimeline() {
  return (
    <section
      id="experience"
      style={{
        padding: "6rem 0",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <div className="section-tag">
            <span>Career Journey &amp; Milestones</span>
          </div>
          <h2 className="section-title">
            3+ Years of <span className="gradient-text">Production Flutter</span> Engineering
          </h2>
          <p className="section-subtitle">
            From high-throughput WebSocket backbones and in-app subscription lifecycles to
            building clean architecture patterns and low-latency client rendering.
          </p>
        </div>

        {/* Experience Cards / Timeline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginBottom: "4rem" }}>
          {EXPERIENCES.map((exp, index) => (
            <div
              key={exp.id}
              className="glass-card"
              style={{
                padding: "2rem",
                position: "relative",
                borderLeft: exp.current
                  ? "3px solid var(--neon-emerald)"
                  : "3px solid var(--neon-cyan)",
              }}
            >
              {/* Top Meta */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1rem",
                  marginBottom: "1rem",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.25rem" }}>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.45rem",
                        fontWeight: 700,
                        color: "#ffffff",
                      }}
                    >
                      {exp.role}
                    </h3>
                    {exp.current && (
                      <span className="badge-pill status-available" style={{ padding: "0.2rem 0.6rem", fontSize: "0.7rem" }}>
                        <span className="pulse-dot" />
                        Current
                      </span>
                    )}
                  </div>
                  <div
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 600,
                      color: exp.current ? "var(--neon-emerald)" : "var(--neon-cyan)",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {exp.company}
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    gap: "0.25rem",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8rem",
                    color: "var(--text-muted)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "#cbd5e1" }}>
                    <Calendar size={14} color="var(--neon-emerald)" />
                    <span>{exp.period}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                    <MapPin size={13} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Summary Description */}
              <p
                style={{
                  color: "#94a3b8",
                  fontSize: "0.95rem",
                  marginBottom: "1.25rem",
                  lineHeight: 1.6,
                }}
              >
                {exp.description}
              </p>

              {/* Highlights List */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                  marginBottom: "1.5rem",
                }}
              >
                {exp.highlights.map((h, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.65rem",
                      fontSize: "0.88rem",
                      color: "#e2e8f0",
                      lineHeight: 1.55,
                    }}
                  >
                    <CheckCircle2
                      size={16}
                      color="var(--neon-emerald)"
                      style={{ flexShrink: 0, marginTop: "2px" }}
                    />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                {exp.techStack.map((tech) => (
                  <span key={tech} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education & Academic Credentials */}
        <div style={{ marginTop: "3rem" }}>
          <div className="section-tag" style={{ marginBottom: "0.5rem" }}>
            <span>Formal Education &amp; Background</span>
          </div>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.75rem",
              fontWeight: 700,
              marginBottom: "1.5rem",
            }}
          >
            Academic Foundation
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {PERSONAL_INFO.education.map((edu, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: "1.5rem",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: idx === 0 ? "rgba(0, 245, 160, 0.15)" : "rgba(0, 217, 245, 0.15)",
                    border: idx === 0 ? "1px solid rgba(0, 245, 160, 0.3)" : "1px solid rgba(0, 217, 245, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: idx === 0 ? "var(--neon-emerald)" : "var(--neon-cyan)",
                    flexShrink: 0,
                  }}
                >
                  <GraduationCap size={22} />
                </div>

                <div>
                  <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff", fontFamily: "var(--font-display)" }}>
                    {edu.degree}
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "var(--neon-emerald)", fontWeight: 600, marginTop: "2px" }}>
                    {edu.field}
                  </div>
                  <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginTop: "4px" }}>
                    {edu.institution}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
