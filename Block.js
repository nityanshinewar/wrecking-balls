class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :2.0,
          density:0.10
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos= this.body.position;
      fill("white");
      stroke("black");
      strokeWeight(3)
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);
    }
}