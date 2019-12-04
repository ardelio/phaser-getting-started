import Phaser from 'phaser';

export default class Demo extends Phaser.Scene {
  constructor() {
    super('demo');
  }

  preload() {}

  create() {}
  
  update() {}
}

const config : Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: 'phaser-game-canvas',
  width: 800,
  height: 600,
  scene: Demo,
};

const game = new Phaser.Game(config);
