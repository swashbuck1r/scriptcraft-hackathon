'use strict';
var Drone = require('drone'),
blocks = require('blocks'),
utils = require('utils'),
splash = require('sounds'),
items = require('items'),
inventory = require('inventory');

// jsp kristin
command( 'kristin', function( parameters, player ) {
    var drone = new Drone(player);
    drone.dancefloor()
    drone.up().left().back().box0(29,7,3,7).right(3).door().up(3).left(3).prism0(53,7,7);
    //console.log(drone.getLocation());
    drone.up().back().right(5).wallsign(['Welcome','to the','Dancefloor!']);
});

// Summon a ride!
// jsp giddyup <name_of_animal>
command( 'giddyup', function(parameters, player) {
    var drone = new Drone(player);
    if(parameters.length == 0) {
        echo( player, "You can try riding a pig, horse, or llama" );
        return;
    }
    var name = ('' + parameters[0]);
    switch(name){
        case 'pig':
        drone.spawn('PIG');
        inventory(player).add( items.saddle(1));
        inventory(player).add( items.carrotStick(1));
        break;
        case 'horse':
        drone.spawn('HORSE');
        inventory(player).add( items.saddle(1));
        break;
        case 'llama':
        drone.spawn('LLAMA');
        inventory(player).add( items.lead(1));
        break;
        default:
        echo( player, "You can try riding a pig, horse, or llama" );
        break;
    }
});