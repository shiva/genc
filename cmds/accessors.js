/* accessors commander component
 * To use add require('../cmds/accessors.js')(program) to your commander.js based node executable before program.parse
 */
'use strict';

var libclang = require('libclang');

module.exports = function(program) {

	program
  	.command('accessors <type>')
    .version('0.0.1')
    .description('Generate accessors for the specified type')
    .action(function(type) {



			console.log("input: ", program.input);
			console.log("type: ", type);

			var
				Cursor = libclang.Cursor,
				Index = libclang.Index,
				TranslationUnit = libclang.TranslationUnit;

			var dclang = require('libclang/lib/dynamic_clang');
			var consts = dclang.CONSTANTS;

			var index = new Index(true, true);
			var tu = new TranslationUnit.fromSource(index, program.input, []);


			tu.cursor.visitChildren(function (parent) {
				if (this.kind != Cursor.MacroDefinition &&
					this.kind != Cursor.MacroInstantiation &&
					this.kind != Cursor.LastProcessing) {
					console.log(consts.CXCursorKind[this.kind], this.spelling);
				}

				switch (this.kind) {
					case Cursor.LastPreprocessing:
						return Cursor.Break;
						break;
					case Cursor.Namespace:
					case Cursor.ClassDecl:
					case Cursor.FunctionDecl:
					case Cursor.FunctionTemplate:
					case Cursor.EnumDecl:
						return Cursor.Recurse;
						break;
					default:
						return Cursor.Continue;
						break;
				}
			});

			index.dispose();
			//tu.dispose();
    });
};
