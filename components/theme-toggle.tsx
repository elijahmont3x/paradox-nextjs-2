"use client"

import { useTheme } from "@/app/theme-provider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg"
    >
      {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
    </button>
  )
}
