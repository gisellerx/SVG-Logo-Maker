// Professor Phil can largely be credited for this part of the project given that he gave us a video guide that covered this portion 

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
        // else portion allows me to resubmit desired text, otherwise it will be stuck when more than 3 characters 
        } else {

            return true

        }
    }
}, {
    // originally had a list of options, not unlimited choices for textColor, tutor assisted with modification
    type: "input",

    message: "Enter text color:",

    name: "textColor",

}, {

    type: "list",

    message: "Enter shape:",

    name: "shape",

    choices: ["circle", "triangle", "square"]

}, {
    // had only a set list of options for shapeColor originally, now unlimited choices by changing list to input
    type: "input",

    message: "Enter shape color:",

    name: "shapeColor"

}])

// prompts for user input of text, color of text, shape of design, and shape color, then renders a shape within the generated folder 
.then(response =>{

    if(response.shape === "circle") {

        const circle = new Circle()

        circle.setTextColor(response.textColor)

        circle.setText(response.text)

        circle.setShapeColor(response.shapeColor)

        fs.writeFile("./generated/logo.svg", circle.render(), (err) => {

            console.log("Generated logo.svg")

        })

    } else if(response.shape === "triangle") {

        const triangle = new Triangle()

        triangle.setTextColor(response.textColor)

        triangle.setText(response.text)

        triangle.setShapeColor(response.shapeColor)

        fs.writeFile("./generated/logo.svg", triangle.render(), (err) => {

            console.log("Generated logo.svg")

        })

    } else if(response.shape === "square") {

        const square = new Square()

        square.setTextColor(response.textColor)

        square.setText(response.text)

        square.setShapeColor(response.shapeColor)

        fs.writeFile("./generated/logo.svg", square.render(), (err) => {

            console.log("Generated logo.svg")

        })
    }
})

