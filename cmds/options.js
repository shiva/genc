module.exports = function (program) {
    'use strict';

    var default_input = __dirname + '/../etc/sample1.h';

    program
        .option('-i, --input [file]',
                'input header file [etc/sample1.h]',
                String, default_input)
        .option('-o, --output [file]', 'output file to write to')
        ;

};
