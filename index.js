const Shape = require("./lib/Shapes")
const Circle = require("./lib/Circle")
const Triangle = require("./lib/Triangle")
const Square = require("./lib/Square")
const inquirer = require("inquirer")
const fs = require("fs")

inquirer
.prompt([{
    type: "input",
    message: "Enter SVG text:",
    name: "text"
}, {
    type: "list",
    message: "Enter text color:",
    name: "textColor",
    choices: ["red", "green", "blue"]
}, {
    type: "list",
    message: "Enter shape:",
    name: "shape",
    choices: ["circle", "triangle", "square"]
}, {
    type: "list",
    message: "Enter shape color:",
    name: "shapeColor",
    choices: ["red", "green", "blue"]
}])
.then(response =>{

})

