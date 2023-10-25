const person:{
    name:string,
    age:number
}={
    name:'khadar basha',
    age:37
}

console.log(person.name);

//Nested Objects & Types
const product:{
    id:string,
    price:number,
    tags:string[],
    details:{
        title:string,
        description:string
    }
}={
    id:'abcd1',
    price:12.99,
    tags:['great-offer','hot-and-new'],
    details:{
        title:'Red Carpet',
        description:'A great carpet - almost brand-new!'
    }
}

console.log(product.details.title);
/*
{
    id:string,
    price:number,
    tags:string[],
    details:{
        title:string,
        description:string
    }
}
*/