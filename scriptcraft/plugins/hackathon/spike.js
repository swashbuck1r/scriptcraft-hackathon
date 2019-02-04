'use strict';
var Drone = require('drone'),
blocks = require('blocks'),
utils = require('utils'),
splash = require('sounds');

command( 'spike', function( parameters, player ) {
    var drone = new Drone(player);
    //drone.box('5').up(3).left(4).box('1').turn(3).fwd(5).right().box('1').move('start')
    drone.box0(98,7,3,5).right(3).door().up(3).left(3).prism0(53,5,7)
});

//jsp clear <size>
command( 'clear', function( parameters, player ) {
    var drone = new Drone(player);
    if(parameters.length == 0) {
        echo( player, "You must define a size to clear" );
        return;
    }
    var size = parseInt(parameters[0]);
    //drone.box(blocks.wood, size, 10, size) //clear house area
    drone.box(0,size,20,size);
});
