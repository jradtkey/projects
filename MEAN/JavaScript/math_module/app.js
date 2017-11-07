var my_module = require('./math_module')();     //notice the extra invocation parentheses!
console.log(my_module);
my_module.add(1,2);
my_module.multiply(1,2);
my_module.square(2);
my_module.random(3,35);
