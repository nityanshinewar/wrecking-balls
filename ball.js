class Ball{
    constructor(x, y, radius) {
        var options = {
            restitution :0.4,
            friction :1.0,
            density:0.9
        }
        this.body = Bodies.circle(x, y,radius, options);
        this.radius = radius;
        World.add(world, this.body);
      }
      display(){
        var pos= this.body.position;
        fill("black");
        stroke("black");
        strokeWeight(3)
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius);
      }
  }