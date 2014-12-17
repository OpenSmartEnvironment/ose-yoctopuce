'use strict';

var Ose = require('ose');
var M = Ose.module(module);

var Child = require('child_process');
var Path = require('path');

// Public {{{1
exports.homeInit = function(entry) {  // {{{2
  connect(entry);
};

function connect(entry) {  // {{{2
  entry.child = Child.fork(Path.dirname(__dirname) + '/child.js');

  entry.child.on('message', function(m) {
    if (m.error) {
      M.log.error(Ose.error(entry, m.error.code, m.error.message));
    } else {
      entry.setState(m);
    }
  });

//  entry.child.send({hello: 'world'});
};

// }}}1
