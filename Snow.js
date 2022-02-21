class Snow{
    constructor(x,y){
        var options = {
            isStatic: false,
            friction: 0.5,
            density : 7,
        }
        this.snow = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("snow4.webp");
        this.image.scale = 0.5
        World.add(world,this.snow);

    }
    display(){
        push();
        translate(this.snow.position.x, this.snow.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 100, 100);
        pop();
      }
}