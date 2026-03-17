"use client"

import { useEffect, useState } from "react"

interface Node {
  id: number
  x: number
  y: number
  delay: number
  duration: number
  size: number
}

interface DataStream {
  id: number
  startX: number
  startY: number
  endX: number
  endY: number
  delay: number
}

export function NetworkNodes() {
  const [nodes, setNodes] = useState<Node[]>([])
  const [streams, setStreams] = useState<DataStream[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const generatedNodes: Node[] = Array.from({ length: 24 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 1.5 + Math.random() * 2,
      size: 4 + Math.random() * 4,
    }))
    
    const generatedStreams: DataStream[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      startX: Math.random() * 40,
      startY: Math.random() * 100,
      endX: 60 + Math.random() * 40,
      endY: Math.random() * 100,
      delay: i * 0.8,
    }))
    
    setNodes(generatedNodes)
    setStreams(generatedStreams)
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Ambient orbs with stronger glow */}
      <div
        className="absolute rounded-full animate-glow-pulse"
        style={{
          width: 700,
          height: 700,
          left: "-12%",
          top: "-18%",
          background:
            "radial-gradient(circle, oklch(0.30 0.15 265 / 0.4) 0%, oklch(0.22 0.12 265 / 0.2) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute rounded-full animate-glow-pulse"
        style={{
          width: 600,
          height: 600,
          right: "-10%",
          bottom: "-15%",
          background:
            "radial-gradient(circle, oklch(0.40 0.18 262 / 0.35) 0%, oklch(0.32 0.14 262 / 0.15) 40%, transparent 70%)",
          filter: "blur(80px)",
          animationDelay: "1s",
        }}
      />
      <div
        className="absolute rounded-full animate-glow-pulse"
        style={{
          width: 400,
          height: 400,
          right: "20%",
          top: "10%",
          background:
            "radial-gradient(circle, oklch(0.78 0.15 210 / 0.15) 0%, transparent 70%)",
          filter: "blur(50px)",
          animationDelay: "2s",
        }}
      />

      {/* Radar sweep effect */}
      <div
        className="absolute animate-radar"
        style={{
          width: 500,
          height: 500,
          left: "8%",
          top: "15%",
          background: "conic-gradient(from 0deg, transparent 0deg, oklch(0.55 0.18 252 / 0.12) 30deg, transparent 60deg)",
          borderRadius: "50%",
          transformOrigin: "center center",
        }}
      />

      {/* Hexagonal grid pattern */}
      <svg
        className="absolute inset-0 w-full h-full animate-hex-pulse"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="hexagons" width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)">
            <path
              d="M28 0 L56 16 L56 48 L28 64 L0 48 L0 16 Z M28 68 L56 84 L56 100 M28 68 L0 84 L0 100"
              fill="none"
              stroke="oklch(0.55 0.18 252)"
              strokeWidth="0.4"
              strokeOpacity="0.06"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagons)" />
      </svg>

      {/* Animated data streams */}
      {streams.map((stream) => (
        <div
          key={stream.id}
          className="absolute h-px"
          style={{
            left: `${stream.startX}%`,
            top: `${stream.startY}%`,
            width: `${Math.abs(stream.endX - stream.startX)}%`,
            transform: `rotate(${Math.atan2(stream.endY - stream.startY, stream.endX - stream.startX) * 180 / Math.PI}deg)`,
            transformOrigin: "left center",
          }}
        >
          <div
            className="absolute inset-0 animate-data-pulse"
            style={{
              background: "linear-gradient(90deg, transparent, oklch(0.78 0.15 210 / 0.6), oklch(0.55 0.18 252 / 0.4), transparent)",
              animationDelay: `${stream.delay}s`,
              animationDuration: "2.5s",
            }}
          />
        </div>
      ))}

      {/* Pulsing network nodes */}
      {nodes.map((node) => (
        <div
          key={node.id}
          className="absolute"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
          }}
        >
          <div className="relative" style={{ width: node.size, height: node.size }}>
            {/* Expanding rings */}
            <div
              className="absolute rounded-full animate-ring-expand"
              style={{
                inset: -node.size,
                border: "1px solid oklch(0.55 0.18 252 / 0.4)",
                animationDelay: `${node.delay}s`,
                animationDuration: `${node.duration * 1.5}s`,
              }}
            />
            <div
              className="absolute rounded-full animate-ring-expand"
              style={{
                inset: -node.size * 0.5,
                border: "1px solid oklch(0.78 0.15 210 / 0.3)",
                animationDelay: `${node.delay + 0.5}s`,
                animationDuration: `${node.duration * 1.5}s`,
              }}
            />
            {/* Ripple */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: "oklch(0.55 0.18 252 / 0.5)",
                animation: `ping ${node.duration}s cubic-bezier(0,0,0.2,1) infinite`,
                animationDelay: `${node.delay}s`,
              }}
            />
            {/* Core */}
            <div
              className="absolute inset-0.5 rounded-full animate-holo"
              style={{
                background: "oklch(0.78 0.15 210)",
                boxShadow: "0 0 12px oklch(0.78 0.15 210 / 0.9), 0 0 24px oklch(0.55 0.18 252 / 0.4)",
                animationDelay: `${node.delay * 0.5}s`,
              }}
            />
          </div>
        </div>
      ))}

      {/* Concentric ring decorations with glow */}
      <div className="absolute" style={{ left: "5%", top: "12%", width: 500, height: 500 }}>
        <div
          className="absolute inset-0 rounded-full"
          style={{
            border: "1px solid oklch(0.55 0.18 252 / 0.12)",
            boxShadow: "0 0 20px oklch(0.55 0.18 252 / 0.05)",
            animation: "spin 24s linear infinite",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            inset: 80,
            border: "1px solid oklch(0.55 0.18 252 / 0.18)",
            boxShadow: "0 0 15px oklch(0.55 0.18 252 / 0.08)",
            animation: "spin 16s linear infinite reverse",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            inset: 160,
            border: "1px dashed oklch(0.78 0.15 210 / 0.15)",
            animation: "spin 20s linear infinite",
          }}
        />
        {/* Orbiting dot */}
        <div
          className="absolute"
          style={{
            width: 8,
            height: 8,
            left: "50%",
            top: "50%",
            marginLeft: -4,
            marginTop: -4,
            animation: "orbit 8s linear infinite",
            ["--orbit-r" as string]: "160px",
          }}
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              background: "oklch(0.78 0.15 210)",
              boxShadow: "0 0 10px oklch(0.78 0.15 210 / 0.8)",
            }}
          />
        </div>
      </div>

      {/* Right side rings */}
      <div className="absolute" style={{ right: "-5%", bottom: "5%", width: 550, height: 550 }}>
        <div
          className="absolute inset-0 rounded-full"
          style={{
            border: "1px solid oklch(0.78 0.15 210 / 0.08)",
            animation: "spin 30s linear infinite",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            inset: 100,
            border: "1px solid oklch(0.55 0.18 252 / 0.1)",
            animation: "spin 22s linear infinite reverse",
          }}
        />
      </div>

      {/* Vertical scan line */}
      <div
        className="absolute w-px animate-vertical-scan"
        style={{
          left: "30%",
          height: "20%",
          background: "linear-gradient(to bottom, transparent, oklch(0.78 0.15 210 / 0.4), transparent)",
          animationDuration: "6s",
        }}
      />
      <div
        className="absolute w-px animate-vertical-scan"
        style={{
          left: "70%",
          height: "15%",
          background: "linear-gradient(to bottom, transparent, oklch(0.55 0.18 252 / 0.3), transparent)",
          animationDuration: "8s",
          animationDelay: "2s",
        }}
      />

      {/* Corner brackets - sci-fi UI element */}
      <div className="absolute top-8 left-8 w-16 h-16">
        <div className="absolute top-0 left-0 w-8 h-px" style={{ background: "oklch(0.55 0.18 252 / 0.4)" }} />
        <div className="absolute top-0 left-0 w-px h-8" style={{ background: "oklch(0.55 0.18 252 / 0.4)" }} />
      </div>
      <div className="absolute top-8 right-8 w-16 h-16">
        <div className="absolute top-0 right-0 w-8 h-px" style={{ background: "oklch(0.55 0.18 252 / 0.4)" }} />
        <div className="absolute top-0 right-0 w-px h-8" style={{ background: "oklch(0.55 0.18 252 / 0.4)" }} />
      </div>
      <div className="absolute bottom-8 left-8 w-16 h-16">
        <div className="absolute bottom-0 left-0 w-8 h-px" style={{ background: "oklch(0.78 0.15 210 / 0.4)" }} />
        <div className="absolute bottom-0 left-0 w-px h-8" style={{ background: "oklch(0.78 0.15 210 / 0.4)" }} />
      </div>
      <div className="absolute bottom-8 right-8 w-16 h-16">
        <div className="absolute bottom-0 right-0 w-8 h-px" style={{ background: "oklch(0.78 0.15 210 / 0.4)" }} />
        <div className="absolute bottom-0 right-0 w-px h-8" style={{ background: "oklch(0.78 0.15 210 / 0.4)" }} />
      </div>
    </div>
  )
}
