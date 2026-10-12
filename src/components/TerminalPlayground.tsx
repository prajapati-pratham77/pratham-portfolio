"use client";

import React, { useState, useRef, useEffect } from "react";
import { TERMINAL_COMMANDS } from "@/data/portfolioData";
import { Terminal, Send, Trash2, Sparkles, CornerDownLeft } from "lucide-react";

interface TerminalLine {
  id: number;
  type: "command" | "output";
  text: string | string[];
}

export default function TerminalPlayground() {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<TerminalLine[]>([
    {
      id: 1,
      type: "output",
      text: [
        "===========================================================",
        "⚡ PRATHAM_OS v3.8.1 (x86_64-darwin-flutter-core)",
        "Type 'help' to view available commands, or click quick tags below.",
        "===========================================================",
      ],
    },
    {
      id: 2,
      type: "command",
      text: "hire",
    },
    {
      id: 3,
      type: "output",
      text: TERMINAL_COMMANDS["hire"],
    },
  ]);

  const nextId = useRef(4);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const quickCommands = ["help", "about", "skills", "projects", "experience", "contact", "hire", "cat resume"];

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase().replace(/\s+/g, " ");
    if (!trimmed) return;

    if (trimmed === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    }

    const output = TERMINAL_COMMANDS[trimmed] || [
      `zsh: command not found: ${trimmed}`,
      "Type 'help' for a list of supported commands.",
    ];

    setHistory((prev) => [
      ...prev,
      { id: nextId.current++, type: "command", text: cmd.trim() },
      { id: nextId.current++, type: "output", text: output },
    ]);
    setInputVal("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  // Scroll only the terminal body (not the page) to the newest line
  useEffect(() => {
    const body = bodyRef.current;
    if (body) body.scrollTo({ top: body.scrollHeight, behavior: "smooth" });
  }, [history]);

  return (
    <section
      id="terminal"
      style={{
        padding: "6rem 0",
        position: "relative",
        scrollMarginTop: "4rem",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: "2.5rem" }}>
          <div className="section-tag">
            <span>Interactive CLI Console</span>
          </div>
          <h2 className="section-title">
            Developer <span className="gradient-text">Playground</span> &amp; Shell
          </h2>
          <p className="section-subtitle">
            Prefer a keyboard interface? Run interactive terminal commands or click the shortcut chips below to query skills, architecture patterns, and resume data directly.
          </p>
        </div>

        {/* Terminal Container */}
        <div
          className="glass-card"
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            border: "1px solid rgba(0, 245, 160, 0.25)",
            background: "rgba(10, 12, 18, 0.95)",
            borderRadius: "20px",
            boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 30px rgba(0, 245, 160, 0.1)",
            overflow: "hidden",
          }}
          onClick={() => inputRef.current?.focus({ preventScroll: true })}
        >
          {/* Terminal Titlebar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0.85rem 1.25rem",
              background: "rgba(255, 255, 255, 0.03)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            {/* Window Dots */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ff5f56" }} />
              <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ffbd2e" }} />
              <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#27c93f" }} />
            </div>

            {/* Terminal Title */}
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.78rem",
                color: "#94a3b8",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <Terminal size={14} color="var(--neon-emerald)" />
              <span>pratham@saturncube-macbook-pro:~ (zsh)</span>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setHistory([]);
              }}
              style={{
                background: "transparent",
                border: "none",
                color: "#64748b",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                fontSize: "0.72rem",
                fontFamily: "var(--font-mono)",
              }}
              title="Clear terminal"
            >
              <Trash2 size={13} />
              <span>clear</span>
            </button>
          </div>

          {/* Quick Command Chips */}
          <div
            style={{
              padding: "0.75rem 1.25rem",
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              alignItems: "center",
              background: "rgba(0, 0, 0, 0.3)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
            }}
          >
            <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
              Quick Run:
            </span>
            {quickCommands.map((cmd) => (
              <button
                key={cmd}
                onClick={(e) => {
                  e.stopPropagation();
                  handleCommand(cmd);
                }}
                style={{
                  padding: "3px 9px",
                  borderRadius: "6px",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  color: "#cbd5e1",
                  fontSize: "0.72rem",
                  fontFamily: "var(--font-mono)",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--neon-emerald)";
                  e.currentTarget.style.color = "var(--neon-emerald)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.color = "#cbd5e1";
                }}
              >
                ${cmd}
              </button>
            ))}
          </div>

          {/* Terminal Body */}
          <div
            ref={bodyRef}
            style={{
              padding: "1.25rem",
              minHeight: "320px",
              maxHeight: "440px",
              overflowY: "auto",
              fontFamily: "var(--font-mono)",
              fontSize: "0.85rem",
              lineHeight: 1.6,
            }}
          >
            {history.map((item) => (
              <div key={item.id} style={{ marginBottom: "0.85rem" }}>
                {item.type === "command" ? (
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--neon-cyan)" }}>
                    <span style={{ color: "var(--neon-emerald)", fontWeight: 700 }}>➜</span>
                    <span style={{ color: "#94a3b8" }}>~/portfolio</span>
                    <span style={{ color: "#f8fafc", fontWeight: 600 }}>{item.text}</span>
                  </div>
                ) : (
                  <div style={{ color: "#cbd5e1", paddingLeft: "1.25rem" }}>
                    {Array.isArray(item.text) ? (
                      item.text.map((line, lIdx) => (
                        <div
                          key={lIdx}
                          style={{
                            color: line.startsWith("🚀")
                              ? "var(--neon-emerald)"
                              : line.startsWith("•")
                              ? "#e2e8f0"
                              : line.startsWith("=")
                              ? "var(--text-muted)"
                              : "#cbd5e1",
                          }}
                        >
                          {line}
                        </div>
                      ))
                    ) : (
                      <div>{item.text}</div>
                    )}
                  </div>
                )}
              </div>
            ))}

            {/* Active Input Line */}
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "0.5rem",
              }}
            >
              <span style={{ color: "var(--neon-emerald)", fontWeight: 700 }}>➜</span>
              <span style={{ color: "#94a3b8" }}>~/portfolio</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type a command (e.g. skills, hire, help)..."
                style={{
                  flex: 1,
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  color: "#00f5a0",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.85rem",
                }}
              />
              <button
                type="submit"
                style={{
                  background: "transparent",
                  border: "none",
                  color: "var(--neon-emerald)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }}
                aria-label="Submit command"
              >
                <CornerDownLeft size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
