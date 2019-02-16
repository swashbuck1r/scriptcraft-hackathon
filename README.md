
To run on any server (replace $YOUR_MINECRAFT_DIR):

    docker run -p 25565:25565 -v $YOUR_MINECRAFT_DIR:/minecraft -it tclavier/scriptcraft

To run the server on Mac from your current directory:

    docker run -p 25565:25565 -v $PWD:/minecraft -it tclavier/scriptcraft


Setting admin permissions:
When you connect to your local server with a minecraft client, it will tell you your UUID in the console output.

Edit the ops.json file to add yourself as an admin:

{
    "uuid": "UUID-goes-here",
    "name": "USERNAME-goes-here",
    "level": 4
  },

Commit this file back to the repo so it is available on the shared server.


Docs and Guides
---------------

* [Young Persons Guide to Programming Minecraft](https://github.com/walterhiggins/ScriptCraft/blob/master/docs/YoungPersonsGuideToProgrammingMinecraft.md)
 * [Scriptcraft blocks](https://github.com/walterhiggins/ScriptCraft/blob/master/docs/YoungPersonsGuideToProgrammingMinecraft.md#common-block-materials)
* [API reference](https://github.com/walterhiggins/ScriptCraft/blob/development/docs/API-Reference.md)
 * [Drone Movement](https://github.com/walterhiggins/ScriptCraft/blob/development/docs/API-Reference.md#drone-movement)



Defining your first JS command
------------------------------

To get started, place a js file into the `scriptcraft/plugins/hackathon` directory

```
command( 'spike-hello', function( parameters, player ) {
  echo( player, 'Hello Spike!'  );
});
```

Reload your JS file changes: 

```
/js refresh()
```

Run your command

```
/jsp spike-hello
```

Tip: try to avoid clashiong on command names -- prefix with your initials

Defining a construction command
-------------------------------
command( 'dwelling', function( parameters, player ) {
    var drone = new Drone(player);
    drone.box0(98,7,3,5).right(3).door().up(3).left(3).prism0(53,7,5)
});


Handy commands
--------------

Setting the global spawn point:

    /setworldspawn

Adjust the time to day time:

    /time set 1000