const Shape = require("./Shapes")

class Square extends Shape {
    constructor() {
        super()
    }

    // square had an issue with the rect, the height and width had to be changed, and fill for the shape color was not present. The x and y values also had to be modified, since only the cirlce at the time was fully running appropriately. I reviewed this issue with the help of a tutor.
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <rect x="60" y="10" width="150" height="150" fill="${this.shapeColor}"/><text x="135" y="100" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

module.exports = Square