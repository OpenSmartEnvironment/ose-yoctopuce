'use strict';

var O = require('ose').object(module, 'ose/lib/http/content');
exports = O.init();

/** Docs  {{{1
 * @module yoctopuce
 */

/**
 * @caption Yoctopuce content
 *
 * @readme
 * Provides files of [ose-yoctopuce] package to the browser.
 *
 * @class yoctopuce.content
 * @type singleton
 * @extends ose.lib.http.content
 */

// Public {{{1
exports.addModule('lib/index');
exports.addModule('lib/hub/index');

