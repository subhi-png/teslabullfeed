import Image from 'next/image';
import Script from 'next/script';

export default function Home() {
  const catalysts = [
    { title: "Driverless Robotaxi Expansion", description: "Fully unsupervised rides scaling – trillion-dollar opportunity unfolding.", date: "December 2025" },
    { title: "FSD v14.2+ Rollout", description: "Smoother performance, outperforming competitors.", date: "December 23, 2025" },
    { title: "Optimus Factory Deployment", description: "Thousands of robots active, external sales 2026.", date: "December 2025" },
    { title: "Energy Storage Records", description: ">100% YoY growth, margins beating auto.", date: "December 2025" },
    { title: "TSLA Near ATH", description: "Trading ~$485–490, targets $500–600+.", date: "December 24, 2025" },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
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

      {/* Live TSLA Chart - увеличенная высота */}
      <section className="mx-auto max-w-7xl px-8 py-20">
        <h2 className="mb-12 text-center text-4xl font-bold text-red-500 md:text-6xl">
          TSLA Live Chart
        </h2>
        <div className="h-screen md:h-[800px] w-full rounded-xl bg-gray-900 shadow-2xl overflow-hidden">
          <div className="tradingview-widget-container h-full">
            <div className="tradingview-widget-container__widget h-full"></div>
            <Script
              id="tradingview-widget-script"
              src="https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js"
              strategy="lazyOnload"
            >
              {`
                {
                  "width": "100%",
                  "height": "100%",
                  "symbol": "NASDAQ:TSLA",
                  "interval": "D",
                  "timezone": "Etc/UTC",
                  "theme": "dark",
                  "style": "1",
                  "locale": "en",
                  "toolbar_bg": "#f1f3f6",
                  "enable_publishing": false,
                  "allow_symbol_change": true,
                  "container_id": "tradingview_chart"
                }
              `}
            </Script>
          </div>
        </div>
      </section>

      {/* News Feed */}
      <section className="mx-auto max-w-6xl px-8 py-20 pb-32">
        <h2 className="mb-12 text-center text-4xl font-bold text-red-500 md:text-6xl">
          Latest Bull Catalysts
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {catalysts.map((item, i) => (
            <div key={i} className="rounded-xl bg-gray-900 p-8 shadow-2xl hover:shadow-red-500/50 transition">
              <h3 className="mb-4 text-2xl font-bold text-red-400">{item.title}</h3>
              <p className="mb-4 text-lg">{item.description}</p>
              <p className="text-sm text-gray-400">{item.date}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
