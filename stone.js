class Stone {
    constructor(x, y, width, height) {
        this.width = width;
        this.height = height;
        var options = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }
        this.stone = Bodies.rectangle(x, y, this.width, this.height, options);
        this.image = loadImage("stone.png");
        World.add(world, this.stone);
    }

    display(){
        imageMode(CENTER);
        image(this.image, this.stone.position.x, this.stone.position.y, this.width, this.height);
    }
}