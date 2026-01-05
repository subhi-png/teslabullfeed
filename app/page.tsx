import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const currentPrice = "438.07";
const priceChange = "-11.65 (-2.59%)";

const catalysts = [
  {
    title: "Robotaxi Network Expansion",
    description: "Broader rollout to new cities, paid rides for owners, unsupervised FSD scaling. Trillion-dollar opportunity accelerating.",
    date: "Throughout 2026",
  },
  {
    title: "Optimus Production Ramp",
    description: "Higher-volume factory production starts. In-house deployment + first external sales targeted late 2026/2027.",
    date: "2026–2027",
  },
  {
    title: "Cybercab Volume Production",
    description: "Dedicated robotaxi vehicle (Cybercab) hits the roads. Affordable next-gen platform unlocking mass autonomy.",
    date: "2026",
  },
  {
    title: "Energy Storage Supercycle",
    description: "Megapack deployments continue explosive growth. Margins beating automotive, becoming major profit driver.",
    date: "Ongoing 2026",
  },
  {
    title: "Tesla Semi High-Volume Ramp",
    description: "Electric semi-trucks scale production. New fleets adopting, logistics revolution underway.",
    date: "2026",
  },
];

export default function Home() {
  return (
    <main className={`bg-black text-white min-h-screen ${inter.className}`}>
      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <Image
          src="/optimus-hero.jpg"
          alt="Tesla Optimus & Cybercab – Autonomy and Robotics Revolution"
          fill
          priority
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
          <h1 className="mb-6 text-5xl font-bold text-red-500 drop-shadow-2xl md:text-8xl">
            TeslaBullFeed
          </h1>
          <p className="mb-8 text-2xl drop-shadow-lg md:text-4xl">
            Daily Dose of TSLA Bull Catalysts
          </p>
          <p className="text-xl drop-shadow-lg md:text-3xl">
            🚀 No FUD, Only Moon 🌕
          </p>
        </div>
      </section>

      {/* Live Price Section */}
      <section className="bg-gray-900 py-16 text-center">
        <h2 className="mb-6 text-4xl font-bold text-red-500 md:text-6xl">
          TSLA Live Price
        </h2>
        <div className="text-6xl font-bold md:text-8xl">
          ${currentPrice}
        </div>
        <p className="mt-4 text-2xl text-red-400">
          {priceChange} (as of Jan 5, 2026)
        </p>
      </section>

      {/* Bull News Feed */}
      <section className="mx-auto max-w-6xl px-8 py-20 pb-32">
        <h2 className="mb-12 text-center text-4xl font-bold text-red-500 md:text-6xl">
          Bull News Feed – 2026 Catalysts
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {catalysts.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl bg-gray-900 p-8 shadow-xl transition hover:shadow-red-500/50 hover:-translate-y-2"
            >
              <h3 className="mb-4 text-2xl font-bold text-red-400">
                {item.title}
              </h3>
              <p className="mb-6 text-lg leading-relaxed">
                {item.description}
              </p>
              <p className="text-sm text-gray-400">
                {item.date}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
