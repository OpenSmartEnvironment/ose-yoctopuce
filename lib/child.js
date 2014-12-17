'use strict';

process.on('message', function(m) {
//  console.log('CHILD got message:', m);
});

var Y = require('yoctolib');

var Sensors = {};

init();
setInterval(sendAll, 60000);
sendAll();

function init() {
  Y.YAPI.RegisterHub('http://127.0.0.1:4444/');

  var s = Y.YSensor.FirstSensor();
  var msg = {};
  while(s) {
    var key = s.get_hardwareId();
    Sensors[key] = s;
    msg[key] = {
      unit: s.get_unit(),
      resolution: s.get_resolution(),
    };
    s = s.nextSensor();
  }

  process.send(msg);
}

function sendAll(){
  var msg = {};
  for (var key in Sensors) {
    var s = Sensors[key];
    if (s.isOnline() && (typeof s.get_currentValue === 'function')) {
      msg[key] = {
        value: s.get_currentValue(),
      };
    }
  }

  process.send(msg);
};

