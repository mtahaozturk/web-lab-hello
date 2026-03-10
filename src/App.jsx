import { useState } from 'react'
import DarkModeToggle from './components/DarkModeToggle.jsx'
import Portfolio from './pages/Portfolio.jsx'
import UIKit from './pages/UIKit.jsx'

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
        </div>
      </div>

      {page === 'portfolio' ? <Portfolio /> : <UIKit />}
    </div>
  )
}