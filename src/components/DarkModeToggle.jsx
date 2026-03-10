import { useEffect, useState } from 'react'

function getInitialIsDark() {
  if (typeof window === 'undefined') return false
  const stored = window.localStorage.getItem('theme')
  if (stored === 'dark') return true
  if (stored === 'light') return false
  return window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ?? false
}

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(getInitialIsDark)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', isDark)
    window.localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <button
      type="button"
      onClick={() => setIsDark((v) => !v)}
      className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
      aria-label="Tema degistir"
    >
      <span className="dark:hidden">&#9790;</span>
      <span className="hidden dark:inline">&#9728;</span>
    </button>
  )
}

