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
        this.setDepth(10);
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
            this.body.enable = false;
            if (this.y <= 300) {
                this.y = 300;
            }
            //this.body.setAllowGravity(true);
        } else if (keySPACE.isUp) {
            //this.body.setAllowGravity(true);
            //this.body.enable = true;
            this.reset();
        }

        if (this.y < 400) {
            this.body.enable = false;
        }
        if (this.y == 400) {
            //this.reset();
            //this.body.setAllowGravity(false);
            this.body.enable = true;
        }
        //console.log(this.y); = 400 at start

    }

    // reset player to ground
    reset() {
        if (this.y != 400) {
            this.y += 2;
            this.body.enable = false;
        }
    }
}