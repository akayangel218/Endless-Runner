
class GameOver extends Phaser.Scene {
    constructor() {
        super("gameoverScene");
    }

    create() {
        // should there be a menu config here???
        
        this.add.text(game.config.width/2, game.config.height/2, 'GAME OVER', scoreConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + 64, 'Press (R) to Try Again or <- for Menu', scoreConfig).setOrigin(0.5);
    }

    update() {
        // check key input for restart
        if (Phaser.Input.Keyboard.JustDown(keyR)) {
            this.scene.start("playScene");
        }

        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            this.scene.start("menuScene");
        }
    }
}
