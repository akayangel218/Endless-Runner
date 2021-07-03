// Hurdle prefab
class Hurdle extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        //this.moveSpeed = game.settings.hurdleSpeed;
    }
}