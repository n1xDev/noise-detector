/*var Cylon = require('cylon');

Cylon.robot({
connections: {
edison: { adaptor: 'intel-iot' }
},
devices: {
led: { driver: 'led', pin: 4, connection: 'edison' },
led_s: { driver: 'led', pin: 3, connection: 'edison' }
},
work: function(my) {
setInterval(function() {
my.led.toggle();
my.led_s.toggle();
}, 1000);
}
}).start();*/

/*var Cylon = require('cylon');

Cylon
.robot()
.connection('edison', { adaptor: 'intel-iot' })
.device('touch', { driver: 'button', pin: 2, connection: 'edison' })
.on('ready', function(my) {
my.touch.on('push', function() {
console.log('AAAA');
});

my.touch.on('release', function() {
console.log('WAAAAAAAA');
});
});

Cylon.start();*/

/*var Cylon = require('cylon');

function writeToScreen(screen, message) {
screen.setCursor(0,0);
screen.write(message);
}

Cylon
.robot({ name: 'LCD'})
.connection('edison', { adaptor: 'intel-iot' })
.device('screen', { driver: 'upm-jhd1313m1', connection: 'edison' })
.on('ready', function(my) {
writeToScreen(my.screen, "Ready!");
})
.start();*/

/*var Cylon = require('cylon');

Cylon
.robot({ name: 'Rotary'})
.connection('edison', { adaptor: 'intel-iot' })
.device('rotary', { driver: 'analogSensor', pin: 0, connection: 'edison' })
.on('ready', function(my) {
var sensorVal = 0;
my.rotary.on('analogRead', function(data) {
sensorVal = data;
console.log("Reading: " + sensorVal);
});
})
.start();*/

/*var Cylon = require('cylon');
var sensorVal = 0;
var cycle_num = 0;

function writeToScreen(screen, message) {
	screen.setCursor(0,0);
	screen.write(message);
}

Cylon
  .robot({ name: 'Rotary'},{ name: 'LCD'})
  .connection('edison', { adaptor: 'intel-iot' })
  .device('led', { driver: 'led', pin: 3, connection: 'edison' })
  .device('touch', { driver: 'button', pin: 7, connection: 'edison' })
  .device('rotary', { driver: 'analogSensor', pin: 0, connection: 'edison' })
  .device('touch', { driver: 'button', pin: 2, connection: 'edison' })
  .device('screen', { driver: 'upm-jhd1313m1', connection: 'edison' })
  .on('ready', function(my) {
    my.touch.on('press', function() {
      my.led.turnOn();
      console.log("Pressed ");
    });
    my.touch.on('release', function() {
    	my.led.turnOff();
    	cycle_num++;
    	writeToScreen(my.screen, '' + cycle_num);
        console.log("Pressed");
    });
    writeToScreen(my.screen, "Pidor, Mydak!");
    my.led.turnOn();
    my.rotary.on('analogRead', function(data) {
	sensorVal = data;
	console.log("Angle: " + sensorVal);
	});
  });
Cylon.start();*/

var Cylon = require('cylon');

Cylon
  .robot({ name: 'Temperature'})
  .connection('edison', { adaptor: 'intel-iot' })
  .device('sensor', { driver: 'analogSensor', pin: 0, connection: 'edison' })
  .on('ready', function(my) {
    var sensorVal = 0;
    var ready = false;

    my.sensor.on('analogRead', function(data) {
      sensorVal = data;
      console.log('Sound Sensor Value:' + sensorVal);
    });

    setInterval(function() {
      if (ready) {
        var toSend = {
          analogSensor: sensorVal
        };
        if (err != null) {
          console.log("Error sending analog sensor information: " + err);
        }
      }
    }, 2000);
  })
  .start();