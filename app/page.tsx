<!<!DOCTYPE html>
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
      letter-spacing: 1px;
    }
    .price-change {
      font-size: 18px;
      margin-top: 8px;
    }
    .positive { color: #0f0; }
    .negative { color: #f44; }
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
      margin-bottom: 8px;
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
      flex-shrink: 0;
    }
    #send-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  </style>
</head>
<body>
  <!-- Replace with your Optimus image URL -->
  <img src="https://example.com/optimus-no-fud-only-moon.jpg" alt="No FUD, Only Moon" class="header-image">

  <div class="price-section">
    <div class="price-title">TSLA Live Price</div>
    <div class="price-value">$485.56</div>
    <div class="price-change negative">-0.65% (today)</div>
  </div>

  <div id="feed">
    <!-- Example posts -->
    <div class="post">
      <div class="post-header">
        <div class="avatar"></div>
        <div class="username">@elonmusk</div>
        <div class="time">2h ago</div>
      </div>
      <div class="post-text">Cybertruck production ramp is going extremely well. Deliveries accelerating!</div>
      <img src="https://example.com/cybertruck.jpg" alt="Cybertruck" class="post-image">
    </div>

    <div class="post">
      <div class="post-header">
        <div class="avatar"></div>
        <div class="username">@Tesla</div>
        <div class="time">5h ago</div>
      </div>
      <div class="post-text">Model Y became the world's best-selling vehicle in 2024! Thank you to all our customers ❤️</div>
    </div>
  </div>

  <div id="input-area">
    <textarea id="message-input" placeholder="Share your Tesla thoughts..." rows="1"></textarea>
    <button id="send-btn">➤</button>
  </div>

  <script>
    const feed = document.getElementById('feed');
    const input = document.getElementById('message-input');
    const sendBtn = document.getElementById('send-btn');

    // Auto-resize textarea
    input.addEventListener('input', () => {
      input.style.height = 'auto';
      input.style.height = input.scrollHeight + 'px';
    });

    // Send on Enter (without Shift)
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
      feed.prepend(newPost); // New post at the top
      input.value = '';
      input.style.height = 'auto';
    }
  </script>
</body>
</html>
      line-height: 1.5;
      margin-bottom: 8px;
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
      flex-shrink: 0;
    }
    #send-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  </style>
</head>
<body>
  <!-- Replace with your Optimus image URL -->
  <img src="https://example.com/optimus-no-fud-only-moon.jpg" alt="No FUD, Only Moon" class="header-image">

  <div class="price-section">
    <div class="price-title">TSLA Live Price</div>
    <div class="price-value">$485.56</div>
    <div class="price-change negative">-0.65% (today)</div>
  </div>

  <div id="feed">
    <!-- Example posts -->
    <div class="post">
      <div class="post-header">
        <div class="avatar"></div>
        <div class="username">@elonmusk</div>
        <div class="time">2h ago</div>
      </div>
      <div class="post-text">Cybertruck production ramp is going extremely well. Deliveries accelerating!</div>
      <img src="https://example.com/cybertruck.jpg" alt="Cybertruck" class="post-image">
    </div>

    <div class="post">
      <div class="post-header">
        <div class="avatar"></div>
        <div class="username">@Tesla</div>
        <div class="time">5h ago</div>
      </div>
      <div class="post-text">Model Y became the world's best-selling vehicle in 2024! Thank you to all our customers ❤️</div>
    </div>
  </div>

  <div id="input-area">
    <textarea id="message-input" placeholder="Share your Tesla thoughts..." rows="1"></textarea>
    <button id="send-btn">➤</button>
  </div>

  <script>
    const feed = document.getElementById('feed');
    const input = document.getElementById('message-input');
    const sendBtn = document.getElementById('send-btn');

    // Auto-resize textarea
    input.addEventListener('input', () => {
      input.style.height = 'auto';
      input.style.height = input.scrollHeight + 'px';
    });

    // 
