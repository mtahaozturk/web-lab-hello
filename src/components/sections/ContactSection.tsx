import ContactForm from '../forms/ContactForm'

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4">
      <div className="max-w-lg mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Iletisim
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          Mesajini gonder, ben de en kisa zamanda geri donus yapayim.
        </p>
        <ContactForm />
      </div>
    </section>
  )
}

