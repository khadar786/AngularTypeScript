console.log("Testing purpose");
//var,let and const

const add=(a:any,b:any)=>{
  return a+b;
};

console.log(add(10,20));

const printOutPut=(output:string | number)=>console.log(output)

printOutPut("hello");

const btn=document.querySelector('button');
btn.addEventListener('click',()=>{
  console.log('working');
});

//Spread Operator
const hobbies=["Sports","Cooking","Listening Music"];
const activeHobbies=["Hiking"];
activeHobbies.push(...hobbies);

console.log(activeHobbies);

const person={
  name:"xyz",
  age:30
};

const copiedPerson={...person};
console.log(copiedPerson);

//Array & Object Destructuring:
const [hobby1,hobby2,...remaingHobbies]=activeHobbies;
console.log(remaingHobbies);

const {name:Username,age}=person;
console.log(Username);

//Rest Parameters
//...args (treat as array)
const sum=(...args)=>{
  return args.reduce((currentResult,currentValue)=>{
      return currentResult=currentResult+currentValue;
  },0);
};

console.log(sum(10,20.25,15.75,50,20));


