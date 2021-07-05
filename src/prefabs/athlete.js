// Athlete prefab
class Athlete extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.moveSpeed = 3; // pixels per frame
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
            while (this.y < 20) {
                this.y += 10;
            }
        }
    }

    // reset player to ground
    reset() {
        while (this.y > 50) {
            this.y -= 10;
        }
    }
}