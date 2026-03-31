export default function About() {
  return (
    <section id="about" className="py-16 px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
        <figure className="shrink-0 text-center">
          <img
            src="/profil.png"
            alt="Muhammed Taha Ozturk'un profil fotografi"
            className="w-40 h-40 rounded-full object-cover shadow-lg mx-auto"
          />
          <figcaption className="mt-3 text-sm text-gray-500 dark:text-gray-400">
            Yazilim Muhendisligi Ogrencisi
          </figcaption>
        </figure>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left">
            Hakkimda
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            Merhaba! Ben Muhammed Taha. Python, Flutter ve Firebase teknolojileri uzerine
            projeler gelistiriyorum. Karmasik problemleri basit ve kullanici dostu arayuzlerle
            cozmeyi seviyorum.
          </p>
          <ul className="flex flex-wrap gap-2 justify-center md:justify-start">
            {['Python', 'Flutter', 'Firebase', 'Tailwind', 'React', 'TypeScript'].map((t) => (
              <li
                key={t}
                className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

