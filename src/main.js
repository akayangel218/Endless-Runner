/* 
Kidüs Michael & Mateen Aminian: Programming
Ethan Case & Ashwin Gupta: Art & Design
Title: Infinite Metre Run
Date Completed: 6 July, 2021
Theme was our idea and all of the images are either created from scratch or royalty free
*/

let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    scene: [Menu, Play]
}

let game = new Phaser.Game(config);

// set UI sizes (for now)
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard vars
let keyLEFT, keyRIGHT, keySPACE, keyS, keyR, keyM;
let tempScale = 0;
let music;

// declare arrays
let obstacles = ["hurdle", "spike"];
let obsArr = [];