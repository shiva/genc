/* accessors commander component
 * To use add require('../cmds/accessors.js')(program) to your commander.js based node executable before program.parse
 */
'use strict';

module.exports = function(program) {

	program
		.command('accessors <type>')
		.version('0.0.1')
		.description('Generate accessors for the specified type')
		.action(function(type) {
            console.log("input: ", program.input);
            console.log("type: ", type);
		});
	
};
