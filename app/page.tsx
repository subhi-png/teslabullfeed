<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TeslaBullFeed 🚀</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #000;
      color: white;
      height: 100vh;
      display: flex;
      flex-direction: column;
    }
    .header-image {
      width: 100%;
      height: 45vh;
      object-fit: cover;
    }
    .price-section {
      background: #111;
      padding: 24px 16px;
      text-align: center;
      flex-shrink: 0;
    }
    .price-title {
      color: #e31937;
      font-size: 28px;
      font-weight: 700;
      margin-bottom: 12px;
    }
    .price-value {
      font-size: 48px;
      font-weight: 800;
    }
    .price-change {
      font-size: 18px;
      margin-top: 8px;
    }
    .positive { color: #0f0; }
    .negative { color: #f44; }
    .neutral { color: #aaa; }
    #feed {
      flex: 1;
      overflow-y: auto;
      padding: 12px;
      display: flex;
      flex-direction: column;
      gap: 14px;
    }
    .post {
      background: #111;
      border-radius: 12px;
      padding: 14px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    }
    .post-header {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 10px;
      font-size: 14px;
      color: #aaa;
    }
    .avatar {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: #333;
    }
    .username {
      font-weight: 600;
      color: white;
    }
    .time {
      margin-left: auto;
    }
    .post-text {
      font-size: 15px;
      line-height: 1.5;
    }
    .post-image {
      width: 100%;
      border-radius: 10px;
      margin-top: 10px;
    }
    #input-area {
      padding: 10px 12px;
      background: #000;
      border-top: 1px solid #333;
      display: flex;
      gap: 10px;
      align-items: end;
      flex-shrink: 0;
    }
    #message-input {
      flex: 1;
      padding: 12px 16px;
      background: #222;
      color: white;
      border: 1px solid #444;
      border-radius: 24px;
      font-size: 15px;
      resize: none;
      min-height: 44px;
      max-height: 120px;
      overflow-y: auto;
    }
    #send-btn {
      background: #e31937;
      color: white;
      border: none;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      cursor: pointer;
      font-size: 20px;
    }
  </style>
</head>
<body>
  <!-- Мемная картинка Optimus "No FUD, Only Moon" -->
  <img src="https://preview.redd.it/teslas-black-optimus-v2-walking-v0-4htkbuabgkyf1.jpeg?width=955&format=pjpg&auto=webp&s=d1077ce2ee520ab20020aef2f21f489694ae01ef" alt="No FUD, Only Moon" class="header-image">

  <div class="price-section">
    <div class="price-title">TSLA Live Price</div>
    <div class="price-value" id="price">$---.--</div>
    <div class="price-change neutral" id="change">Loading...</div>
  </div>

  <div id="feed">
    <!-- Примеры булл-постов -->
    <div class="post">
      <div class="post-header">
        <div class="avatar"></div>
        <div class="username">@elonmusk</div>
        <div class="time">recently</div>
      </div>
      <div class="post-text">Optimus will change everything. No FUD, only moon 🚀🌕</div>
    </div>
    <div class="post">
      <div class="post-header">
        <div class="avatar"></div>
        <div class="username">@Tesla</div>
        <div class="time">today</div>
      </div>
      <div class="post-text">Robotaxi unveiling soon. The future is autonomous.</div>
    </div>
  </div>

  <div id="input-area">
    <textarea id="message-input" placeholder="Share your Tesla thoughts..." rows="1"></textarea>
    <button id="send-btn">➤</button>
  </div>

  <script>
    // Элементы для цены
    const priceEl = document.getElementById('price');
    const changeEl = document.getElementById('change');

    // Функция обновления цены TSLA
    async function updateTSLAPrice() {
      try {
        const response = await fetch('https://query1.finance.yahoo.com/v8/finance/chart/TSLA?interval=1m&range=1d', { 
          cache: 'no-cache' 
        });
        const data = await response.json();

        const quote = data.chart.result[0].meta;
        const currentPrice = quote.regularMarketPrice.toFixed(2);
        const previousClose = quote.previousClose.toFixed(2);
        const changePercent = ((currentPrice - previousClose) / previousClose * 100).toFixed(2);

        priceEl.textContent = `$${currentPrice}`;

        // Цвет и текст изменения
        if (changePercent > 0) {
          changeEl.className = 'price-change positive';
          changeEl.textContent = `+${changePercent}% (today)`;
        } else if (changePercent < 0) {
          changeEl.className = 'price-change negative';
          changeEl.textContent = `${changePercent}% (today)`;
        } else {
          changeEl.className = 'price-change neutral';
          changeEl.textContent = `0.00% (today)`;
        }
      } catch (error) {
        priceEl.textContent = '$---.--';
        changeEl.textContent = 'Error loading price';
        changeEl.className = 'price-change neutral';
        console.error('Price update error:', error);
      }
    }

    // Первичная загрузка и автообновление каждые 30 сек
    updateTSLAPrice();
    setInterval(updateTSLAPrice, 30000);

    // Остальной код для постов (как раньше)
    const feed = document.getElementById('feed');
    const input = document.getElementById('message-input');
    const sendBtn = document.getElementById('send-btn');

    input.addEventListener('input', () => {
      input.style.height = 'auto';
      input.style.height = input.scrollHeight + 'px';
    });

    input.addEventListener('keydown', e => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });

    sendBtn.addEventListener('click', sendMessage);

    function sendMessage() {
      const text = input.value.trim();
      if (!text) return;

      const newPost = document.createElement('div');
      newPost.className = 'post';
      newPost.innerHTML = `
        <div class="post-header">
          <div class="avatar"></div>
          <div class="username">@you</div>
          <div class="time">just now</div>
        </div>
        <div class="post-text">${text.replace(/\n/g, '<br>')}</div>
      `;
      feed.prepend(newPost);
      input.value = '';
      input.style.height = 'auto';
    }
  </script>
</body>
</html>
