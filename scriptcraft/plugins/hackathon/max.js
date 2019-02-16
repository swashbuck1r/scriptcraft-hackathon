'use strict';
var Drone = require('drone'),
blocks = require('blocks'),
utils = require('utils'),
splash = require('sounds');

command( 'max-hello', function( parameters, player ) {
    echo( player, 'Hello Spike!'  );
  });

command( 'mjhouse', function( parameters, player ) {
    var drone = new Drone(player);
    drone.box(67, 12, 1, 9).up(1).box0(41, 12, 5, 9).right(4).door().up(5).left(4).prism0(45, 12, 9);
});