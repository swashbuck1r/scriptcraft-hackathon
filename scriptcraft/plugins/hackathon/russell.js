'use strict';
var Drone = require('drone'),
blocks = require('blocks'),
utils = require('utils'),
splash = require('sounds');

command( 'russell-hello', function( parameters, player ) {
    echo( player, 'Hello Spike!'  );
  });

command( 'rwhouse', function( parameters, player ) {
    var drone = new Drone(player);
    drone.box0(5, 12, 5, 9).right(4).door().up(5).left(4).prism0(5, 12, 9);
});