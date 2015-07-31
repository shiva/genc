genc
=======

[![Build Status](https://travis-ci.org/shiva/genc.svg?branch=master)](https://travis-ci.org/shiva/genc)
[![Coverage Status](https://coveralls.io/repos/shiva/genc/badge.svg?branch=master&service=github)](https://coveralls.io/github/shiva/genc?branch=master)

# Description
Generates C code from provided headers

# Pre-requisite

 - libclang 3.6.2

# Setup 

 1. download and install [llvm][1].
 2. setup env variables:

    $export DYLD_LIBRARY_PATH=/path/to/llvm/lib
    $export PATH=/path/to/llvm/bin:$PATH

# Usage

To install genc from npm, run:

```
$ npm install -g genc
```

```node ./bin/genc --help```

# License

Copyright (c) 2015 Shiva

[MIT License][3]

# Acknowledgments

Built using [generator-commader][2]


[1]: http://llvm.org/releases/download.html#3.6.2
[2]: https://github.com/Hypercubed/generator-commander
[3]: http://en.wikipedia.org/wiki/MIT_License)
