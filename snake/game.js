/* game objects */

var directionEnum = {
    UP: 1, 
    RIGHT: 2, 
    DOWN: 3, 
    LEFT: 4,
}

class joint {

    constructor(x, y, direction, type){
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.type = type;
    }
}

class snake {

    constructor(x, y){
        this.pos = {x: x, y: y};

        this.joints = [];
        this.joints.push(new joint(0, 0, directionEnum.RIGHT, 'head'));            
        this.joints.push(new joint(0, 0, directionEnum.RIGHT, 'joint'));            
        this.joints.push(new joint(0, 0, directionEnum.RIGHT, 'tail'));            
    }

    move(){

    }
}


/* game */

var score = 0;

var config = {
    type: Phaser.AUTO,
    width: 400,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
}

var game = new Phaser.Game(config);

function preload(){
    this.load.image('grass', 'assets/images/grass.png')
}

/* create */

function create(){
    this.add.image(200, 300, 'grass')

    createText(this);
    createSnake(this);

    cursors = this.input.keyboard.createCursorKeys();
}

function createSnake(game){
    theSnake = new snake(0,0);
    
}

function createText(game){
    scoreText = game.add.text(16, 16, 'Score: 0', {
        fontFamily: 'Spicy Rice',
        fontSize: '32px', 
        fill: '#88ff88'
    });
}

/* update */

function update(){

}

function updateSnake(){
    
}

function updateScore(){

}