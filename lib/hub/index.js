'use strict';

var O = require('ose').object(module, 'ose/lib/kind');
O.prepend('node');
exports = O.init('control', 'yoctoHub');

/** Docs {{{1
 * @module yoctopuce
 */

/**
 * @caption Yoctopuce VirtualHub kind
 *
 * @readme
 * [Entry kind] representing Yoctopuce VirtualHub.
 *
 * @kind yoctoHub
 * @class yoctopuce.lib.hub
 * @extend ose.lib.kind
 * @type singleton
 */

// Public {{{1
exports.on('ose-control/lib/pin/commands');
