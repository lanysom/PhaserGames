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

var game = new Phaser.Game(config)

function preload(){
    this.load.image('grass', 'assets/grass.png');
    
    this.load.script('splash', 'states/splash.js');
}

function create(){
    this.add.image(200, 300, 'grass');

    scoreText = this.add.text(16, 16, 'Score: 0', {
        fontSize: '28px', 
        fontFamily: 'Spicy Rice', 
        fill: '#8f8'
    });

    this.state.add('splash', splash);
    this.state.start('splash');

    cursors = this.input.keyboard.createCursorKeys();

}

function update(){

}