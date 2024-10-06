import inquirer from "inquirer";
import chalk from "chalk";

let list:string[] = [];

//print welcom message
console.log(chalk.magenta.bold("\n\tWELCOME TO MY CODING WORLD"));


let condition = true;
while(condition){
let addTask = await inquirer.prompt(
    [
        {
            name:"todo",
            type:"input",
            message:"What you want to add in ToDo?",
        },
        {
            name:"addMore",
            type:"confirm",
            message:"Do You Want To Add More?",
            default:"false",
        }
    ]
);

list.push(addTask.todo);
console.log(list);


}
