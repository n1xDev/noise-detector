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

var Cylon = require('cylon');

Cylon
.robot({ name: 'Rotary'})
.connection('edison', { adaptor: 'intel-iot' })
.device('rotary', { driver: 'analogSensor', pin: 4, connection: 'edison' })
.on('ready', function(my) {
var sensorVal = 0;
my.rotary.on('analogRead', function(data) {
sensorVal = data;
console.log("Reading: " + sensorVal);
});
})
.start();