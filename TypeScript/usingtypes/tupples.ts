//Tuple [1,2] added by typescript:fixed-length array
const person2:{
    name:string,
    age:number,
    hobbies:string[],
    role:[number,string]
}={
    name:"kahdar",
    age:37,
    hobbies:['Cricket','Cooking'],
    role:[2,'author']
}

console.log(typeof person2.role)
person2.role.push("admin")

console.log(person2.role);