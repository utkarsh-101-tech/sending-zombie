class Form {
    constructor() {

        this.play = createImg("assets/gui/play.png");
// this.volumeUp= createImg("assets/gui/volumeUp.png");
// this.volumeDown= createImg("assets/gui/volumeDown.png");
    }

    hide() {
        this.play.hide();
    }

    display() {
        this.play.position(displayWidth / 2, displayHeight / 2);
        this.play.size(330, 130);
        this.play.mousePressed(() => {
            gameState = GameState.load;
            this.play.hide();
        });

        // this.volumeUp.position(displayWidth/2,30);
        // this.volumeUp.size(170,170);
        // this.volumeUp.mousePressed(()=>{});

        // this.volumeDown.position(displayWidth/3,30);
        // this.volumeDown.size(170,170);
        // this.volumeDown.mousePressed(()=>{});
    }
}