class Tree {
    constructor(x, y, width, height) {
        this.width = width;
        this.height = height;
        this.tree = Bodies.rectangle(x, y, this.width, this.height);
        Body.setStatic(this.tree, true);
        this.image = loadImage("tree.png");
        World.add(world, this.tree);
    }

    display(){
        imageMode(CENTER);
        image(this.image, this.tree.position.x, this.tree.position.y, this.width, this.height);
    }
}