import { ParticleBackground } from "@/components/particle-background"
import { NetworkNodes } from "@/components/network-nodes"
import { LoginForm } from "@/components/login-form"
import { IoTBranding } from "@/components/iot-branding"
import { ShieldCheck, Radio } from "lucide-react"

export default function LoginPage() {
  return (
    <main
      className="min-h-screen flex items-stretch relative overflow-hidden"
      style={{ background: "oklch(0.10 0.04 265)" }}
    >
      {/* Animated layers */}
      <ParticleBackground />
      <NetworkNodes />

      {/* Content wrapper */}
      <div className="relative z-10 flex w-full min-h-screen">
        {/* Left panel — branding */}
        <div className="hidden lg:flex flex-1 items-center justify-center px-16 xl:px-24 relative">
          {/* Left-side vertical divider with animated glow */}
          <div
            className="absolute right-0 top-[10%] bottom-[10%] w-px"
            style={{
              background: "linear-gradient(to bottom, transparent, oklch(0.55 0.18 252 / 0.35), oklch(0.78 0.15 210 / 0.2), transparent)",
            }}
          >
            {/* Traveling light dot */}
            <div
              className="absolute w-1 h-8 rounded-full animate-vertical-scan"
              style={{
                left: -2,
                background: "linear-gradient(to bottom, transparent, oklch(0.78 0.15 210), transparent)",
                boxShadow: "0 0 12px oklch(0.78 0.15 210 / 0.8)",
                animationDuration: "5s",
              }}
            />
          </div>
          <IoTBranding />
        </div>

        {/* Right panel — login card */}
        <div className="flex flex-1 lg:max-w-[560px] xl:max-w-[600px] items-center justify-center px-6 py-12 lg:px-12 xl:px-16">
          <div className="w-full max-w-md animate-fade-in-up" style={{ animationDelay: "0.15s" }}>

            {/* Mobile logo */}
            <div className="lg:hidden mb-8">
              <IoTBranding />
            </div>

            {/* Card */}
            <div
              className="relative rounded-2xl p-8 xl:p-10 group"
              style={{
                background: "linear-gradient(160deg, oklch(0.22 0.08 265 / 0.92) 0%, oklch(0.18 0.06 265 / 0.96) 100%)",
                backdropFilter: "blur(32px) saturate(1.5)",
                WebkitBackdropFilter: "blur(32px) saturate(1.5)",
                border: "1px solid oklch(0.58 0.20 252 / 0.18)",
                boxShadow:
                  "0 0 0 1px oklch(0.58 0.20 252 / 0.1), 0 24px 64px oklch(0.07 0.04 265 / 0.7), 0 8px 24px oklch(0.07 0.04 265 / 0.5), inset 0 1px 0 oklch(0.96 0 0 / 0.08), 0 0 80px oklch(0.55 0.18 252 / 0.08)",
              }}
            >
              {/* Animated corner brackets */}
              <div className="absolute top-3 left-3 w-4 h-4">
                <div className="absolute top-0 left-0 w-full h-px" style={{ background: "oklch(0.55 0.18 252 / 0.5)" }} />
                <div className="absolute top-0 left-0 w-px h-full" style={{ background: "oklch(0.55 0.18 252 / 0.5)" }} />
              </div>
              <div className="absolute top-3 right-3 w-4 h-4">
                <div className="absolute top-0 right-0 w-full h-px" style={{ background: "oklch(0.55 0.18 252 / 0.5)" }} />
                <div className="absolute top-0 right-0 w-px h-full" style={{ background: "oklch(0.55 0.18 252 / 0.5)" }} />
              </div>
              <div className="absolute bottom-3 left-3 w-4 h-4">
                <div className="absolute bottom-0 left-0 w-full h-px" style={{ background: "oklch(0.78 0.15 210 / 0.5)" }} />
                <div className="absolute bottom-0 left-0 w-px h-full" style={{ background: "oklch(0.78 0.15 210 / 0.5)" }} />
              </div>
              <div className="absolute bottom-3 right-3 w-4 h-4">
                <div className="absolute bottom-0 right-0 w-full h-px" style={{ background: "oklch(0.78 0.15 210 / 0.5)" }} />
                <div className="absolute bottom-0 right-0 w-px h-full" style={{ background: "oklch(0.78 0.15 210 / 0.5)" }} />
              </div>

              {/* Top accent line with shimmer */}
              <div className="absolute top-0 left-8 right-8 h-px rounded-full overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(90deg, transparent, oklch(0.55 0.18 252 / 0.6), oklch(0.78 0.15 210 / 0.4), transparent)",
                  }}
                />
                <div
                  className="absolute inset-0 animate-shimmer"
                  style={{
                    background: "linear-gradient(90deg, transparent 0%, oklch(0.98 0 0 / 0.3) 50%, transparent 100%)",
                  }}
                />
              </div>

              {/* Card header */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-bold tracking-tight text-foreground animate-holo">
                    {"\u6B22\u8FCE\u56DE\u6765"}
                  </h3>
                  <span
                    className="text-[10px] px-1.5 py-0.5 rounded font-mono flex items-center gap-1"
                    style={{
                      background: "oklch(0.55 0.18 252 / 0.15)",
                      border: "1px solid oklch(0.55 0.18 252 / 0.25)",
                      color: "oklch(0.78 0.15 210)",
                      boxShadow: "0 0 10px oklch(0.55 0.18 252 / 0.2)",
                    }}
                  >
                    <Radio className="w-2.5 h-2.5 animate-glow-pulse" />
                    SECURE
                  </span>
                </div>
                <p className="text-sm" style={{ color: "oklch(0.68 0.04 250)" }}>
                  {"\u767B\u5F55\u60A8\u7684 IoTCloud \u7BA1\u7406\u63A7\u5236\u53F0"}
                </p>
              </div>

              <LoginForm />

              {/* Bottom security note */}
              <div
                className="relative flex items-center gap-2 mt-6 px-3 py-2.5 rounded-lg overflow-hidden"
                style={{
                  background: "oklch(0.55 0.18 252 / 0.08)",
                  border: "1px solid oklch(0.55 0.18 252 / 0.12)",
                }}
              >
                {/* Scan line effect */}
                <div
                  className="absolute inset-0 animate-vertical-scan opacity-30"
                  style={{
                    background: "linear-gradient(to bottom, transparent, oklch(0.78 0.15 210 / 0.2), transparent)",
                    height: "50%",
                    animationDuration: "3s",
                  }}
                />
                <ShieldCheck
                  className="animate-glow-pulse"
                  style={{ width: 14, height: 14, color: "oklch(0.78 0.15 210)", flexShrink: 0 }}
                />
                <span className="text-[11px]" style={{ color: "oklch(0.68 0.04 250)" }}>
                  {"\u91C7\u7528 TLS 1.3 \u52A0\u5BC6\u4F20\u8F93 \u00B7 \u7B26\u5408 ISO 27001 \u5B89\u5168\u6807\u51C6"}
                </span>
              </div>
            </div>

            {/* Footer links */}
            <p className="text-center text-[11px] mt-5" style={{ color: "oklch(0.50 0.04 250)" }}>
              {"\u767B\u5F55\u5373\u8868\u793A\u60A8\u540C\u610F"}
              <a href="#" className="mx-1 hover:underline transition-colors" style={{ color: "oklch(0.65 0.08 250)" }}>{"\u670D\u52A1\u6761\u6B3E"}</a>
              {"\u548C"}
              <a href="#" className="ml-1 hover:underline transition-colors" style={{ color: "oklch(0.65 0.08 250)" }}>{"\u9690\u79C1\u653F\u7B56"}</a>
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced data flow SVG */}
      <DataFlowLines />

      {/* Status indicator */}
      <div
        className="fixed bottom-6 left-6 flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-mono z-20"
        style={{
          background: "oklch(0.15 0.06 265 / 0.9)",
          border: "1px solid oklch(0.55 0.18 252 / 0.2)",
          color: "oklch(0.78 0.15 210)",
          backdropFilter: "blur(8px)",
        }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full animate-glow-pulse"
          style={{ background: "oklch(0.72 0.18 160)", boxShadow: "0 0 6px oklch(0.72 0.18 160)" }}
        />
        SYSTEM ONLINE
      </div>
    </main>
  )
}

function DataFlowLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity: 0.22 }}
    >
      <defs>
        <linearGradient id="flow1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="oklch(0.55 0.18 252)" stopOpacity="0" />
          <stop offset="30%" stopColor="oklch(0.55 0.18 252)" stopOpacity="0.8" />
          <stop offset="60%" stopColor="oklch(0.78 0.15 210)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="oklch(0.78 0.15 210)" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="flow2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="oklch(0.78 0.15 210)" stopOpacity="0" />
          <stop offset="50%" stopColor="oklch(0.55 0.18 252)" stopOpacity="0.7" />
          <stop offset="100%" stopColor="oklch(0.55 0.18 252)" stopOpacity="0" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <path
        d="M-100,150 C200,80 500,220 900,140 T1600,180"
        fill="none"
        stroke="url(#flow1)"
        strokeWidth="1.5"
        filter="url(#glow)"
        className="animate-dash"
      />
      <path
        d="M-100,350 C300,270 600,400 1000,320 T1600,360"
        fill="none"
        stroke="url(#flow2)"
        strokeWidth="1.5"
        filter="url(#glow)"
        className="animate-dash"
        style={{ animationDelay: "1s" }}
      />
      <path
        d="M-100,520 C250,440 550,580 850,500 T1600,540"
        fill="none"
        stroke="url(#flow1)"
        strokeWidth="1"
        filter="url(#glow)"
        className="animate-dash"
        style={{ animationDelay: "2s" }}
      />
      <path
        d="M-100,680 C350,600 650,740 950,660 T1600,700"
        fill="none"
        stroke="url(#flow2)"
        strokeWidth="1"
        filter="url(#glow)"
        className="animate-dash"
        style={{ animationDelay: "1.5s" }}
      />
      <path
        d="M-100,820 C400,740 700,860 1000,780 T1600,820"
        fill="none"
        stroke="url(#flow1)"
        strokeWidth="0.8"
        filter="url(#glow)"
        className="animate-dash"
        style={{ animationDelay: "2.5s" }}
      />
    </svg>
  )
}
