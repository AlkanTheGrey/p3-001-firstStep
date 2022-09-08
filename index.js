const COLORS = {
  blue_sapphire: 0x22577a,
  cadet_blue: 0x38a3a5,
  ocean_green: 0x57cc99,
  light_green: 0x80ed99,
  tea_green: 0xc7f9cc,
}

const GAME_CONTAINER = document.querySelector( "#game-container" );

const GAME_CONFIG = {
  type: Phaser.AUTO,
  width: 640,
  height: 320,
  scale: {
    mode: Phaser.Scale.ScaleModes.FIT
  },
  backgroundColor: COLORS.tea_green,
  parent: GAME_CONTAINER,
  physics:{
    default: "arcade"
  },
  scene: {
    create: create
  }
}

let GAME = new Phaser.Game( GAME_CONFIG );

/**This function creates objects to use in the game scene */
function create(){
  // create a ball
  let ball = this.add.ellipse( GAME_CONFIG.width / 2, GAME_CONFIG.height / 2, 50, 50, COLORS.cadet_blue  );

  // add physics to the ball
  this.physics.world.enableBody( ball, Phaser.Physics.Arcade.DYNAMIC_BODY );

  // make ball collide with the world bounds
  ball.body.setCollideWorldBounds( true );

  // set bounce of ball to full
  ball.body.setBounce( 1 );

  // add random velocity to ball
  let min_velocity = 50;
  let max_velocity = 150;
  let vel_x = Phaser.Math.Between( min_velocity, max_velocity );
  let vel_y = Phaser.Math.Between( min_velocity, max_velocity );

  ball.body.setVelocity( vel_x, vel_y );

  return;
}