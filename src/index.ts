import Phaser from 'phaser';

const ASSETS = {
  SKY: require('./assets/sky.png') as string,
  STAR: require('./assets/star.png') as string,
  PLATFORM: require('./assets/platform.png') as string,
  BOMB: require('./assets/bomb.png') as string,
  DUDE: require('./assets/dude.png') as string,
};

export default class Demo extends Phaser.Scene {
  private platforms : Phaser.Physics.Arcade.StaticGroup;
  constructor() {
    super('demo');
  }

  preload() {
    this.load.image('sky', ASSETS.SKY);
    this.load.image('ground', ASSETS.PLATFORM);
    this.load.image('star', ASSETS.STAR);
    this.load.image('bomb', ASSETS.BOMB);
    this.load.spritesheet('dude', ASSETS.DUDE, { frameWidth: 32, frameHeight: 48 });
  }

  create() {
    this.add.image(400, 300, 'sky');
    this.platforms = this.physics.add.staticGroup();
    this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();
    this.platforms.create(600, 400, 'ground')
    this.platforms.create(50, 250, 'ground')
    this.platforms.create(750, 220, 'ground') 
  }
  
  update() {}
}

const config : Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: 'phaser-game-canvas',
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false,
    }
  },
  scene: Demo,
};

const game = new Phaser.Game(config);
