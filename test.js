var latin2cyr = require('./latin2cyr');
var translit = require('./translit.json');
var test = require('tape');

test('simple 1-letter translations', function (t) {
  for(var i = 0; i < translit.length; i++){
    var en = translit[i][0],
        ru = translit[i][1];
    t.equal(latin2cyr(en), ru);
  }
  t.end();
});

test('mentions skipping', function (t) {
  t.equal(latin2cyr('@mention v nachale'), '@mention в начале');
  t.equal(latin2cyr('v @mention seredine'), 'в @mention середине');
  t.equal(latin2cyr('v konce @mention'), 'в конце @mention');
  t.end();
});

test('square brackets skipping', function (t) {
  t.equal(latin2cyr('[square brackets] v nachale'), '[square brackets] в начале');
  t.equal(latin2cyr('v [square brackets] seredine'), 'в [square brackets] середине');
  t.equal(latin2cyr('v konce [square brackets]'), 'в конце [square brackets]');
  t.end();
});

test('single square bracket', function (t) {
  t.equal(latin2cyr('[single v nachale'), '[сингле в начале');
  t.equal(latin2cyr('v [single seredine'), 'в [сингле середине');
  t.equal(latin2cyr('v konce [single'), 'в конце [сингле');
  t.end();
});

test('multiple square brackets', function (t) {
  t.equal(
    latin2cyr('test [multiple] [square] [brackets] test'),
    'тест [multiple] [square] [brackets] тест'
  );
  t.equal(
    latin2cyr('test [nested [square] brackets] test'),
    'тест [nested [square] brackets] тест'
  );
  t.end();
});
