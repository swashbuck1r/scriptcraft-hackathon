command( 'hello', function( parameters, player ) {
  echo(player, 'Hello, ' + player + '!');
});

command( 'build-house', function( parameters, player ) {
  var drone = new Drone(player);
  //drone.box('5').up(3).left(4).box('1').turn(3).fwd(5).right().box('1').move('start')
  drone.box0(98,7,3,5).right(3).door().up(3).left(3).prism0(53,5,7)
});

command('build-temple', function( parameters, player ) {
  var drone = new Drone(player);

  var side = parseInt(parameters[0]);

  drone.temple(side);
});

command('write', function( parameters, player ) {
  var drone = new Drone(player);

  var text = parameters[0];

  drone.blocktype(text, blocks.glowstone);
});