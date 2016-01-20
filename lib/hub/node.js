'use strict';

const O = require('ose')(module);

var Child = require('child_process');
var Path = require('path');

// Public {{{1
exports.homeInit = function(entry) {  // {{{2
  O.new('ose-control/lib/pin/list')(
    entry,
    {
      ain: {read: readSensor},
    },
    'ain',
    false
  );

  connect(entry);
};

// Private {{{1
function readSensor(pin, cb) {  // {{{2
  O.async.nextTick(function() {
    var val = pin.pins.entry.sval;
    val = val && val[pin.index];
    if (val) {
      cb(null, val.raw);
    } else {
      cb(null, 0);
//      cb(O.error(pin.pins.entry, 'Pin state was not found', pin.index));
    }
  });
}

function connect(entry) {  // {{{2
  entry.child = Child.fork(Path.dirname(__dirname) + '/child.js');

  entry.child.on('message', function(val) {
    if (val.error) {
      O.log.error(O.error(entry, val.error.code, val.error.message));
      return;
    }

    if (val.add) {
      addSensor(entry, val.add);
    }

    if (val.update) {
      for (var key in val.update) {
        updateSensor(entry, key, val.update[key]);
      }
    }

    return;
  });

//  entry.child.send({hello: 'world'});
}

function addSensor(entry, val) {  // {{{2
//  console.log('ADD SENSOR', val);

  return entry.shard.find(val.name, function(err, sensor) {
    if (! err) return;

    if (err.code !== 'ENTRY_NOT_FOUND') {
      return O.log.error(err);
    }

    var trans = entry.shard.transaction();

    val.alias = val.name;
    val.master = entry.id;
    val.pin = val.name;

    sensor = trans.add('sensor', val);

    return trans.commit(O.log.bindError(entry));
  });
}

function updateSensor(entry, key, val) {  // {{{2
//  console.log('UPDATE SENSOR', key, val);

  if (key in entry.pins.pins) {
    entry.pins.pins[key].update(val);
    return;
  }

  var state = {};
  state[key] = {
//    at: Date.now(),
    raw: val,
  };
  entry.setState(state);
  return;
}

