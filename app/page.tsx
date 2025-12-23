import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-black text-white">
      {/* Hero с изображением Optimus */}
      <div className="relative w-full h-screen">
        <Image
          src="/optimus-hero.jpg"
          alt="Optimus выходит из Cybertruck на даче"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-8">
          <h1 className="text-5xl md:text-8xl font-bold mb-6 text-red-500 drop-shadow-2xl">
            TeslaBullFeed
          </h1>
          <p className="text-2xl md:text-4xl text-center mb-8 drop-shadow-lg">
            Daily Dose of TSLA Bull Catalysts
          </p>
          <p className="text-xl md:text-3xl text-white drop-shadow-lg">
            🚀 No FUD, Only Moon 🌕
          </p>
        </div>
      </div>

      {/* Нижняя секция — будущая лента */}
      <section className="w-full max-w-6xl px-8 py-20 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-12 text-red-500">
          Coming Soon
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-xl">
          <div className="bg-gray-900 p-8 rounded-lg">
            <p className="font-bold text-2xl mb-4">🤖 Optimus</p>
            <p>Роботы в заводах и домах</p>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg">
            <p className="font-bold text-2xl mb-4">🚕 Robotaxi</p>
            <p>Driverless в новых городах</p>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg">
            <p className="font-bold text-2xl mb-4">⚡ Energy</p>
            <p>Рекорды хранения и маржи</p>
          </div>
        </div>
      </section>
    </main>
  );
}
