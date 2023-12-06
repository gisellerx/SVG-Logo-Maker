const Shape = require("./Shapes")
const Circle = require("./Circle")
const Square = require("./Square")
const Triangle = require("./Triangle")

// TA assisted with initial circle jest test
describe ("Circle", () => {
    test ("Creates blue circle", () => {
        const circle = new Circle()
        const blueCircle = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="80" fill="blue"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill=""></text></svg>`
        circle.setShapeColor("blue")
        const resultCircle = circle.render()
        expect(resultCircle).toEqual(blueCircle)
    })
})