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

function create(){
    this.add.image(200, 300, 'grass')

    scoreText = this.add.text(16, 16, 'Score: 0', {
        fontFamily: 'Spicy Rice',
        fontSize: '32px', 
        fill: '#88ff88'
    });

    cursors = this.input.keyboard.createCursorKeys();
}

function update(){
    if(cursors.space.isDown){
        $('#splash').hide();
    }


}