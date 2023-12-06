// const Shape was origally put in while experimenting with tutor but wasn't used, safe to comment out without breaking anything
// const Shape = require("./Shapes")
const Circle = require("./Circle")
const Square = require("./Square")
const Triangle = require("./Triangle")

// TA assisted with initial circle jest test
// uses jest test for the circle class, creates a new instance, sets the color to blue, and calls render to get an SVG of the circle, then compares the results to the expected outcome for a blue circle
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

// Square test fails to perform as the circle and triangle test, more testing required
describe ("Square", () => {

    test ("Creates blue square", () => {

        const square = new Square()
        const blueSquare = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><rect x="60" y="10" width="150" height="150" fill="blue"/>
        <text x="135" y="100" font-size="60" text-anchor="middle" fill=""></text></svg>`
        square.setShapeColor("blue")
        const resultSquare = square.render()
        expect(resultSquare).toEqual(blueSquare)

    })
})


// Triangle test performs an identical test as the circle test for triangle creates a new instance, sets the color to blue, and calls render to get an SVG of the circle, then compares the results to the expected outcome for a blue circle
describe ("Triangle", () => {

    test ("Creates blue triangle", () => {

        const triangle = new Triangle()
        const blueTriangle = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polygon points="150, 18 244, 182 56, 182" fill="blue"/><text x="150" y="125" font-size="30" text-anchor="middle" fill=""></text></svg>`
        triangle.setShapeColor("blue")
        const resultTriangle = triangle.render()
        expect(resultTriangle).toEqual(blueTriangle)

    })
})