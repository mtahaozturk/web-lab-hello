import { useState } from 'react'
import Alert from '../components/Alert.jsx'
import Button from '../components/Button.jsx'
import Card from '../components/Card.jsx'
import Input from '../components/Input.jsx'

export default function UIKit() {
  const [showDismissible, setShowDismissible] = useState(true)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 p-8 space-y-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">UI Kit</h1>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b pb-2 text-gray-900 dark:text-white">
          Merhaba Tailwind
        </h2>
        <div className="min-h-[240px] bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4 rounded-xl">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg max-w-sm w-full p-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Merhaba Tailwind!
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Bu benim ilk Tailwind CSS bilesenim. Her class tek bir is yapar.
            </p>
            <Button variant="primary">Devam Et</Button>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b pb-2 text-gray-900 dark:text-white">
          Buttons
        </h2>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
        <div className="flex flex-wrap items-end gap-3">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary" disabled>
            Disabled
          </Button>
        </div>
      </section>

      <section className="space-y-4 max-w-md">
        <h2 className="text-2xl font-semibold border-b pb-2 text-gray-900 dark:text-white">
          Inputs
        </h2>
        <Input id="ui-name" label="Normal Input" placeholder="Bir sey yazin..." />
        <Input id="ui-err" label="Hatali Input" error="Bu alan zorunludur" />
        <Input
          id="ui-help"
          label="Help Text"
          type="email"
          helpText="E-posta adresinizi girin"
          placeholder="ornek@mail.com"
        />
        <Input id="ui-dis" label="Disabled" disabled value="Duzenlenemez" />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b pb-2 text-gray-900 dark:text-white">
          Cards
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card variant="elevated" title="Elevated Card">
            Golge ile yukseltilmis kart.
          </Card>
          <Card variant="outlined" title="Outlined Card">
            Cerceveli kart.
          </Card>
          <Card
            variant="filled"
            title="Filled Card"
            footer={<Button size="sm">Detay</Button>}
          >
            Dolgulu arka plan.
          </Card>
        </div>
      </section>

      <section className="space-y-4 max-w-xl">
        <h2 className="text-2xl font-semibold border-b pb-2 text-gray-900 dark:text-white">
          Alerts
        </h2>
        <Alert variant="info" title="Bilgi">
          Bilgilendirme mesaji.
        </Alert>
        <Alert variant="success" title="Basarili">
          Islem tamamlandi.
        </Alert>
        <Alert variant="warning" title="Uyari">
          Dikkat edilmesi gereken durum.
        </Alert>
        {showDismissible && (
          <Alert
            variant="error"
            title="Hata"
            dismissible
            onDismiss={() => setShowDismissible(false)}
          >
            Bir hata olustu.
          </Alert>
        )}
        {!showDismissible && (
          <div className="pt-2">
            <Button variant="secondary" size="sm" onClick={() => setShowDismissible(true)}>
              Alert'i geri getir
            </Button>
          </div>
        )}
      </section>
    </div>
  )
}

