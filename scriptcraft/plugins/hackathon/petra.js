'use strict';
var Drone = require('drone'),
blocks = require('blocks'),
utils = require('utils'),
splash = require('sounds');

command( 'petra', function( parameters, player ) {
    var drone = new Drone(player);
    //drone.box('5').up(3).left(4).box('1').turn(3).fwd(5).right().box('1').move('start')
    drone.box0(50,7,3,5).right(3).door().up(3).left(3).prism0(53,7,5)
});

command( 'petra-hello', function( parameters, player ) {
  echo( player, 'Hey Petra!'  );
});
command( 'izzie-whats-up', function( parameters, player ) {
  echo( player, 'hello'  );
});
// izzie's house goes here
command( 'izzie', function( parameters, player ) {
    var drone = new Drone(player);
    //drone.box('5').up(3).left(4).box('1').turn(3).fwd(5).right().box('1').move('start')
    drone.box0(50,8,2,6).right(2).door().up(5).left(4).prism0(46,7,5)
});
