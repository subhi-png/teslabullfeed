import Image from 'next/image';

export default function Home() {
  const catalysts = [
    {
      title: "Driverless Robotaxi Expansion",
      description: "Fully unsupervised rides in Austin and beyond. Fleet scaling rapidly – the multi-trillion dollar opportunity is unfolding.",
      date: "December 2025",
    },
    {
      title: "FSD v14.2+ Rollout",
      description: "Smoother than ever, outperforming competitors in real-world tests. Millions of miles of new data accelerating progress.",
      date: "December 23, 2025",
    },
    {
      title: "Optimus Factory Deployment",
      description: "Thousands of humanoid robots now working in Tesla factories. External sales planned for 2026 – the robotics revolution begins.",
      date: "December 2025",
    },
    {
      title: "Energy Storage Record Growth",
      description: "Deployments up >100% YoY with margins exceeding automotive. Megapack contracts flooding in worldwide.",
      date: "December 2025",
    },
    {
      title: "TSLA Near All-Time Highs",
      description: "Stock trading ~$485–490. Analysts raising targets to $500–600+ on autonomy and robotics valuation unlock.",
      date: "December 24, 2025",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section with Optimus */}
      <section className="relative h-screen w-full">
        <Image
          src="/optimus-hero.jpg"
          alt="Optimus arriving to perform tasks – the future of autonomy and robotics"
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

      {/* News Feed Section */}
      <section className="mx-auto max-w-6xl px-8 py-20">
        <h2 className="mb-12 text-center text-4xl font-bold text-red-500 md:text-6xl">
          Latest Bull Catalysts
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {catalysts.map((item, index) => (
            <div
              key={index}
              className="rounded-xl bg-gray-900 p-8 shadow-2xl transition hover:shadow-red-500/50"
            >
              <h3 className="mb-4 text-2xl font-bold text-red-400">
                {item.title}
              </h3>
              <p className="mb-4 text-lg leading-relaxed">
                {item.description}
              </p>
              <p className="text-sm text-gray-400">{item.date}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
