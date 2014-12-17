'use strict';

var Ose = require('ose');
var M = Ose.package(module);
exports = M.init();

/** Docs {{{1
 * @caption Open Smart Environment Yoctopuce package
 *
 * @readme
 * This package integrates some Yoctopuce sensor into
 * the OSE ecosystem.
 *
 * @module yoctopuce
 * @main yoctopuce
 */

/**
 * @caption OSE yoctopuce core
 *
 * @readme
 * Core singleton of ose-yoctopuce npm package. Registers [entry kinds]
 * defined by this package to the `"control"` [scope].
 *
 * @class yoctopuce.lib
 * @type singleton
 */

// Public {{{1
exports.browserConfig = true;

M.content();

M.scope = 'control';
M.kind('./hub', 'yoctoHub');

