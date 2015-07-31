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

var print_alloc = function(name) {
  console.log(name + "* " + name + "_alloc();");
}

var print_dealloc = function(name) {
  console.log(name + "_free(" + name +"* "+ name + ");");
}

var print_accessor= function(struct_name, field_name, field_type) {
  console.log(field_type +
              " get_" + struct_name + "_" + field_name +
              "(" + struct_name + "* s);"
            );

}

var print_mutator= function(struct_name, field_name, field_type) {
  console.log( "void set_" +
              struct_name + "_" + field_name +
              "(" + struct_name + "* s," + field_type + " f);"
            );
}

var print_object = function(o, oname) {
  var propValue;
  console.log("\nPrinting " + oname + ":");
  for(var propName in o) {
    propValue = o[propName]

    console.log(propName, ":" , propValue);
  }
}

module.exports = {
    findFile : findFile,
    print_alloc : print_alloc,
    print_dealloc : print_dealloc,
    print_accessor : print_accessor,
    print_mutator : print_mutator,
    print_object : print_object,
};
