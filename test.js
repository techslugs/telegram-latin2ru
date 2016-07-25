var latin2cyr = require('./latin2cyr');
var translit = require('./translit.json');
var assert = require('chai').assert;

function _test(ru, en){
  describe('As a user, I want to transform', function(){
    it(en+' in to '+ru, function(){
      assert.equal(ru, latin2cyr(en));
    });
  });
}

function _dontTranslateTest(en){
  describe('As a user, I dont want to translate', function(){
  	it('text in square brackets - '+en, function(){
  		assert.equal('['+en+']', latin2cyr('['+en+']'));
  	})
  })
}

for(var i = 0; i < translit.length; i++){
  _test(translit[i][1], translit[i][0]);
  _dontTranslateTest(translit[i][0]);
}