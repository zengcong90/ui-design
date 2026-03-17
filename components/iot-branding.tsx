"use client"

import { Cpu, Wifi, Database, Shield, Activity, Server, Zap } from "lucide-react"
import { useEffect, useState } from "react"

const features = [
  { icon: Wifi,     label: "\u8BBE\u5907\u63A5\u5165", value: "10M+",  color: "oklch(0.55 0.18 252)" },
  { icon: Database, label: "\u6570\u636E\u5B58\u50A8", value: "PB\u7EA7",  color: "oklch(0.78 0.15 210)" },
  { icon: Shield,   label: "\u5B89\u5168\u9632\u62A4", value: "\u7B49\u4FDD\u4E09\u7EA7", color: "oklch(0.72 0.18 40)"  },
]

const capabilities = [
  { icon: Wifi,     label: "\u8BBE\u5907\u8FDE\u63A5" },
  { icon: Database, label: "\u6570\u636E\u5B58\u50A8" },
  { icon: Shield,   label: "\u5B89\u5168\u9632\u62A4" },
  { icon: Activity, label: "\u5B9E\u65F6\u76D1\u63A7" },
  { icon: Server,   label: "\u8FB9\u7F18\u8BA1\u7B97" },
]

// Typing animation hook
function useTypingEffect(text: string, speed: number = 80, delay: number = 0) {
  const [displayText, setDisplayText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout
    let index = 0
    
    const startTyping = () => {
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1))
          index++
        } else {
          clearInterval(interval)
          setIsComplete(true)
        }
      }, speed)
      return () => clearInterval(interval)
    }
    
    timeout = setTimeout(startTyping, delay)
    return () => clearTimeout(timeout)
  }, [text, speed, delay])

  return { displayText, isComplete }
}

