'use strict';

var rawTranslitData = require('./translit.json');

var translitPairs = new Map(
  rawTranslitData.map(function(t){ 
    return [new RegExp(t[0], 'g'), t[1]]
  })
);

function latin2cyr(str) {
  translitPairs.forEach(function (ru, en) {
    str = str.replace(en, ru);
  });
  return str;
}

module.exports = latin2cyr;
