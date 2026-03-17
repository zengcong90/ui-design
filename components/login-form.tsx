"use client"

import { useState } from "react"
import { Eye, EyeOff, User, Lock, ArrowRight, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [focused, setFocused] = useState<"username" | "password" | null>(null)
  const [formData, setFormData] = useState({ username: "", password: "", remember: false })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise((r) => setTimeout(r, 2000))
    setIsLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Username */}
      <div className="space-y-1.5">
        <label className="text-xs font-medium uppercase tracking-widest" style={{ color: "oklch(0.60 0.04 250)" }}>
          {"\u7528\u6237\u540D / \u8D26\u53F7"}
        </label>
        <div
          className="relative rounded-xl transition-all duration-300"
          style={{
            boxShadow: focused === "username"
              ? "0 0 0 1.5px oklch(0.58 0.20 252 / 0.8), 0 0 20px oklch(0.58 0.20 252 / 0.15)"
              : "0 0 0 1px oklch(0.36 0.09 262)",
          }}
        >
          <div
            className="absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors duration-200"
            style={{ color: focused === "username" ? "oklch(0.58 0.20 252)" : "oklch(0.68 0.06 250)" }}
          >
            <User className="w-4.5 h-4.5" style={{ width: 18, height: 18 }} />
          </div>
          <input
            type="text"
            placeholder={"\u8BF7\u8F93\u5165\u7528\u6237\u540D\u6216\u90AE\u7BB1"}
            value={formData.username}
            onFocus={() => setFocused("username")}
            onBlur={() => setFocused(null)}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            className="w-full h-12 pl-10 pr-4 rounded-xl text-sm outline-none text-foreground font-sans"
            style={{
              background: "oklch(0.22 0.07 265)",
              color: "oklch(0.97 0.005 240)",
            }}
          />
        </div>
      </div>

      {/* Password */}
      <div className="space-y-1.5">
        <label className="text-xs font-medium uppercase tracking-widest" style={{ color: "oklch(0.60 0.04 250)" }}>
          {"\u5BC6\u7801"}
        </label>
        <div
          className="relative rounded-xl transition-all duration-300"
          style={{
            boxShadow: focused === "password"
              ? "0 0 0 1.5px oklch(0.58 0.20 252 / 0.8), 0 0 20px oklch(0.58 0.20 252 / 0.15)"
              : "0 0 0 1px oklch(0.36 0.09 262)",
          }}
        >
          <div
            className="absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors duration-200"
            style={{ color: focused === "password" ? "oklch(0.58 0.20 252)" : "oklch(0.68 0.06 250)" }}
          >
            <Lock style={{ width: 18, height: 18 }} />
          </div>
          <input
            type={showPassword ? "text" : "password"}
            placeholder={"\u8BF7\u8F93\u5165\u5BC6\u7801"}
            value={formData.password}
            onFocus={() => setFocused("password")}
            onBlur={() => setFocused(null)}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full h-12 pl-10 pr-12 rounded-xl text-sm outline-none font-sans"
            style={{
              background: "oklch(0.22 0.07 265)",
              color: "oklch(0.97 0.005 240)",
            }}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 transition-colors duration-200 hover:opacity-100"
            style={{ color: "oklch(0.68 0.06 250)" }}
          >
            {showPassword ? <EyeOff style={{ width: 18, height: 18 }} /> : <Eye style={{ width: 18, height: 18 }} />}
          </button>
        </div>
      </div>

      {/* Remember & Forgot */}
      <div className="flex items-center justify-between pt-1">
        <label className="flex items-center gap-2 cursor-pointer group">
          <div
            className={cn(
              "w-4 h-4 rounded flex items-center justify-center transition-all duration-200",
              formData.remember ? "border-0" : "border"
            )}
            style={{
              background: formData.remember ? "oklch(0.58 0.20 252)" : "transparent",
              borderColor: "oklch(0.36 0.09 262)",
              boxShadow: formData.remember ? "0 0 8px oklch(0.58 0.20 252 / 0.5)" : "none",
            }}
            onClick={() => setFormData({ ...formData, remember: !formData.remember })}
          >
            {formData.remember && (
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
          <span className="text-xs transition-colors" style={{ color: "oklch(0.72 0.04 250)" }}>{"\u8BB0\u4F4F\u5BC6\u7801"}</span>
        </label>
        <a
          href="#"
          className="text-xs transition-colors hover:underline"
          style={{ color: "oklch(0.78 0.15 210)" }}
        >
          {"\u5FD8\u8BB0\u5BC6\u7801\uFF1F"}
        </a>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isLoading}
        className={cn(
          "relative w-full h-12 rounded-xl text-sm font-semibold overflow-hidden",
          "transition-all duration-300 group",
          "disabled:opacity-60 disabled:cursor-not-allowed",
          "hover:scale-[1.01] active:scale-[0.99]"
        )}
        style={{
          background: "linear-gradient(135deg, oklch(0.40 0.18 255) 0%, oklch(0.55 0.18 252) 50%, oklch(0.45 0.16 248) 100%)",
          boxShadow: isLoading ? "none" : "0 4px 24px oklch(0.55 0.18 252 / 0.4), 0 1px 0 oklch(0.78 0.15 210 / 0.2) inset",
          color: "oklch(0.98 0 0)",
        }}
      >
        {/* Shimmer */}
        <div
          className="absolute inset-0 -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer"
          style={{
            background: "linear-gradient(90deg, transparent 0%, oklch(0.98 0 0 / 0.12) 50%, transparent 100%)",
          }}
        />
        <span className="relative z-10 flex items-center justify-center gap-2">
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>{"\u6B63\u5728\u9A8C\u8BC1\u8EAB\u4EFD..."}</span>
            </>
          ) : (
            <>
              <span>{"\u5B89\u5168\u767B\u5F55"}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </>
          )}
        </span>
      </button>

      {/* Divider */}
      <div className="relative flex items-center gap-3 py-1">
        <div className="flex-1 h-px" style={{ background: "oklch(0.32 0.08 262)" }} />
        <span className="text-xs uppercase tracking-widest" style={{ color: "oklch(0.55 0.04 250)" }}>
          {"\u5176\u4ED6\u65B9\u5F0F"}
        </span>
        <div className="flex-1 h-px" style={{ background: "oklch(0.32 0.08 262)" }} />
      </div>

      {/* Social buttons */}
      <div className="grid grid-cols-3 gap-2.5">
        {["\u5FAE\u4FE1", "\u9489\u9489", "\u4F01\u5FAE"].map((label) => (
          <button
            key={label}
            type="button"
            className="h-10 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: "oklch(0.22 0.07 265)",
              border: "1px solid oklch(0.36 0.09 262)",
              color: "oklch(0.82 0.05 250)",
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Register */}
      <p className="text-center text-xs pt-1" style={{ color: "oklch(0.55 0.04 250)" }}>
        {"\u8FD8\u6CA1\u6709\u8D26\u53F7\uFF1F"}
        <a
          href="#"
          className="ml-1 font-medium hover:underline transition-colors"
          style={{ color: "oklch(0.78 0.15 210)" }}
        >
          {"\u7ACB\u5373\u6CE8\u518C"}
        </a>
      </p>
    </form>
  )
}
