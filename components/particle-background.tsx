"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  pulse: number
  pulseSpeed: number
  type: "normal" | "bright" | "fast"
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    let time = 0

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      particles = []
      const count = Math.floor((canvas.width * canvas.height) / 12000)
      for (let i = 0; i < count; i++) {
        const type = Math.random() < 0.1 ? "bright" : Math.random() < 0.15 ? "fast" : "normal"
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: type === "fast" ? (Math.random() - 0.5) * 1.2 : (Math.random() - 0.5) * 0.5,
          vy: type === "fast" ? (Math.random() - 0.5) * 1.2 : (Math.random() - 0.5) * 0.5,
          size: type === "bright" ? Math.random() * 2 + 1.5 : Math.random() * 1.5 + 0.5,
          opacity: type === "bright" ? 0.7 : Math.random() * 0.5 + 0.15,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.03,
          type,
        })
      }
    }

    const draw = () => {
      time += 0.016
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connection lines first (behind particles)
      particles.forEach((p, i) => {
        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j]
          const dx = p.x - other.x
          const dy = p.y - other.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const maxDist = p.type === "bright" || other.type === "bright" ? 180 : 120
          if (dist < maxDist) {
            const alpha = 0.18 * (1 - dist / maxDist)
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(other.x, other.y)
            const gradient = ctx.createLinearGradient(p.x, p.y, other.x, other.y)
            gradient.addColorStop(0, `rgba(100, 160, 255, ${alpha})`)
            gradient.addColorStop(0.5, `rgba(140, 200, 255, ${alpha * 1.3})`)
            gradient.addColorStop(1, `rgba(100, 160, 255, ${alpha})`)
            ctx.strokeStyle = gradient
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      })

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        p.pulse += p.pulseSpeed

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        const pulseMultiplier = p.type === "bright" ? 0.5 : 0.35
        const opacity = p.opacity * (0.6 + pulseMultiplier * Math.sin(p.pulse))

        // Outer glow
        const glowSize = p.type === "bright" ? p.size * 6 : p.size * 4
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowSize)
        if (p.type === "bright") {
          gradient.addColorStop(0, `rgba(160, 210, 255, ${opacity})`)
          gradient.addColorStop(0.4, `rgba(100, 180, 255, ${opacity * 0.5})`)
          gradient.addColorStop(1, `rgba(80, 140, 255, 0)`)
        } else {
          gradient.addColorStop(0, `rgba(138, 180, 248, ${opacity})`)
          gradient.addColorStop(1, `rgba(138, 180, 248, 0)`)
        }
        ctx.beginPath()
        ctx.arc(p.x, p.y, glowSize, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Core
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.type === "bright"
          ? `rgba(220, 240, 255, ${opacity * 1.8})`
          : `rgba(180, 210, 255, ${opacity * 1.5})`
        ctx.fill()

        // Bright particles get extra ring
        if (p.type === "bright") {
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(100, 180, 255, ${opacity * 0.3})`
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      })

      // Draw occasional "shooting" data streams
      const streamCount = 3
      for (let i = 0; i < streamCount; i++) {
        const streamTime = (time * 0.3 + i * 2) % 6
        if (streamTime < 2) {
          const progress = streamTime / 2
          const startX = canvas.width * (0.1 + i * 0.3)
          const startY = canvas.height * 0.2
          const endX = canvas.width * (0.3 + i * 0.25)
          const endY = canvas.height * 0.8
          
          const x = startX + (endX - startX) * progress
          const y = startY + (endY - startY) * progress
          
          const streamGradient = ctx.createRadialGradient(x, y, 0, x, y, 30)
          streamGradient.addColorStop(0, `rgba(100, 200, 255, ${0.6 * (1 - progress)})`)
          streamGradient.addColorStop(1, `rgba(100, 200, 255, 0)`)
          ctx.beginPath()
          ctx.arc(x, y, 30, 0, Math.PI * 2)
          ctx.fillStyle = streamGradient
          ctx.fill()

          // Trail
          ctx.beginPath()
          ctx.moveTo(x, y)
          ctx.lineTo(x - (endX - startX) * 0.1, y - (endY - startY) * 0.1)
          ctx.strokeStyle = `rgba(100, 200, 255, ${0.4 * (1 - progress)})`
          ctx.lineWidth = 2
          ctx.stroke()
        }
      }

      animationFrameId = requestAnimationFrame(draw)
    }

    const handleResize = () => { resizeCanvas(); createParticles() }

    resizeCanvas()
    createParticles()
    draw()
    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}
