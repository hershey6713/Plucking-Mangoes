class Boy {
    constructor(x, y, width, height) {
        this.width = width;
        this.height = height;
        this.boy = Bodies.rectangle(x, y, this.width, this.height);
        Body.setStatic(this.boy, true);
        this.image = loadImage("boy.png");
        World.add(world, this.boy);
    }

    display(){
        imageMode(CENTER);
        image(this.image, this.boy.position.x, this.boy.position.y, this.width, this.height);
    }
}