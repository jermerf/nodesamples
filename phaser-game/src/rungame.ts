export class RunGame extends Phaser.Scene {
  protected player: Phaser.Physics.Arcade.Sprite;
  protected background: Phaser.GameObjects.Image;
  constructor() {
    super({ key: "RunGame" });
  }
  protected preload() {
    this.load.image("environment", "img/background.png");
    this.load.spritesheet("player",
      "img/black-dog-sprite-sheet.png",
      { frameWidth: 50, frameHeight: 100 },
    );
  }
  protected create() {
    this.makeEnvironment();
    this.makePlayer();
  }
  protected makeEnvironment(): void {
    this.background = this.add.image(0, 0, "environment")
      .setOrigin(0, 0)
      .setInteractive();
    this.background.on("pointerup", this.pointerup, this);
  }
  protected makePlayer(): void {
    this.player = this.physics.add.sprite(100, 128, "player")
      .setOrigin(0.5, 0.5);
  }
  protected pointerup(pointer: Phaser.Input.Pointer) {
    this.player.setPosition(pointer.downX, pointer.downY);
  }
}