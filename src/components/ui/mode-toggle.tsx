"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

export default function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = theme === "dark"

  return (
    <button
      role="switch"
      aria-checked={isDark}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`
        relative w-14 h-7 flex items-center rounded-full transition-all cursor-pointer
        ${isDark ? "bg-emerald-600" : "bg-gray-300"}
      `}
    >
      {/* Icon inside the knob */}
      <span
        className={`
          absolute flex items-center justify-center w-6 h-6 rounded-full bg-white shadow-md transition-all
          ${isDark ? "translate-x-7" : "translate-x-1"}
        `}
      >
        {isDark ? (
          <Moon className="w-4 h-4 text-emerald-700" />
        ) : (
          <Sun className="w-4 h-4 text-yellow-500" />
        )}
      </span>
    </button>
  )
}
