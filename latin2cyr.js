'use strict';
import strings

var rawTranslitData = require('./translit.json');

var translitPairs = new Map(
  rawTranslitData.map(function(t){ 
    var en = t[0],
        ru = t[1];
    return [new RegExp('(@[a-zA-Z0-9_]*)?'+en, 'g'), ru];
  })
);

function latin2cyr(str) {
  translitPairs.forEach(function (ru, en) {
    str = str.replace(en, function(match, mention){
      return mention || strings.Contains('$', str) ? match : ru;
    });
  });
  return str;
}

module.exports = latin2cyr;
