"use client";

import React, { useState } from "react";
import { PROJECTS } from "@/data/portfolioData";
import { Project, ProjectCategory } from "@/types/portfolio";
import ProjectModal from "@/components/ProjectModal";
import {
  Sparkles,
  ArrowUpRight,
  Radio,
  Layers,
  Smartphone,
  CheckCircle2,
  ExternalLink,
  Code2,
  Filter,
} from "lucide-react";

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: { id: ProjectCategory; label: string; count: number }[] = [
    { id: "all", label: "All Projects", count: PROJECTS.length },
    {
      id: "ai_realtime",
      label: "AI & Real-Time",
      count: PROJECTS.filter((p) => p.category === "ai_realtime").length,
    },
    {
      id: "fintech_crypto",
      label: "Fintech & Subscriptions",
      count: PROJECTS.filter((p) => p.category === "fintech_crypto").length,
    },
    {
      id: "sports_enterprise",
      label: "Sports & Enterprise",
      count: PROJECTS.filter((p) => p.category === "sports_enterprise").length,
    },
    {
      id: "ecommerce_food",
      label: "E-Commerce & Food",
      count: PROJECTS.filter((p) => p.category === "ecommerce_food").length,
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      style={{
        padding: "6rem 0",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: "3rem" }}>
          <div className="section-tag">
            <span>20+ Shipped Mobile Applications</span>
          </div>
          <h2 className="section-title">
            Engineered for <span className="gradient-text">Real-Time Scale</span>, High Speed &amp; Precision
          </h2>
          <p className="section-subtitle">
            From conversational AI voice reminders with background geofencing to low-latency
            WebSocket chat clusters and in-app subscription monetizations across iOS &amp; Android.
          </p>
        </div>

        {/* Filter Navigation Pills */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.65rem",
            marginBottom: "2.5rem",
            alignItems: "center",
          }}
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  padding: "0.55rem 1.1rem",
                  borderRadius: "9999px",
                  fontSize: "0.85rem",
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  background: isActive
                    ? "linear-gradient(135deg, #00f5a0 0%, #00d9f5 100%)"
                    : "rgba(255, 255, 255, 0.04)",
                  color: isActive ? "#050608" : "#94a3b8",
                  border: isActive
                    ? "1px solid #00f5a0"
                    : "1px solid rgba(255, 255, 255, 0.08)",
                  boxShadow: isActive
                    ? "0 0 20px rgba(0, 245, 160, 0.35)"
                    : "none",
                }}
              >
                <span>{cat.label}</span>
                <span
                  style={{
                    fontSize: "0.72rem",
                    padding: "1px 6px",
                    borderRadius: "8px",
                    background: isActive ? "rgba(0,0,0,0.25)" : "rgba(255,255,255,0.06)",
                    color: isActive ? "#000" : "#64748b",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "1.75rem",
          }}
          className="projects-grid"
        >
          {filteredProjects.map((project) => {
            const isFeatured = project.featured;
            return (
              <div
                key={project.id}
                className="glass-card"
                onClick={() => setSelectedProject(project)}
                style={{
                  padding: "1.75rem",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  borderColor: isFeatured ? "rgba(0, 245, 160, 0.25)" : "var(--border-subtle)",
                }}
              >
                {/* Top Badge & Company */}
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0.5rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontFamily: "var(--font-mono)",
                        padding: "0.2rem 0.6rem",
                        borderRadius: "6px",
                        background: isFeatured ? "rgba(0, 245, 160, 0.12)" : "rgba(255, 255, 255, 0.05)",
                        color: isFeatured ? "var(--neon-emerald)" : "#94a3b8",
                        border: isFeatured
                          ? "1px solid rgba(0, 245, 160, 0.3)"
                          : "1px solid rgba(255, 255, 255, 0.06)",
                        fontWeight: 600,
                      }}
                    >
                      {project.categoryLabel}
                    </span>

                    {project.badge && (
                      <span
                        style={{
                          fontSize: "0.7rem",
                          color: "var(--neon-violet)",
                          fontWeight: 700,
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        <Sparkles size={12} />
                        {project.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.35rem",
                      fontWeight: 700,
                      color: "#f8fafc",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {project.title}
                  </h3>
                  <div
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--neon-cyan)",
                      marginBottom: "0.85rem",
                      fontWeight: 500,
                    }}
                  >
                    {project.subtitle}
                  </div>

                  {/* Short Description */}
                  <p
                    style={{
                      fontSize: "0.88rem",
                      color: "#94a3b8",
                      lineHeight: 1.6,
                      marginBottom: "1.25rem",
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Highlights pills */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.4rem",
                      marginBottom: "1.25rem",
                    }}
                  >
                    {project.architectureDetails.slice(0, 2).map((item, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.4rem",
                          fontSize: "0.78rem",
                          color: "#cbd5e1",
                        }}
                      >
                        <CheckCircle2 size={13} color="var(--neon-emerald)" style={{ flexShrink: 0, marginTop: "2px" }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer: Tech Stack & CTA */}
                <div>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.4rem",
                      marginBottom: "1.25rem",
                    }}
                  >
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span key={tech} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="tech-pill" style={{ opacity: 0.7 }}>
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingTop: "0.85rem",
                      borderTop: "1px solid rgba(255, 255, 255, 0.07)",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      color: "var(--neon-emerald)",
                    }}
                  >
                    <span>Inspect Architecture</span>
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
