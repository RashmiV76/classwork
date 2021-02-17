class Ground {

    constructor(x,y,width,height){

    var options ={
        isStatic:true
    }
    this.body=Bodies.rectangle(x,y,width,height,options)
    this.width=width;
    this.height=height;
    world.add(this.body,world);
}

 display(){

    push()
    stroke(0);
    stokeWeight(5)
    fill ("indigo")
    rectMode(CENTER)
    rect(this.body.position.x,this.body.position.y,this.width,this.height)
    pop ();


 }
}