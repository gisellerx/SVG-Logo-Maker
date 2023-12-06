// This page can largely be credited to Professor Phil, who created a video guide for this assignment
class Shape {
    
    // this constructer gets used to create a new shape object, a child of the shape class
    // constructor uses the text, textColor, and shapeColor values to create the new shape
    constructor() {

        this.text = ""
        this.textColor = ""
        this.shapeColor = ""

    }

    // setTextColor method is a part of the constructor that sets the text color property of the new object
    setTextColor(textColor) {

        this.textColor = textColor

    }

    // setText method is a part of the constructor that sets the text property of the new object
    setText(text) {
        this.text = text
    }

    // setShapeColor method is a part of the constructor that sets the shape color property of the new object
    setShapeColor(shapeColor) {
        this.shapeColor = shapeColor
    }

    // error message that gets thrown when the render method isn't properly implemented
    render() {

        return Error("Child has to create render function")

    }
}

module.exports = Shape