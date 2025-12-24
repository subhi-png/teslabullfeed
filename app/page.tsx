import Image from 'next/image';
import Script from 'next/script';

export default function Home() {
  const catalysts = [
    // ... (твои новости из предыдущего кода)
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      {/* ... (твой hero с Optimus) */}

      {/* TSLA Chart Section */}
      <section className="mx-auto max-w-6xl px-8 py-20">
        <h2 className="mb-12 text-center text-4xl font-bold text-red-500 md:text-6xl">
          TSLA Stock Chart (Live)
        </h2>
        <div className="tradingview-widget-container h-96 md:h-screen/2">
          <div className="tradingview-widget-container__widget h-full"></div>
          <div className="tradingview-widget-copyright">
            <a href="https://www.tradingview.com/" rel="noopener noreferrer" target="_blank">
              <span className="blue-text">Track TSLA on TradingView</span>
            </a>
          </div>
          <Script
            src="https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js"
            strategy="lazyOnload"
          >
            {`
              {
                "autosize": true,
                "symbol": "NASDAQ:TSLA",
                "interval": "D",
                "timezone": "Etc/UTC",
                "theme": "dark",
                "style": "1",
                "locale": "en",
                "backgroundColor": "#000000",
                "gridColor": "#333333",
                "allow_symbol_change": true,
                "calendar": false,
                "support_host": "https://www.tradingview.com"
              }
            `}
          </Script>
        </div>
      </section>

      {/* News Feed */}
      {/* ... (твоя лента новостей) */}
    </main>
  );
}
