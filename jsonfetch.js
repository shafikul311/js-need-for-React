// JSON
const person = {
    name :'shafikul',
    id:10,
    age : 23,
    city: 'dhaka',
    
}

const data = JSON.stringify(person);

const dataParsed = JSON.parse(data);
// console.log(dataParsed.name)
console.log(dataParsed)


// API

// fetch('url')
// .then(res =>res.json())
// .then(data =>console.log(data));

// local Storage

// localStorage.setItem('userID',1245);
const userId = localStorage.getItem('userID');
// console.log(userId);

localStorage.setItem('person', JSON.stringify(person))
const storedPerson = localStorage.getItem('person')
const parsedPerson = JSON.parse(storedPerson)
console.log(parsedPerson );

const keys = Object.keys(parsedPerson);
console.log(keys)

const values = Object.values(parsedPerson);
console.log(values)


