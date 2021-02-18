// array methods

const numbers = [2,3,4,5,];
const fdname =  ['rafik','juber','barkat','shafikul']


const products = [
    {id:1 ,name:'laptop',price:5500},
    {id:2 ,name:'mobile',price:500},
    {id:3 ,name:'tv',price:400},
    {id:4 ,name:'watch',price:200}
    
]
// map
// map use for particular value

// one line map
const names = products.map(product => product.name);
const prices = products.map(product =>product.price);
console.log(prices);


// multi line map
const ids = products.map(product =>{
    return product.id;
})
console.log(ids);


// console.log(names);
products.forEach(product => console.log(product.price))



// filter

const cheaper = products.filter(pd =>pd.price<500);
console.log(cheaper);

// one items filter 
const remaining = products.filter(pd => pd.id != 3);
console.log(remaining);


// find
const haswatch = products.find(pd =>pd.name ==='watch');
console.log(haswatch);


