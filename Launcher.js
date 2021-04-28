class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 1.2,
            length : 250
        }

        this.pointB=pointB;
        this.launcher=Constraint.create(options);
        World.add(world,this.launcher);
    }

    attach(body){
      this.launcher.bodyA=body;  
    }

    fly(){
        this.launcher.bodyA=null;
    }
    
    display(){
        if(this.launcher.bodyA){
            var pointA = this.launcher.bodyA.position;
            var pointB = this.pointB;
            push();

         stroke(48,22,8);
         strokeWeight(3);

          line(pointA.x,pointA.y,pointB.x,pointB.y)

          pop();
        }
    }
   
}