// ternary operator


// variablename = (condition) ? value1:value2 
const age = 18;
const voteable = (age < 18) ? "Too young": "Old enough";

// console.log(voteable);


const money = 90;
const food = (money < 100) ? ' Alo vorta dal ': 'checken byrany';
console.log(food);


 active = true;
const cssClass = active ? 'active' : 'inactive';

console.log(cssClass);

const number = + '8';
console.log(number);


const str = 5 + '';
console.log(str)



// default value
// default parameter

function add(num1 ,num2= 45) {
    return num1 + num2;
}

console.log(add(45 ,60));