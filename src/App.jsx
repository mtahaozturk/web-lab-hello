import { useState } from 'react'
import DarkModeToggle from './components/DarkModeToggle.jsx'
import Portfolio from './pages/Portfolio.jsx'
import UIKit from './pages/UIKit.jsx'
import Lab5Projects from './pages/Lab5Projects.tsx'
import Lab6Checkpoint from './pages/Lab6Checkpoint.tsx'

export default function App() {
  const [page, setPage] = useState('portfolio')

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <DarkModeToggle />

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setPage('portfolio')}
            className={`px-3 py-1 rounded-md text-sm transition-colors ${
              page === 'portfolio'
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            Portfoy
          </button>
          <button
            type="button"
            onClick={() => setPage('uikit')}
            className={`px-3 py-1 rounded-md text-sm transition-colors ${
              page === 'uikit'
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            UI Kit
          </button>
          <button
            type="button"
            onClick={() => setPage('lab5')}
            className={`px-3 py-1 rounded-md text-sm transition-colors ${
              page === 'lab5'
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            LAB-5
          </button>
          <button
            type="button"
            onClick={() => setPage('lab6')}
            className={`px-3 py-1 rounded-md text-sm transition-colors ${
              page === 'lab6'
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            LAB-6
          </button>
        </div>
      </div>

      {page === 'portfolio' ? (
        <Portfolio />
      ) : page === 'uikit' ? (
        <UIKit />
      ) : page === 'lab6' ? (
        <Lab6Checkpoint />
      ) : (
        <Lab5Projects />
      )}
    </div>
  )
}