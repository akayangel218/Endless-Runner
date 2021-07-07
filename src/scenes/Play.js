class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {

        // load audio
        this.load.audio('muzik', './assets/title_bounce.wav');

        // load bg tile sprite
        this.load.image('track', './assets/straightBG.png');

        // load images
        this.load.image('athlete', './assets/athlete.png');
        this.load.image('hurdle', './assets/hurdle.png');
        this.load.image('spike', './assets/spikeFix.png');
    }

    create() {

        this.physics.world.gravity.y = 450;
        //place tile sprite
        this.track = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'track').setOrigin(0, 0);

        // score UI background
        this.add.rectangle(0, 0, game.config.width, borderUISize * 2, 0x0000FF).setOrigin(0, 0);

        // add hurdles
        //this.hurdle01 = new Hurdle(this, game.config.height - borderUISize * 5, borderUISize * 4, 'hurdle', 0, 30).setScale(.3, .15).setOrigin(0, 0);


        // add player
        this.p1athlete = new Athlete(this, 315, 400, 'athlete').setOrigin(0.5, 0);


        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        // GAME OVER flag
        this.gameOver = false;

        // initialize score
        this.p1Score = 0;

        // start music here
        music = this.sound.add('muzik');
        music.loop = true;
        music.play();
        music.setVolume(0.1);

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

        // test text location
        //this.add.text(450, 200, 'location');
    }

    update() {
        // game over
        if (this.gameOver) {
            music.stop();
            this.scene.start("menuScene");
        }

        if ((this.p1athlete.x <= 120 || this.p1athlete.x >= 490) && !(keyLEFT.isDown)) {
            this.gameOver = true;
        }

        this.p1athlete.update(); // update p1
        // check key input for restart
        if (!this.gameOver) {
            // track vertical movement
            this.track.tilePositionY -= 6;
            // random obstacle right lane
            if (1 == Phaser.Math.RND.integerInRange(1, 500)) {
                let temp = Phaser.Math.RND.integerInRange(0, 1);
                if (temp == 1) {
                    tempScale = .4;
                } else {
                    tempScale = .315;
                }
                let obs = this.physics.add.sprite(game.config.height - borderUISize * 5, borderUISize, obstacles[temp]).setScale(tempScale, .1).setOrigin(0);
                obsArr.push(obs);
                this.p1Score += 10;
                this.scoreLeft.text = this.p1Score;
                //console.log('right lane');


            }
            // random obstacle left lane
            if (1 == Phaser.Math.RND.integerInRange(1, 500)) {
                let temp = Phaser.Math.RND.integerInRange(0, 1);
                if (temp == 1) {
                    tempScale = .4;
                } else {
                    tempScale = .315;
                }
                let obs = this.physics.add.sprite(game.config.height - borderUISize * 10.5, borderUISize, obstacles[temp]).setScale(tempScale, .1).setOrigin(0);
                obsArr.push(obs);
                this.p1Score += 10;
                this.scoreLeft.text = this.p1Score;
                //console.log('left lane');
            }
            //this.obs.update();

            // check for collisions

            this.physics.add.collider(this.p1athlete, obsArr, (p, e) => {
                //console.log('collided ', e);
                this.gameOver = true;
            });



        }
    }
}