var prompt = require("prompt-sync")();
let myArray = new Array();
var number = parseInt(prompt("Enter a Number : "));
let factorial=number;
let result='';
while (number % 2 == 0)
{
    number /= 2;
    myArray.push(2);
}
for (var i = 3; Math.sqrt(i) <= number; i++)
{
     while (i % 2 != 0 && number % i == 0)
    {   
        number /= i;
        myArray.push(i);
    }
}
console.log("Factors of number "+factorial+" : "+ myArray.join(','));
