import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Pratham Prajapati | Flutter Developer & AI Integrator",
  description:
    "Portfolio of Pratham Prajapati — Flutter Developer with 3+ years experience and 20+ shipped cross-platform apps. Specialist in real-time WebSockets, in-app subscriptions, and AI voice agents.",
  keywords: [
    "Pratham Prajapati",
    "Flutter Developer",
    "Dart",
    "Mobile Engineer",
    "WebSockets",
    "AI Voice Agents",
    "Remindly AI",
    "Next.js",
    "Ahmedabad",
    "Saturncube Technology",
  ],
  authors: [{ name: "Pratham Prajapati" }],
  creator: "Pratham Prajapati",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prathamprajapati.dev",
    title: "Pratham Prajapati | Flutter Developer & AI Integrator",
    description:
      "Crafting high-performance cross-platform mobile apps, real-time WebSocket systems, and next-gen AI experiences.",
    siteName: "Pratham Prajapati Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pratham Prajapati | Flutter Developer & AI Integrator",
    description:
      "3+ years experience, 20+ shipped mobile apps, real-time WebSockets, in-app subscriptions, and AI voice agents.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="cyber-backdrop" aria-hidden="true">
          <div className="cyber-orb orb-1" />
          <div className="cyber-orb orb-2" />
          <div className="cyber-orb orb-3" />
          <div className="cyber-grid-overlay" />
          <div className="cyber-noise" />
        </div>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
