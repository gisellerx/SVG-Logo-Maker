const Circle = require("./lib/Circle")
const Triangle = require("./lib/Triangle")
const Square = require("./lib/Square")
const inquirer = require("inquirer")
const fs = require("fs")

inquirer
.prompt([{
    type: "input",
    message: "Enter desired SVG text:",
    name: "text",
    // Tutor helped with setting up the validation function
    // validate will help test length to see if more than 3 characters
    validate: (input) => {
        if (input.length > 3) {
            return "Text must be no more than 3 characters"
        } else {
            return true
        }
    }
}, {
    type: "input",
    message: "Enter text color:",
    name: "textColor",
}, {
    type: "list",
    message: "Enter shape:",
    name: "shape",
    choices: ["circle", "triangle", "square"]
}, {
    type: "input",
    message: "Enter shape color:",
    name: "shapeColor"
}])
.then(response =>{

    if(response.shape === "circle") {
        const circle = new Circle()
        circle.setColor(response.textColor)
        circle.setText(response.text)
        circle.setShapeColor(response.shapeColor)
        fs.writeFile("./generated/logo.svg", circle.render(), (err) => {
            console.log("Generated logo.svg")
        })
    } else if(response.shape === "triangle") {
        const triangle = new Triangle()
        triangle.setColor(response.textColor)
        triangle.setText(response.text)
        triangle.setShapeColor(response.shapeColor)
        fs.writeFile("./generated/logo.svg", triangle.render(), (err) => {
            console.log("Generated logo.svg")
        })
    } else if(response.shape === "square") {
        const square = new Square()
        square.setColor(response.textColor)
        square.setText(response.text)
        square.setShapeColor(response.shapeColor)
        fs.writeFile("./generated/logo.svg", square.render(), (err) => {
            console.log("Generated logo.svg")
        })
    }
})

