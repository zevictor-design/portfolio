import { createContext, useContext, useEffect, useState } from "react"
import type { ReactNode } from "react"

export type Theme = "dark" | "light"

type ThemeContextValue = {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

function resolveSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Only an explicit click on the theme toggle "sticks": it is what sets
  // portfolio-theme-explicit. Without that flag, any older/unrelated
  // portfolio-theme value is ignored and the system preference wins, live,
  // on every visit and on every OS-level theme change.
  const hasExplicitChoice = () => localStorage.getItem("portfolio-theme-explicit") === "1"

  const [theme, setTheme] = useState<Theme>(() => {
    if (hasExplicitChoice()) {
      const saved = localStorage.getItem("portfolio-theme")
      if (saved === "light" || saved === "dark") return saved
    }
    return resolveSystemTheme()
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: light)")
    const onChange = () => {
      if (!hasExplicitChoice()) setTheme(resolveSystemTheme())
    }
    media.addEventListener("change", onChange)
    return () => media.removeEventListener("change", onChange)
  }, [])

  const value: ThemeContextValue = {
    theme,
    toggleTheme: () =>
      setTheme((current) => {
        const next = current === "dark" ? "light" : "dark"
        localStorage.setItem("portfolio-theme", next)
        localStorage.setItem("portfolio-theme-explicit", "1")
        return next
      }),
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error("useTheme must be used within a ThemeProvider")
  return context
}
