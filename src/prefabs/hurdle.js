// Hurdle prefab
class Hurdle extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.moveSpeed = game.settings.hurdleSpeed;
    }

    update() {
        // move spaceship down
        this.y += this.moveSpeed;

        // wrap around from bottom edge to top edge
        if (this.y >= 480) {
            this.reset();
        }
    }

    // position reset
    reset() {
        this.y = 0;
        //this.x = 0;
    }
}