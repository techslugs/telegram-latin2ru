var latin2cyr = require('./latin2cyr');
var translit = require('./translit.json');

		//Results variables
		var results = {
				total: 0,
				bad: 0
			};

		//Test func
		function test(str, expected) {
			results.total++
			var res = latin2cyr(str)
			if (res != expected) {
				results.bad++;
				//console.log("Expected " + expected + ", but was " + res);
			}

		}

		//Tests
		for (var i = 0; i < translit.length; i++) {
			test(translit[i][0], translit[i][1]);
		}
		//console.log("Of " + results.total + " tests, " + results.bad + " failed, " + (results.total - results.bad) + " passed.");