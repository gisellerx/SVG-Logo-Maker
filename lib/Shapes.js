class Shape {
    constructor() {
        this.text = ""
        this.textColor = ""
        this.shapeColor = ""
    }
    setColor(textColor) {
        this.textColor = textColor
    }
    setText(text) {
        this.text = text
    }
    setShapeColor(shapeColor) {
        this.shapeColor = shapeColor
    }
}

module.exports = Shape