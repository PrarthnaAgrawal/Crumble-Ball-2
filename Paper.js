class Paper {
    constructor(x,y,r){
       var Options={
           isStatic:false,
           restitution:0.3,
           friction:0.5,
           density:1.2
       }
       this.body=Bodies.circle(x,y,r,Options)
       this.x=x
       this.y=y
       this.r=r
       World.add(world,this.body)
       this.image=loadImage("paper.png")
    }
    display(){
        var pos=this.body.position
        push()
        translate(pos.x,pos.y)
        ellipseMode(RADIUS)
        image(this.image,0,0,this.r,this.r)
        pop();
    }
}