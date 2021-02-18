// const numbers = [25 , 20,100 ,300];
// const x = numbers[0];
// const y = numbers[1];
// console.log(x , y);

// Array destructuring

const numbers = [25 , 20 ,59 ,69];
// const [x, y] = numbers;
// console.log(x , y);


// function boxyfi(num1) {
//     return [num1 , num1+1]
    
// }
// const box  = boxyfi(10);
// console.log(box);



function boxyfi(num1 ) {
    return [num1 , num1+5]
    
}
const [box1 , box2]  = boxyfi(10);
// console.log(box1 ,box2);

//object destructuring

const person = {id: 1, name:'shafikul', age :23 ,money:500 }
const{money} = person;

// console.log(money)


//creat object shortcut

const xx = 25;
const yy = 46;
// const obj = {x: x ,y: y}
const obj2 = {xx , yy}
console.log(obj2);



// new array using ...

// numbers.push(56);
const newNumbers = [...numbers ,56];
console.log(newNumbers);
newNumbers.push(70);
console.log(newNumbers);
newNumbers.pop(20);
console.log(newNumbers);


