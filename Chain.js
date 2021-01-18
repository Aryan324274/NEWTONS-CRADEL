class Chain{
    constructor(body1,point){  
        var options={
            bodyA:body1,
            pointB:point,
            length:1,
            stiffness:0.04
    
         }
        this.chain=Constraint.create(options);
         World.add(world,this.chain)

}
        display(){
            var pointA=this.chain.bodyA.position
            var pointB=this.chain.pointB
            strokeWeight(3)
            line(pointA.x,pointA.y,pointB.x,pointB.y)
            
        }



}