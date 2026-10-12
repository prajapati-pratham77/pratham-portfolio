"use client";

import React from "react";
import { Sparkles, Zap, Smartphone, Terminal, Radio, Shield, Cpu, Layers } from "lucide-react";

export default function MarqueeTicker() {
  const row1 = [
    { text: "FLUTTER & DART 3.x", icon: <Smartphone size={14} color="#00f5a0" /> },
    { text: "REAL-TIME WEBSOCKETS", icon: <Radio size={14} color="#00d9f5" /> },
    { text: "BLOC & RIVERPOD STATE", icon: <Layers size={14} color="#8b5cf6" /> },
    { text: "AI VOICE AGENTS & NLP", icon: <Sparkles size={14} color="#ff2e93" /> },
    { text: "IN-APP SUBSCRIPTIONS (IAP)", icon: <Zap size={14} color="#ffb800" /> },
    { text: "ARRIVAL & DEPARTURE GEOFENCING", icon: <Cpu size={14} color="#00f5a0" /> },
    { text: "FIREBASE AUTH & FCM", icon: <Shield size={14} color="#00d9f5" /> },
    { text: "HIVE & SQLITE ENCRYPTION", icon: <Terminal size={14} color="#8b5cf6" /> },
  ];

  const row2 = [
    { text: "20+ PRODUCTION APPS SHIPPED", icon: <Sparkles size={14} color="#ff2e93" /> },
    { text: "SATURNCUBE TECHNOLOGY", icon: <Zap size={14} color="#00f5a0" /> },
    { text: "NEXT.JS 15 & REACT 19", icon: <Cpu size={14} color="#00d9f5" /> },
    { text: "60 FPS SMOOTH RENDERING", icon: <Smartphone size={14} color="#8b5cf6" /> },
    { text: "GOROUTER 2.0 NAVIGATION", icon: <Layers size={14} color="#ffb800" /> },
    { text: "PAYMENT GATEWAY INTEGRATIONS", icon: <Shield size={14} color="#00f5a0" /> },
    { text: "COLD BOOT & MEMORY PROFILING", icon: <Radio size={14} color="#00d9f5" /> },
    { text: "CLEAN ARCHITECTURE EXPERT", icon: <Terminal size={14} color="#ff2e93" /> },
  ];

  return (
    <div
      style={{
        position: "relative",
        padding: "1.75rem 0",
        background: "rgba(10, 12, 18, 0.7)",
        borderTop: "1px solid rgba(255, 255, 255, 0.06)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
        overflow: "hidden",
      }}
    >
      {/* Left/Right Vignette gradients */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          width: "120px",
          background: "linear-gradient(90deg, #06070a 0%, transparent 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          width: "120px",
          background: "linear-gradient(270deg, #06070a 0%, transparent 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* Row 1: Left to Right */}
      <div className="marquee-track track-left" style={{ marginBottom: "0.85rem" }}>
        <div className="marquee-content">
          {[...row1, ...row1, ...row1].map((item, idx) => (
            <div key={idx} className="marquee-item">
              {item.icon}
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Right to Left */}
      <div className="marquee-track track-right">
        <div className="marquee-content">
          {[...row2, ...row2, ...row2].map((item, idx) => (
            <div key={idx} className="marquee-item alt">
              {item.icon}
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee-track {
          display: flex;
          overflow: hidden;
          user-select: none;
        }

        .marquee-content {
          display: flex;
          gap: 1.25rem;
          white-space: nowrap;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .track-left .marquee-content {
          animation-name: scrollLeft;
          animation-duration: 35s;
        }

        .track-right .marquee-content {
          animation-name: scrollRight;
          animation-duration: 38s;
        }

        .marquee-track:hover .marquee-content {
          animation-play-state: paused;
        }

        .marquee-item {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.5rem 1.15rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 9999px;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 600;
          color: #e2e8f0;
          letter-spacing: 0.05em;
          transition: all 0.2s ease;
        }

        .marquee-item:hover {
          background: rgba(0, 245, 160, 0.1);
          border-color: rgba(0, 245, 160, 0.4);
          color: #00f5a0;
          transform: translateY(-2px);
        }

        .marquee-item.alt:hover {
          background: rgba(0, 217, 245, 0.1);
          border-color: rgba(0, 217, 245, 0.4);
          color: #00d9f5;
        }

        @keyframes scrollLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.333%);
          }
        }

        @keyframes scrollRight {
          from {
            transform: translateX(-33.333%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