export function IoTBranding() {
  const { displayText: headline1, isComplete: h1Complete } = useTypingEffect("\u8FDE\u63A5\u4E07\u7269\uFF0C", 100, 300)
  const { displayText: headline2 } = useTypingEffect("\u9A71\u52A8\u672A\u6765", 100, h1Complete ? 0 : 1200)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="flex flex-col items-start animate-slide-in-left">
      {/* Logo + Brand */}
      <div className="flex items-center gap-4 mb-8">
        <div className="relative">
          {/* Outer rotating ring */}
          <div
            className="absolute -inset-4 rounded-full animate-radar"
            style={{
              background: "conic-gradient(from 0deg, transparent 0deg, oklch(0.55 0.18 252 / 0.2) 60deg, transparent 120deg)",
              animationDuration: "4s",
            }}
          />
          {/* Pulsing glow */}
          <div
            className="absolute -inset-3 rounded-2xl animate-glow-pulse"
            style={{
              background: "radial-gradient(circle, oklch(0.55 0.18 252 / 0.35) 0%, transparent 70%)",
              filter: "blur(12px)",
            }}
          />
          {/* Logo box */}
          <div
            className="relative w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden animate-float"
            style={{
              background: "linear-gradient(135deg, oklch(0.22 0.12 265) 0%, oklch(0.32 0.14 262) 100%)",
              boxShadow: "0 0 0 1px oklch(0.55 0.18 252 / 0.4), 0 8px 32px oklch(0.10 0.04 265 / 0.8), 0 0 20px oklch(0.55 0.18 252 / 0.2)",
            }}
          >
            {/* Scan line */}
            <div
              className="absolute inset-0 animate-vertical-scan"
              style={{
                background: "linear-gradient(to bottom, transparent, oklch(0.78 0.15 210 / 0.3), transparent)",
                height: "30%",
              }}
            />
            <Cpu className="w-7 h-7 relative z-10 animate-holo" style={{ color: "oklch(0.78 0.15 210)" }} />
          </div>
          {/* Orbiting dot */}
          <div
            className="absolute w-2 h-2 rounded-full"
            style={{
              top: "50%",
              left: "50%",
              marginTop: -4,
              marginLeft: -4,
              animation: "orbit 3s linear infinite",
              ["--orbit-r" as string]: "32px",
            }}
          >
            <div
              className="w-full h-full rounded-full"
              style={{ background: "oklch(0.78 0.15 210)", boxShadow: "0 0 8px oklch(0.78 0.15 210)" }}
            />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight text-foreground animate-holo">
              IoT<span style={{ color: "oklch(0.55 0.18 252)" }}>Cloud</span>
            </h1>
            <span
              className="text-[10px] font-mono px-1.5 py-0.5 rounded uppercase tracking-widest animate-glow-pulse"
              style={{
                background: "oklch(0.55 0.18 252 / 0.15)",
                color: "oklch(0.78 0.15 210)",
                border: "1px solid oklch(0.55 0.18 252 / 0.25)",
                boxShadow: "0 0 8px oklch(0.55 0.18 252 / 0.3)",
              }}
            >
              v4.0
            </span>
          </div>
          <p className="text-sm tracking-wider mt-0.5 flex items-center gap-2" style={{ color: "oklch(0.68 0.04 250)" }}>
            {"\u7269\u8054\u7F51\u4E91\u5E73\u53F0"} · INDUSTRIAL EDITION
            <Zap className="w-3 h-3 animate-glow-pulse" style={{ color: "oklch(0.78 0.15 210)" }} />
          </p>
        </div>
      </div>

      {/* Headline with typing effect */}
      <h2 className="text-4xl xl:text-5xl font-bold leading-tight mb-5 text-balance min-h-[120px]">
        <span className="text-foreground">
          {mounted ? headline1 : "\u8FDE\u63A5\u4E07\u7269\uFF0C"}
        </span>
        {(mounted && headline1.length > 0) && (
          <span
            className="inline-block w-0.5 h-10 ml-1 align-middle animate-cursor"
            style={{ background: "oklch(0.78 0.15 210)", display: h1Complete ? "none" : "inline-block" }}
          />
        )}
        <br />
        <span
          className="relative inline-block"
          style={{
            background: "linear-gradient(90deg, oklch(0.55 0.18 252), oklch(0.78 0.15 210))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {mounted ? headline2 : "\u9A71\u52A8\u672A\u6765"}
          {(mounted && h1Complete && headline2.length < 4) && (
            <span
              className="absolute right-0 top-0 w-0.5 h-10 animate-cursor"
              style={{ background: "oklch(0.78 0.15 210)" }}
            />
          )}
        </span>
      </h2>

      <p
        className="text-base leading-relaxed mb-10 max-w-sm animate-fade-in-up"
        style={{ color: "oklch(0.68 0.04 250)", animationDelay: "1.8s" }}
      >
        {"\u4E00\u7AD9\u5F0F\u7269\u8054\u7F51\u89E3\u51B3\u65B9\u6848\uFF0C\u63D0\u4F9B\u8BBE\u5907\u7BA1\u7406\u3001\u5B9E\u65F6\u6570\u636E\u5206\u6790\u3001AI \u51B3\u7B56\u652F\u6301\u7B49\u5168\u94FE\u8DEF\u670D\u52A1\u3002"}
      </p>

      {/* Stats grid with animated counters */}
      <div className="grid grid-cols-3 gap-4 w-full max-w-sm mb-10">
        {features.map((stat, i) => (
          <div
            key={i}
            className="relative rounded-xl p-4 overflow-hidden animate-fade-in-up group hover:scale-105 transition-transform duration-300"
            style={{
              background: "oklch(0.18 0.07 265 / 0.7)",
              border: `1px solid ${stat.color}33`,
              animationDelay: `${2 + i * 0.15}s`,
              boxShadow: `0 0 20px ${stat.color}15`,
            }}
          >
            {/* Hover glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle at center, ${stat.color}20 0%, transparent 70%)`,
              }}
            />
            {/* Energy wave on hover */}
            <div
              className="absolute bottom-0 left-0 right-0 h-px origin-left scale-x-0 group-hover:animate-energy-wave"
              style={{ background: stat.color }}
            />
            <stat.icon
              className="w-4 h-4 mb-2 transition-transform group-hover:scale-110"
              style={{ color: stat.color }}
            />
            <div className="text-xl font-bold font-mono mb-0.5 text-foreground">
              {stat.value}
            </div>
            <div className="text-xs" style={{ color: "oklch(0.68 0.04 250)" }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Capability badges */}
      <div className="flex flex-wrap gap-2 animate-fade-in-up" style={{ animationDelay: "2.5s" }}>
        {capabilities.map((cap, i) => (
          <div
            key={i}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs transition-all duration-300 hover:scale-105 group cursor-default"
            style={{
              background: "oklch(0.22 0.08 265 / 0.8)",
              border: "1px solid oklch(0.55 0.18 252 / 0.2)",
              color: "oklch(0.78 0.15 210)",
            }}
          >
            <cap.icon className="w-3.5 h-3.5 transition-transform group-hover:rotate-12" />
            <span>{cap.label}</span>
          </div>
        ))}
      </div>

      {/* Bottom data line decoration */}
      <div className="w-full max-w-sm mt-10 h-px relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(90deg, transparent, oklch(0.32 0.08 262), transparent)" }}
        />
        <div
          className="absolute h-full w-1/4 animate-data-pulse"
          style={{
            background: "linear-gradient(90deg, transparent, oklch(0.78 0.15 210 / 0.8), transparent)",
          }}
        />
      </div>
    </div>
  )
}
