class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    create() {
        // menu text configuration
        let menuConfig = {
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

        // show menu text
        this.add.text(game.config.width / 2, game.config.height / 2 - borderUISize - borderPadding, 'Infinite Meter Dash', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width / 2, game.config.height / 2, 'Press S to start', menuConfig).setOrigin(0.5);
        //menuConfig.backgroundColor = '#00FF00';
        //menuConfig.color = '#000';

        // define keys
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

        // game settings
        game.settings = {
            hurdleSpeed: 3,
            //gameTimer: 60000    
        }
    }

    update() {
        //this.scene.start("playScene");
        //console.log("test");
        if (Phaser.Input.Keyboard.JustDown(keyS)) {
            this.scene.start("playScene");
        }
    }
}