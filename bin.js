class Bin{

    constructor(x, y, width, height){

        this.x = x
        this.y = y
        this.height = height
        this.width = width
        this.image = loadImage("dustbingreen.png")

        var options = {
            isStatic: true,
        }
    
    this.body = Bodies.rectangle(x, y, width, height, options)

   

    

    World.add(world, this.body)
	
    }

    display(){

        var pos2 = this.body.position
        image(this.image,1100,475,250,200)
        

        push()
        translate(pos2.x, pos2.y);
        rectMode(CENTER);
        //rect(0,0, this.width, this.height)
        
        pop();

    }
}