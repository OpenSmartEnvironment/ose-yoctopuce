'use strict';

exports = require('ose')
  .singleton(module, 'ose/lib/http/content')
  .exports
;

/** Docs  {{{1
 * @module yoctopuce
 */

/**
 * @caption OSE yoctopuce content
 *
 * @readme
 * Provides files of OSE yoctopuce package to the browser.
 *
 * @class yoctopuce.content
 * @type singleton
 * @extends ose.lib.http.content
 */

// Public {{{1
exports.addFiles = function() {
  this.addModule('lib/index');
  this.addModule('lib/hub/index');
};

