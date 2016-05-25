'use strict';

var TelegramBotApi = require('telegram-bot-api');
var crypto = require('crypto');
var latin2cyr = require('./latin2cyr');

var TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
var bot = new TelegramBotApi({token: TELEGRAM_TOKEN, updates: { enabled: true }});

console.log('Bot server started...');

bot.on('inline.query', function (message) {
  var source = message.query;

  if(source === undefined || source.length == 0) {
    return;
  }
  console.log('Received:', source);
  var result = latin2cyr(source);
  bot.answerInlineQuery({
    inline_query_id: message.id,
    results: [{
      type: 'article',
      id: crypto.createHash('md5').update(source).digest('hex'),
      title: 'Translit',
      description: result,
      input_message_content: {
        message_text: result
      },
    }],
    next_offset: ''
  }).then(function () {
    console.log('Sent:', result);
  }).catch(function(err) {
    console.log('Error:', err);
  });
});
