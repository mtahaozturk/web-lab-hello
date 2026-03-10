import { useMemo, useState } from 'react'
import Button from '../components/Button.jsx'
import Card from '../components/Card.jsx'
import Input from '../components/Input.jsx'
import Alert from '../components/Alert.jsx'

export default function Portfolio() {
  const [submitted, setSubmitted] = useState(false)

  const projects = useMemo(
    () => [
      {
        title: 'Projenin İlk Hali',
        image: '/web1.png',
        alt: 'Dokuman yonetim uygulamasi ekran goruntusu',
        description: 'Ilk haline ait gorsel.',
      },
      {
        title: 'Gorsel Eklenmis Hali',
        image: '/web2.png',
        alt: 'Kripto algoritmasi akis semasi',
        description: 'Gorsel eklenmis haline ait bir ekran goruntusu.',
      },
    ],
    [],
  )

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-primary text-white p-2 z-50"
      >
        Ana icerige atla
      </a>

      <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
          <h1 className="text-xl font-bold text-primary dark:text-blue-300">
            Muhammed Taha Ozturk
          </h1>
          <nav aria-label="Ana navigasyon">
            <ul className="flex flex-wrap gap-2">
              <li>
                <a
                  href="#hakkimda"
                  className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Hakkimda
                </a>
              </li>
              <li>
                <a
                  href="#projeler"
                  className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Projeler
                </a>
              </li>
              <li>
                <a
                  href="#iletisim"
                  className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Iletisim
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section id="hakkimda" className="py-16 px-4">
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
                projeler gelistiriyorum. Karmasik problemleri basit ve kullanici dostu
                arayuzlerle cozmeyi seviyorum.
              </p>
              <ul className="flex flex-wrap gap-2">
                <li className="bg-primary text-white px-3 py-1 rounded-full text-sm">Python</li>
                <li className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                  Flutter
                </li>
                <li className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                  Firebase
                </li>
                <li className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                  Tailwind
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projeler" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
              Projelerim
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((p) => (
                <Card
                  key={p.title}
                  variant="elevated"
                  title={p.title}
                  image={p.image}
                  imageAlt={p.alt}
                >
                  <p className="text-sm">{p.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="iletisim" className="py-16 px-4">
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Iletisim
            </h2>

            {submitted && (
              <div className="mb-4">
                <Alert variant="success" title="Basarili">
                  Mesajiniz alindi. Tesekkurler!
                </Alert>
              </div>
            )}

            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
              }}
            >
              <Input id="name" label="Ad Soyad" required placeholder="Adiniz Soyadiniz" />
              <Input
                id="email"
                label="E-posta"
                type="email"
                required
                helpText="Ornek: ornek@mail.com"
                placeholder="ornek@mail.com"
              />

              <div className="space-y-1">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Mesajiniz
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  minLength={10}
                  placeholder="Size nasil yardimci olabilirim?"
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:outline-none dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"
                />
              </div>

              <Button variant="primary" size="lg" type="submit" className="w-full sm:w-auto">
                Gonder
              </Button>
            </form>
          </div>
        </section>

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
      </main>
    </>
  )
}

