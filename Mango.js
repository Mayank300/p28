class Mango{
  constructor(x, y, r){
    var options={
      isStatic:true,
      restitution:0,
      friction:1
    } 

    this.body = Bodies.circle(x, y, r, options);
    this.radius = r;
    this.image = loadImage("sprites/mango.png");
    World.add(world, this.body);
    this.visibility = 255;
  }
  display(){
    imageMode(CENTER);
    image(this.image, this.body.position.x, this.body.position.y, this.radius+2, this.radius+2);
  }
}

// class Mango extends BaseClass {
//   constructor(x,y,r){
//     var options={
//             isStatic:true,
//             restitution:0,
//             friction:1
//           } 
//     super(x,y,50,50);
//     this.body = Bodies.circle(x, y, r, options);
//     this.radius = r;
//     this.image = loadImage("sprites/mango.png");
//     World.add(world, this.body);
//     this.visibility = 255;
//    }

//   display() {    
//     super.display();
//     imageMode(CENTER);
//     image(this.image, this.body.position.x, this.body.position.y, this.radius+2, this.radius+2);
//   }
// }

 


