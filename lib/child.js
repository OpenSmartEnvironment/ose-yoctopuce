'use strict';

process.on('message', function(m) {
//  console.log('CHILD got message:', m);
});

process.on('disconnect', function() {
  process.exit(0);
});

var Sensors = {};

var Y = require('yoctolib');
Y.YAPI.RegisterHub('http://127.0.0.1:4444/');

setInterval(readKnown, 60 * 1000);
readAll();


function readKnown() {
  var msg = {};

  for (var key in Sensors) {
    msg[key] = Sensors[key].get_currentValue();
  }

  process.send({update: msg});
}

function readAll() {
  var s = Y.YSensor.FirstSensor();

  while(s) {
    var key = s.get_hardwareId();

    if (key in Sensors) {
      Sensors[key] = s;
      continue;
    }

    Sensors[key] = s;
    process.send({add: {
      name: key,
      unit: s.get_unit(),
      resolution: s.get_resolution(),
      value: s.get_currentValue(),
    }});

    s = s.nextSensor();
  }
}

/* OBSOLETE
function init() {
  var s = Y.YSensor.FirstSensor();
  while(s) {
    var key = s.get_hardwareId();
    addSensor(key, s);
    Sensors[key] = s;
    msg[key] = {
      unit: s.get_unit(),
      resolution: s.get_resolution(),
    };
    s = s.nextSensor();
  }

  process.send({update: msg});
}

function sendAll() {
  var msg = {};

  var s = Y.YSensor.FirstSensor();
  var msg = {};
  while(s) {
    var key = s.get_hardwareId();
    if (! key in Sensors) {
      Sensors[key] = s;

      process.send({add: {
        id: key,
        unit: s.get_unit(),
        resolution: s.get_resolution(),
      }});
    }
    msg[key] = s.get_currentValue();
    s = s.nextSensor();
  }

  process.send({update: msg});
}

*/
