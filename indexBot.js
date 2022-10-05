const TelegramBot = require('node-telegram-bot-api');

const token = '5409744001:AAFxTpjm8NRGhNvo4ZTIS10FIZvnlJ2FVK4';
const webAppUrl = 'https://ya.ru'
const bot = new TelegramBot(token, {polling: true});

bot.on('message', async(msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if(text === '/start') {
    await bot.sendMessage(chatId, 'Чтобы начать игру нажми кнопку ниже', {
        reply_markup : {
            inline_keyboard : [
                [{text: 'Начать игру', web_app: {url: webAppUrl}}]
            ]
        }
    })
  }


});