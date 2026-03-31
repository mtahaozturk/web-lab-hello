export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-center py-6 px-4 text-gray-500 dark:text-gray-400 text-sm">
      <p>&copy; 2026 Muhammed Taha Ozturk. Tum Haklari Saklidir.</p>
      <nav aria-label="Sosyal Medya" className="mt-2 flex justify-center gap-4">
        <a
          href="#"
          className="underline underline-offset-4 hover:text-gray-700 dark:hover:text-gray-200"
        >
          LinkedIn
        </a>
        <a
          href="#"
          className="underline underline-offset-4 hover:text-gray-700 dark:hover:text-gray-200"
        >
          GitHub
        </a>
      </nav>
    </footer>
  )
}

