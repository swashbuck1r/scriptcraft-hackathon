'use strict';
var Drone = require('drone'),
blocks = require('blocks'),
utils = require('utils'),
splash = require('sounds');

command( 'rw-house', function( parameters, player ) {
    var drone = new Drone(player);
    drone.box0(98,7,3,5).right(3).door().up(3).left(3).prism0(53,7,5)
});

command( 'rw-text', function( parameters, player ) {
    var drone = new Drone(player);
    drone.blocktype(' CloudBees\nHack-a-thon', blocks.glowstone)
});

command( 'rw-castle', function( parameters, player ) {
    var drone = new Drone(player);
    drone.castle()
});

command( 'rw-dancefloor', function( parameters, player ) {
    var drone = new Drone(player);
    drone.dancefloor()
});