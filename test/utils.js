'use strict';

var assert = require("assert");

var utils = require('../lib/utils.js');

describe('utils', function(){

	it('should return true if file exists', function(done) {
        var sample_file = process.cwd() + "/etc/sample1.h"
		var found = utils.findFile(sample_file);
		assert(found);
		done();
	});

    it('should return false if does not file exists', function(done) {
		var found = utils.findFile('etc/absent0file.h');
		assert(!found);
		done();
	});


});
