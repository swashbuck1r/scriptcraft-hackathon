'use strict';
var Drone = require('drone'),
blocks = require('blocks'),
utils = require('utils'),
splash = require('sounds');

command( 'spike', function( parameters, player ) {
    var drone = new Drone(player);
    //drone.box('5').up(3).left(4).box('1').turn(3).fwd(5).right().box('1').move('start')
    drone.box0(98,7,3,5).right(3).door().up(3).left(3).prism0(53,7,5)
});

//jsp clear <size>
command( 'clear', function( parameters, player ) {
    var drone = new Drone(player);
    if(parameters.length != 2) {
        echo( player, "The required parameters are base(int) and height(int)" );
        return;
    }
    var base = parseInt(parameters[0]);
    var height = parseInt(parameters[1]);
    echo(player, "Height = " + (height + 1));
    echo(player, "Base = " + base);
    //drone.box(blocks.wood, size, 10, size) //clear house area
    drone.box(0,base,height,base);
});

//jsp igloo
command( 'igloo', function( parameters, player ) {
    var drone = new Drone(player);
    drone.chkpt('igloo');
    //make basic structure
    drone.hemisphere0(blocks.snow, 7, 'north');
    drone.right(2).down(2);
    //clear door
    drone.back();
    drone.right(4);
    drone.up(2);
    drone.box(0, 2, 3, 2);
    return drone.move('igloo');
});