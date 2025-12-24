<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Компактный чат</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #f9f9fb;
  }
  header {
    background: #202123;
    color: white;
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    flex-shrink: 0;
  }
  #chat {
    flex: 1;
    overflow-y: auto;
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    scroll-behavior: smooth;
  }
  .message {
    max-width: 80%;
    padding: 9px 12px;
    border-radius: 12px;
    line-height: 1.4;
    font-size: 15px;
    word-wrap: break-word;
  }
  .user {
    align-self: flex-end;
    background: #10a37f;
    color: white;
    border-bottom-right-radius: 4px;
  }
  .bot {
    align-self: flex-start;
    background: white;
    color: #333;
    border: 1px solid #e0e0e0;
    border-bottom-left-radius: 4px;
  }
  #input-area {
    flex-shrink: 0;
    padding: 10px 12px;
    background: white;
    border-top: 1px solid #ddd;
    display: flex;
    gap: 8px;
    align-items: end;
  }
  #message-input {
    flex: 1;
    padding: 10px 12px;
    border: 1px solid #ccc;
    border-radius: 20px;
    font-size: 15px;
    resize: none;
    min-height: 20px;
    max-height: 120px;
    overflow-y: auto;
  }
  #send-btn {
    background: #10a37f;
    color: white;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 18px;
    flex-shrink: 0;
  }
  #send-btn:disabled {
    background: #aaa;
    cursor: not-allowed;
  }
</style>
</head>
<body>
  <header>Чат с ИИ</header>
  <div id="chat"></div>
  <div id="input-area">
    <textarea id="message-input" placeholder="Напишите сообщение..." rows="1"></textarea>
    <button id="send-btn">➤</button>
  </div>

<script>
  const chat = document.getElementById('chat');
  const input = document.getElementById('message-input');
  const sendBtn = document.getElementById('send-btn');

  // Авторесайз textarea
  input.addEventListener('input', () => {
    input.style.height = 'auto';
    input.style.height = input.scrollHeight + 'px';
  });

  // Отправка по Enter (без Shift)
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

    addMessage(text, 'user');
    input.value = '';
    input.style.height = 'auto';
    sendBtn.disabled = true;

    // Симуляция ответа бота
    setTimeout(() => {
      addMessage('Получил: «' + text + '». Чем ещё помочь?', 'bot');
      sendBtn.disabled = false;
    }, 800);
  }

  function addMessage(text, sender) {
    const div = document.createElement('div');
    div.className = 'message ' + sender;
    div.textContent = text;
    chat.appendChild(div);
    chat.scrollTop = chat.scrollHeight;
  }

  // Приветствие
  addMessage('Привет! Я готов помогать. Пиши коротко — отвечу компактно 😉', 'bot');
</script>
</body>
</html>
