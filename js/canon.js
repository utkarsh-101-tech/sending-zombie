class Canon {
    constructor(x, y, w, h, angle) {
        this.x = x;
        this.y = y;     
        this.width = w;
        this.height = h;
        this.angle = angle;
        this.baseImg = loadImage("assets/wheel.png");
        this.snout = loadImage("assets/final.png");
        this.stand = loadImage("assets/stand.png");
        var options = {
            isStatic: false,
        }
        this.load = Bodies.rectangle(x, y, w, h, options);
    }
    display() {
        if (keyIsDown(RIGHT_ARROW) && this.angle<-0.69 ) {
            this.angle +=0.05;
            
        }
        if (keyIsDown(LEFT_ARROW)&& this.angle>-PI/1.5) {
            this.angle -= 0.05;
        }
        
        push();
        translate(this.x, this.y);
        rotate(this.angle);
        imageMode(CORNER);
        image(this.snout, 0,0, this.width, this.height);
        pop();
        imageMode(CENTER);
        image(this.stand, this.x-windowWidth/19.5 , this.y-windowHeight/62.26 , windowWidth/8, windowHeight/6.5);
        image(this.baseImg, this.x , this.y , windowWidth/13, windowWidth/13);
        
       
    }
}