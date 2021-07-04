class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {

        // load images
        this.load.image('hurdle', './assets/hurdle.png');
    }

    create() {
        //this.add.text(20, 20, 'test');

        // green UI background
        this.add.rectangle(0, 0, game.config.width, borderUISize * 2, 0x0000FF).setOrigin(0, 0);

        // GAME OVER flag
        this.gameOver = false;

        // initialize score
        this.p1Score = 0;

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

        // add hurdles
        this.hurdle01 = new Hurdle(this, game.config.height - borderUISize * 6, borderUISize * 4, 'hurdle', 0, 30).setOrigin(0, 0);
        this.hurdle01.setScale(.3);
        //this.hurdle02 = new Hurdle(this, game.config.height - borderUISize * 3, borderUISize * 5 + borderPadding * 2, 'hurdle', 0, 20).setOrigin(0, 0);
        //this.hurdle02.setScale(.3);
        //this.hurdle03 = new Hurdle(this, game.config.height, borderUISize * 6 + borderPadding * 4, 'hurdle', 0, 10).setOrigin(0, 0);
        //this.hurdle03.setScale(.3);
    }

    update() {
        if (!this.gameOver) {
            //this.p1Rocket.update(); // update p1
            this.hurdle01.update(); // update spaceship (x3)
            //this.hurdle02.update();
            //this.hurdle03.update();
        }
    }
}