'use strict';

var rawTranslitData = require('./translit.json');

var translitPairs = new Map(
  rawTranslitData.map(function(t){ 
    var en = t[0],
        ru = t[1],
        regExpString = '(@[a-zA-Z0-9_-]*)?' + en + '|(\\[.*)?' + en + '(?=.*\\])';
    return [new RegExp(regExpString, 'g'), ru];
  })
);

function latin2cyr(str) {
  translitPairs.forEach(function (ru, en) {
    str = str.replace(en, function(match, mention, brackets){
      return mention || brackets ? match : ru;
    });
  });
  return str;
}

module.exports = latin2cyr;
