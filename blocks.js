class Block extends BaseClass {
    constructor(x, y, color) {
        super(x, y , 50, 40);

        Matter.Body.setStatic(this.body, false);

        this.color = color;
    }
    display() {
        push();
        super.display();
        rectMode(CENTER);
        fill(this.color);
        rect(this.body.position.x, this.body.position.y, 50, 40);
        pop();
    }
}