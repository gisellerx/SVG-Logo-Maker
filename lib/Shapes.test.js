const Shape = require("./Shapes")
const Circle = require("./Circle")
const Square = require("./Square")
const Triangle = require("./Triangle")

describe ("Circle", () => {
    test ("Creates new circle", () => {
        const circle = new Circle()
        expect(circle).toBeInstanceOf(Circle)
    })
})