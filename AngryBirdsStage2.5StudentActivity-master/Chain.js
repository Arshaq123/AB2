class Chain {
    //bird and pig
    constructor(bodyA,bodyB) {
     
        var chain_options ={
            bodyA : bodyA,
            bodyB : bodyB,
            length : 15,
            stifness : 0.01 
     }
 
     this.chain = Constraint.create(chain_options);
     World.add(world,this.chain);   
 
 }

display(){

    line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y);

}

 
}

