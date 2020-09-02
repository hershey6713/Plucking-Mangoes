class Ground {
    constructor(x, y, width, height) {
        this.width = width;
        this.height = height;
        this.ground = Bodies.rectangle(x, y, this.width, this.height);
        Body.setStatic(this.ground, true);
        World.add(world, this.ground);
    }

    display(){
        rectMode(CENTER);
        push();
        fill(51, 224, 39);
        stroke(49, 151, 41);
        rect(this.ground.position.x, this.ground.position.y, this.width, this.height);
        pop();
    }
}