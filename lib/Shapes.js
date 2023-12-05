// done  watching Professor Phil
class Shape {
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