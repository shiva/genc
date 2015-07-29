'use strict';

var assert = require("assert");
var exec = require('child_process').exec;
var path = require('path');

describe('genc accessors', function(){
	var cmd = 'node '+path.join(__dirname, '../bin/genc')+' ';
	console.log(cmd);

	it('--input foo.h accessors bar should print them as output', function(done) {
		exec(cmd+'--input foo.h accessors bar', function (error, stdout, stderr) {
			assert(!error);
			done();
		});
	});

});
