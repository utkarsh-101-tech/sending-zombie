class Zombie {
    constructor(x, y, w, h, pos) {
        var options = {
            isStatic: false,
        }

        this.zombieImg = loadAnimation("assets/wlk/(1).png", "assets/wlk/(2).png", "assets/wlk/(3).png", "assets/wlk/(4).png", "assets/wlk/(5).png", "assets/wlk/(6).png", "assets/wlk/(7).png", "assets/wlk/(8).png", "assets/wlk/(9).png", "assets/wlk/(10).png");                     
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
        this.life = 100;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x, pos.y);
        rotate(angle);
        animation(this.zombieImg, 0, 0);
        pop();
    }

    move() {
        Matter.Body.translate(this.body, { x: -1.5, y: 0 });
    }
}