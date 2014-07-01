line_width = 3;
var players_mass = 65;
var ball_mass = 65;
var players_drag = 59.0;
var ball_drag = 29.0;
var player_vel = 100.0;
game = null;
ball = null;
platforms = null;
players = null;
my_player = null;
window.onload = function(){
  game = new Phaser.Game(800, 600, Phaser.AUTO, 'battlefield', { preload: preload, create: create, update: update });
}

function preload() {
  game.load.image('ball', 'assets/ball.png');
  game.load.image('player', 'assets/player.png');
  game.load.image('1px', 'assets/1px.png');
}

function createPlayer(){
  player = players.create(game.world.centerX + 64,game.world.centerY, 'player');
  game.physics.p2.enable(player,false);
  player.body.mass = players_mass;
  player.body.setCircle(16);
  player.scale.setTo(0.5,0.5);
  my_player = player;
}

function keydown(a){
  if(a.keyCode == Phaser.Keyboard.UP){
    my_player.body.velocity.y = -player_vel;
  }else if(a.keyCode == Phaser.Keyboard.DOWN){
    my_player.body.velocity.y = player_vel;
  }else if(a.keyCode == Phaser.Keyboard.LEFT){
    my_player.body.velocity.x = -player_vel;
  }else if(a.keyCode == Phaser.Keyboard.RIGHT){
    my_player.body.velocity.x = player_vel;
  }
}

function keyup(a){
}

function create() {
  game.physics.startSystem(Phaser.Physics.P2JS);
  game.physics.p2.restitution = 0.9;
  game.input.keyboard.addCallbacks(this, keydown, keyup);
  game.input.keyboard.addKey(Phaser.Keyboard.UP);
  game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
  game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
  game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
  ball = game.add.sprite(game.world.centerX, game.world.centerY, 'ball');
  ball.collideWorldBounds = true;
  game.physics.p2.enable(ball,false);
  ball.scale.setTo(0.5,0.5);
  ball.body.velocity.x = 63;
  ball.body.mass = ball_mass;
  ball.body.setCircle(16);

  players = game.add.group();
  //players.enableBody = true;
  game.physics.p2.enable(players,false);
  platforms = game.add.group();
  platforms.enableBody = true;
  var bottomLine = platforms.create(line_width, game.world.height - (line_width * 3), '1px');
  bottomLine.scale.setTo(game.world.width - line_width*2, line_width*2);
  bottomLine.body.immovable = true;
  var topLine = platforms.create(line_width, line_width, '1px');
  topLine.scale.setTo(game.world.width - line_width*2, line_width*2);
  topLine.body.immovable = true;
  var rightLine = platforms.create(game.world.width - (line_width * 3), line_width,'1px');
  rightLine.scale.setTo(line_width * 2, game.world.height - line_width*2);
  rightLine.body.immovable = true;
  var leftLine = platforms.create(line_width, line_width, '1px');
  leftLine.scale.setTo(line_width * 2, game.world.height - line_width*2);
  leftLine.body.immovable = true;
  createPlayer();
  game.physics.p2.setImpactEvents(true);
}

function update() {
  //game.physics.p2.collide(ball, platforms);
  //game.physics.p2.collide(ball, players);
  if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
    my_player.body.velocity.y = -player_vel;
  }
  if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
    my_player.body.velocity.y = player_vel;
  }
  if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
    my_player.body.velocity.x = - player_vel;
  }
  if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
    my_player.body.velocity.x = player_vel;
  }
}
