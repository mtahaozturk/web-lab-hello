export default function Skills() {
  const items = [
    { title: 'React', desc: 'Component mimarisi ve state yönetimi' },
    { title: 'TypeScript', desc: 'Tip guvenligi ile daha saglam kod' },
    { title: 'Tailwind CSS', desc: 'Hizli UI gelistirme ve tutarli tasarim' },
    { title: 'REST API', desc: 'Fetch ile veri isleme ve hata durumlari' },
  ]

  return (
    <section id="skills" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
          Yetenekler
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div
              key={it.title}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5"
            >
              <h3 className="font-bold text-gray-900 dark:text-white">{it.title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

