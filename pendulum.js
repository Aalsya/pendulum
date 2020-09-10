class Bob {
    constructor(x) {
        var options = {
            restitution:1,
            friction:0,
            density:0.8,
            isStatic:true
        }
         this.radius = 100;
        this.body = Bodies.circle(x,600,100,options);
       

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("purple");
        ellipse(0,0,this.radius,this.radius);
        pop();
    } 
}
