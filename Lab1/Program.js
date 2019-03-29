//Get the parameters from the process which are the operations and operand
const params = process.argv.slice(2);

const operations = require('./Operations');

//Get the parameters from the process which are the operations and operand
//const currentOperationIndex = params.findIndex(item => item.startsWith("--"));
const currentOperationIndex = params.findIndex(item => item.startsWith("--"));

const [currentOperation] = params.splice(currentOperationIndex, 1)
.map(e=>e.substring(2));
//currentOperation.forEach(element => {
    const operands = params.map(e=>Number(e));
    let calc = operations[currentOperation];
    console.log(calc(...operands));   
//});
