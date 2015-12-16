'use strict';

var O = require('ose').module(module);
O.package = 'ose-yoctopuce';

/** Docs {{{1
 * @caption Yoctopuce
 *
 * @readme
 * This package integrates some Yoctopuce sensor into
 * the OSE ecosystem.
 *
 * @module yoctopuce
 * @main yoctopuce
 */

/**
 * @caption Yoctopuce core
 *
 * @readme
 * Core singleton of [ose-yoctopuce] npm package. Registers [entry kinds]
 * defined by this package to the `"control"` [schema].
 *
 * @class yoctopuce.lib
 * @type singleton
 */

// Public {{{1
exports.browserConfig = true;

exports.config = function(name, val, deps) {
  O.kind('./hub', 'yoctoHub', deps);

  O.content('../content');
};


