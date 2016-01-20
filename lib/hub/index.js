'use strict';

const O = require('ose')(module)
  .singleton('ose/lib/kind')
  .prepend('node')
;

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
exports.role = ['pins'];
exports.on('ose-control/lib/pin/commands');
