class Tree{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            restitution:0
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.image=loadImage('tree.jpg');
        World.add(world,this.body);
    }
    display(){
        image(this.image,this.x,this.y,this.width,this.height);
    }
}