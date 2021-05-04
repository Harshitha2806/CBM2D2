class Dustbin {
    constructor(x, y, width, height) {
      var options = 
      {
          isStatic : true
      }
      this.body = Bodies.rectangle(x, y, 200, 20, options);
      this.body2 = Bodies.rectangle(x, y, 20, 100, options);
      this.body3 = Bodies.rectangle(x, y, 20, 100, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("dustbingreen.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      imageMode (CENTER);
      //rectMode(CENTER);
      //fill(255);
      //rect(0,0, this.width, this.height);
      image (this.image,0,0,this.width,this.height);
      pop ();
    }
  };
  