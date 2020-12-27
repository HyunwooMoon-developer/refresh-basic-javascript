/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/*const fs = require('fs');

fs.writeFileSync('hello.txt', 'helllo from node.js');

const person = {
    name: 'Moon',
    age: 30,
    greet : function() {
        console.log(`Hi, I'm ${this.name}`)
    },
    greet2 (){
        console.log(`Hi, my name is ${this.name}`)
    }
}

//person.greet();
//person.greet2();

//const copiedPerson = {...person};
//console.log(copiedPerson);

const printName = (personData) => {
    console.log(personData.name);
}

printName(person);

const printName2 = ({name}) =>{
    console.log(name);
}

printName2(person);


const {name, age}  = person;
console.log(name, age);

const hobbies = ['sports', 'cooking'];

const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);
/*
//for(let hobby of hobbies){
//    console.log(hobby);
//}
console.log(hobbies.map(hobby =>  `hobby: ${hobby}`
));
//console.log(hobbies);

//hobbies.push('programming');
//console.log(hobbies);

const copiedArray = hobbies.slice();
console.log(copiedArray);

const copiedArray2 = [...hobbies];
console.log(copiedArray2);

const copiedArray3 = [hobbies];
console.log(copiedArray3);

const toArray = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3];
};

console.log(toArray(1,2,3,4));

const toArray2 = (...args) => {
    return args;
}

console.log(toArray2(1,2,3,4));*/
//millisecond
const fetchData = () =>{
    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('done!');
        },
        1500);
    });
    return promise;
}

setTimeout(() => {
    console.log('timer is done!!');
    fetchData()
    .then(text=>{
        console.log(text);
        return fetchData();
    })
    .then(text2 =>{
            console.log(text2);
        });
    
}, 2000);

console.log('hello');