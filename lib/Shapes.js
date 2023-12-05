// done  watching Professor Phil
class Shape {
    // this constructer gets used to create a new shape object, a child of the shape class
    // constructor uses the text, textColor, and shapeColor values to create the new shape
    constructor() {
        this.text = ""
        this.textColor = ""
        this.shapeColor = ""
    }
    setTextColor(textColor) {
        this.textColor = textColor
    }
    setText(text) {
        this.text = text
    }
    setShapeColor(shapeColor) {
        this.shapeColor = shapeColor
    }

    render() {
        return Error("Child has to create render function")
    }
}

module.exports = Shape