class Mango {
    constructor(x, y, radius) {
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1
        }
        this.radius = radius;
        this.mango = Bodies.circle(x, y, this.radius, options);
        Body.setStatic(this.mango, true);
        this.image = loadImage("mango.png");
        World.add(world, this.mango);
    }

    display(){
        imageMode(CENTER);
        image(this.image, this.mango.position.x, this.mango.position.y, this.radius, this.radius);
    }
}