const Shape = require("./Shapes")

class Triangle extends Shape {
    constructor() {
        super()
    }

    // the triangle had a similar issue to the square, and also the text didn't fit in the triangle. This was resolved by changing the font size while working with tutor.
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/><text x="150" y="125" font-size="30" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

module.exports = Triangle