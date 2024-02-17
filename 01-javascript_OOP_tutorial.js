/*

   Class -> Object

   Instance Properties: what they have

         - name 
         - age
         - height

   Instance Methods: what they do

         - talk
         - run
         - jump

*/       

class Rectangle {
    // Setup

    constructor(_width, _height, _color) {
        console.log("The Rectangle is being created!");

        this.width = 5;
        this.height = 3;
        this.width = 5;
    }

    getArea () {
        return this.width * this.height;
    }

    printDescription () {
        console.log('I am a rectangle of ${this.width} x ${this.height} and I am ${this.color}')
    }
}

let myRectangle1 = new Rectangle(5, 3, "blue");
let myRectangle2 = new Rectangle(10, 5, "red");

myRectangle2.printDescription();

//----//

console.log(myRectangle1)
console.log(myRectangle2)

console.log(myRectangle1.getArea());
console.log(myRectangle2.getArea());
