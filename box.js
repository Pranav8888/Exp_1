function Box (x, y, w, h) {

    
    this.body = Bodies.rectangle(x, y, w, h);
    this.body.setStatic = false;
    this.body.restitution = 0.6;
    this.body.friction = 0.3;
    
    

    this.w = w;
    this.h = h;

    World.add(world, this.body);

    this.show =  function() {
        var pos = this.body.position;
        var angle = this.body.angle;
        
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        
        stroke(255);
        fill(127);
        strokeWeight(1);
        rect(0, 0, this.w, this.h, angle);

        pop();

    }
}