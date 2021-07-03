class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {

        // load images
        this.load.image('hurdle', './assets/hurdle.png');
    }

    create() {
        this.add.text(20, 20, 'test');
    }
}