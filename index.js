#! /usr/bin/env node
import inquirer from "inquirer";
// printing a Wellcome Message
console.log("\n\tWellcome To \'CodeWithmayatanvir\' -CLI Simple Calculator\n");
// Asking Questions from Users through Inquirer 
let answers = await inquirer.prompt([{ message: " Enter First Number", type: "number", name: "firstNumber" },
    { message: "Enter second Number", type: "number", name: "secondNumber" },
    {
        message: "select one Operator to perform Operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtractions", "Multiplication", "Division"],
    }]);
// Conditional statements If -Else
if (answers.operator === "Addition") {
    console.log(answers.firstNumber + answers.secondNumber);
}
else if (answers.operator === "Multiplication") {
    console.log(answers.firstNumber * answers.secondNumber);
}
else if (answers.operator === "Division") {
    console.log(answers.firstNumber / answers.secondNumber);
}
else if (answers.operator === "subtraction") {
    console.log(answers.firstNumber - answers.secondNumber);
}
else
    console.log("invalid Input");
