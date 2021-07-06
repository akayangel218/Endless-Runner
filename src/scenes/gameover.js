class GameOver extends Phaser.Scene {
    constructor() {
        super("gameoverScene");
    }

    create() {
        // Game Over Text configuration
        let Goverconfig = {
            fontFamily: 'Courier',
            fontSize: '35px',
            backgroundColor: 'white',
            color: 'black',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        // text
        this.add.text(game.config.width / 2, game.config.height / 2 - borderUISize - borderPadding, 'GAME OVER', Goverconfig).setOrigin(0.5);
        this.add.text(game.config.width / 2, game.config.height / 2, 'Press R to Try Again or M for Menu', Goverconfig).setOrigin(0.5);

        // keys
        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);

    }

    update() {
        // check key input for restart
        if (Phaser.Input.Keyboard.JustDown(keyR)) {
            this.scene.start("playScene");
        }

        if (Phaser.Input.Keyboard.JustDown(keyM)) {
            this.scene.start("menuScene");
        }
    }
}
