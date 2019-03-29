const divide = (a, b) => a / b;

module.exports = (first,...args) =>{
   if(args.includes(0)) throw new Error("Cannot divide by zero");
    return args.reduce(divide ,first)
}