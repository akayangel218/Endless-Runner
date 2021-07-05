class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {

        // load audio
        this.load.audio('muzik', './assets/title_bounce.wav');

        // load bg tile sprite
        this.load.image('track', './assets/background.png');

        // load images
        this.load.image('athlete', './assets/athlete.png');
        this.load.image('hurdle', './assets/hurdle.png');
        this.load.image('hurdle', './assets/spike.png');
    }

    create() {
        //this.add.text(20, 20, 'test');

        //place tile sprite
        this.track = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'track').setOrigin(0, 0);

        // green UI background
        this.add.rectangle(0, 0, game.config.width, borderUISize * 2, 0x0000FF).setOrigin(0, 0);
        
        // add hurdles
        this.hurdle01 = new Hurdle(this, game.config.height - borderUISize * 4, borderUISize * 4, 'hurdle', 0, 30).setOrigin(0, 0);
        this.hurdle01.setScale(.15);
        //this.hurdle02 = new Hurdle(this, game.config.height - borderUISize * 3, borderUISize * 5 + borderPadding * 2, 'hurdle', 0, 20).setOrigin(0, 0);
        //this.hurdle02.setScale(.3);

        // add player
        this.p1athlete = new Athlete(this, game.config.width/2, game.config.height - borderUISize - 30, 'athlete').setOrigin(0.5, 0);

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACEBAR);

        // GAME OVER flag
        this.gameOver = false;

        // initialize score
        this.p1Score = 0;

        // start music here
        this.sound.play('muzik');
        this.sound.setVolume(0.1);

        // display score
        let scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 100
        }
        this.scoreLeft = this.add.text(20, 15, this.p1Score, scoreConfig);


    }

    update() {

        this.p1athlete.update(); // update p1
        // check key input for restart
        if (!this.gameOver) {
            this.hurdle01.update(); // update spaceship (x3)
            //this.hurdle02.update();
            //this.hurdle03.update();
            this.track.tilePositionY -= 6;
        }
    }
}