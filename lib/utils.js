'use strict';
var fs = require('fs');

var findFile = function(name) {
    try {
        var stats = fs.lstatSync(name);
        return stats.isFile();
    } catch (e) {
        return false;
    }
};

module.exports = {
    findFile : findFile,
};
