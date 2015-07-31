/* accessors commander component
 * To use add require('../cmds/accessors.js')(program) to your commander.js based node executable before program.parse
 */
'use strict';

var libclang = require('libclang');
var utils = require('../lib/utils.js')

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
				var ret = Cursor.Recurse;

				if (this.kind != Cursor.MacroDefinition &&
					this.kind != Cursor.MacroInstantiation &&
					this.kind != Cursor.LastProcessing) {
					console.log("");
					console.log(consts.CXCursorKind[this.kind], this.spelling);
				}

				switch (this.kind) {
					case Cursor.LastPreprocessing:
						ret = Cursor.Break;
						break;
					case Cursor.StructDecl:
						utils.print_alloc(this.spelling);
						utils.print_dealloc(this.spelling);
						break;
					case Cursor.TypedefDecl:
						console.log(this.typedefType.declaration.spelling);
						break;
					case Cursor.FieldDecl:
						if (parent.kind == Cursor.StructDecl) {
							utils.print_accessor(parent.spelling, this.spelling, this.type.spelling);
							utils.print_mutator(parent.spelling, this.spelling, this.type.spelling);
						}
						break;
					default:
						ret = Cursor.Continue;
						break;
				}
				return ret;
			});

			index.dispose();
			//tu.dispose();
    });
};
