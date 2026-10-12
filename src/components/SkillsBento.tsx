"use client";

import React from "react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import { Cpu, Smartphone, Layers, Radio, Sparkles, Database, Terminal, ShieldCheck } from "lucide-react";

export default function SkillsBento() {
  const icons = [
    <Smartphone key="1" size={20} color="var(--neon-emerald)" />,
    <Layers key="2" size={20} color="var(--neon-cyan)" />,
    <Radio key="3" size={20} color="var(--neon-violet)" />,
    <Database key="4" size={20} color="var(--neon-amber)" />,
    <Sparkles key="5" size={20} color="var(--neon-pink)" />,
  ];

  return (
    <section
      id="skills"
      style={{
        padding: "6rem 0",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <div className="section-tag">
            <span>Engineering Arsenal</span>
          </div>
          <h2 className="section-title">
            Battle-Tested <span className="gradient-text">Core Technologies</span> &amp; Modern Stacks
          </h2>
          <p className="section-subtitle">
            A comprehensive matrix of frameworks, state machines, networking protocols,
            and emerging AI technologies refined across 20+ production releases.
          </p>
        </div>

        {/* Bento Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
            gap: "1.75rem",
          }}
          className="skills-grid"
        >
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={cat.title}
              className="glass-card"
              style={{
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gridColumn: idx === 0 ? "span 1" : undefined,
              }}
            >
              <div>
                {/* Category Header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1rem",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "10px",
                        background: "rgba(255, 255, 255, 0.05)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {icons[idx % icons.length]}
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        color: "#ffffff",
                      }}
                    >
                      {cat.title}
                    </h3>
                  </div>

                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      padding: "0.2rem 0.6rem",
                      borderRadius: "6px",
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {cat.badge}
                  </span>
                </div>

                <p
                  style={{
                    fontSize: "0.86rem",
                    color: "var(--text-secondary)",
                    marginBottom: "1.5rem",
                    lineHeight: 1.55,
                  }}
                >
                  {cat.description}
                </p>

                {/* Skills Progress / Meter list */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {cat.skills.map((skill) => (
                    <div key={skill.name}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginBottom: "0.35rem",
                          fontSize: "0.85rem",
                        }}
                      >
                        <span style={{ fontWeight: 600, color: "#f1f5f9" }}>{skill.name}</span>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                          {skill.tag && (
                            <span
                              style={{
                                fontSize: "0.68rem",
                                fontFamily: "var(--font-mono)",
                                color: "var(--neon-cyan)",
                              }}
                            >
                              [{skill.tag}]
                            </span>
                          )}
                          <span
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "0.75rem",
                              color: "var(--text-muted)",
                            }}
                          >
                            {skill.experience || `${skill.level}%`}
                          </span>
                        </div>
                      </div>

                      {/* Bar */}
                      <div
                        style={{
                          width: "100%",
                          height: "6px",
                          background: "rgba(255, 255, 255, 0.06)",
                          borderRadius: "9999px",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            width: `${skill.level}%`,
                            height: "100%",
                            borderRadius: "9999px",
                            background:
                              idx === 0
                                ? "linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%)"
                                : idx === 1
                                ? "linear-gradient(90deg, #00d9f5 0%, #8b5cf6 100%)"
                                : idx === 2
                                ? "linear-gradient(90deg, #8b5cf6 0%, #ff2e93 100%)"
                                : idx === 3
                                ? "linear-gradient(90deg, #ffb800 0%, #00f5a0 100%)"
                                : "linear-gradient(90deg, #ff2e93 0%, #00d9f5 100%)",
                            transition: "width 1s ease-out",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
