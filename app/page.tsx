import Image from 'next/image';

export default function Home() {
  const catalysts = [
    {
      title: "Driverless Robotaxi Expansion",
      description: "Fully unsupervised rides scaling in Austin and new cities — trillion-dollar opportunity unlocking.",
      date: "December 2025",
    },
    {
      title: "FSD v14.2+ Rollout",
      description: "Smoother performance, outperforming competitors in real-world tests.",
      date: "December 23, 2025",
    },
    {
      title: "Optimus Factory Deployment",
      description: "Thousands of humanoid robots active in factories. External sales planned for 2026.",
      date: "December 2025",
    },
    {
      title: "Energy Storage Records",
      description: ">100% YoY growth in deployments, margins higher than automotive.",
      date: "December 2025",
    },
    {
      title: "TSLA Near All-Time Highs",
      description: "Trading ~$485–490. Analysts targets $500–600+ on autonomy & robotics.",
      date: "December 24, 2025",
    },
  ];

  return (
    <main className="bg-black text-white">
      {/* Hero with Optimus */}
      <section className="relative h-screen w-full">
        <Image
          src="/optimus-hero.jpg"
          alt="Optimus exiting Cybertruck"
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

      {/* TSLA Live Chart */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <h2 className="mb-10 text-center text-4xl font-bold text-red-500 md:text-6xl">
          TSLA Live Chart
        </h2>
        <div className="tradingview-widget-container h-[600px] md:h-[800px] w-full rounded-2xl bg-gray-900 shadow-2xl">
          <div className="tradingview-widget-container__widget h-full"></div>
          <div className="tradingview-widget-copyright text-xs text-gray-500 text-center py-2">
            <a href="https://www.tradingview.com/" rel="noopener" target="_blank" className="text-blue-400">
              Track TSLA on TradingView
            </a>
          </div>
          <script async src="https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js">
            {JSON.stringify({
              autosize: true,
              symbol: "NASDAQ:TSLA",
              interval: "D",
              timezone: "Etc/UTC",
              theme: "dark",
              style: "1",
              locale: "en",
              backgroundColor: "#000000",
              gridColor: "#333333",
              allow_symbol_change: true,
              calendar: false,
            })}
          </script>
        </div>
      </section>

      {/* Latest Bull Catalysts */}
      <section className="mx-auto max-w-6xl px-4 pb-32 pt-16 md:px-8">
        <h2 className="mb-12 text-center text-4xl font-bold text-red-500 md:text-6xl">
          Latest Bull Catalysts
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {catalysts.map((item, i) => (
            <div key={i} className="rounded-2xl bg-gray-900 p-8 shadow-xl hover:shadow-red-500/50 transition">
              <h3 className="mb-4 text-2xl font-bold text-red-400">{item.title}</h3>
              <p className="mb-6 text-lg leading-relaxed">{item.description}</p>
              <p className="text-sm text-gray-400">{item.date}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
