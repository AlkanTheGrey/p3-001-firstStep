# p3-001-firstStep

A simple example of how to create a phaser 3 game. The game just simulates the bouncing of a ball but teaches a few key concepts.

> let GAME = new Phaser.Game( GAME_CONFIG );

This is how a phaser game is initiated, the __*GAME_CONFIG*__ will change depending on the game being made.

The *create* funtion used exposes a few basics on creating gameobjects. In this case a simple ellipse object is created. Using the physics manager *( defined in our game_config to be Arcade )*, a physics body is added to the ball to allow collisions to occur with it.

The ball is then instructed to allow collision with our world boundary, and given a bounce factor of 1 to allow it to be thrown back with all the force of collision. The ball then is given a random velocity to start at. __*Essentially giving us pong, but without the paddles*__

