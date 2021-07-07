/* 
Team Name: The Fellowship
Kidüs Michael & Mateen Aminian: Programming
Ethan Case & Ashwin Gupta: Art & Design
Title: Infinite Meter Dash
Date Completed: 7 July, 2021

*Theme was our idea and all of the images are either created from scratch or royalty free*

Creative Tilt (10 points)
Does your game...
...do something technically interesting? Are you particularly proud of a programming 
technique you implemented? Did you look beyond the class examples and learn how to do something new? (5) 

    "Our game uses arcade physics to handle the collisions between the player and obstacles. We also
    took advantage of Phaser's random number generator to randomize the obstacle persistence. To go
    along with this, we utilized Phaser 3 docs to learn how to implement looping music which resets
    properly from scene to scene." -The Fellowship

...have a great visual style? Does it use music or art that you're particularly proud of? Are you 
trying something new or clever with the endless runner form? (5)

    "We are very proud of our game's visual style because almost every single asset was created from scratch
    and the ones which weren't were obtained royalty-free. The handmade track background is meant to put
    the player in the atmosphere of the olympic games. We feel that our music adds to this theme as it 
    resembles the same similar sounds one would hear at the olympics. Our game music was also made entirely
    from scratch." -The Fellowship
    
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