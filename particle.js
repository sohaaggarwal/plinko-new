class Particle{
    constructor(x,y,radius){
    var options={
        isStatic:true
    }
    this.body=Bodies.circle(x,y,radius,options);
    this.radius=radius;
    this.color=colour(random(0,255),random(0,255),random(0,255));
    World.add(world,this.body);

    }
    display(){
        var pos =this.body.position;
          ellipseMode(CENTER);
          fill("brown");
          ellipse(pos.x, pos.y, this.radius, this.radius);
        }
    
    }
    