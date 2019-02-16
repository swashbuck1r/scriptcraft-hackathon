'use strict';
var Drone = require('drone'),
blocks = require('blocks'),
utils = require('utils'),
splash = require('sounds');

command( 'russell-hello', function( parameters, player ) {
    echo( player, 'Hello Spike!'  );
  });

command( 'rwcastle', function( parameters, player ) {
    var drone = new Drone(player);
    drone.box0(4, 24, 12, 24).right(24).box0(4, 6, 18, 6).depth(24).box0(4, 6, 18, 6).left(24)
});