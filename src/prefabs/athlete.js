// Athlete prefab
class Athlete extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.body.setAllowGravity(false);
        this.body.immovable = true;
        this.body.setSize(20, 20, 20, 20);
        this.moveSpeed = 6; // pixels per frame
        this.temp = 0;
    }

    update() {
        // left/right movement
        if (keyLEFT.isDown) {
            this.x -= this.moveSpeed;
        } else if (keyRIGHT.isDown) {
            this.x += this.moveSpeed;
        }

        // jump
        if (keySPACE.isDown) {
            this.temp = this.y;
            this.y -= 20;
        }
    }

    // reset player to ground
    reset() {
        if(this.y != this.temp) {
            this.y += 20;
        }
    }
}