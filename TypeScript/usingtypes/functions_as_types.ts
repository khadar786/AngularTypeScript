function add1(n1:number,n2:number){
    return n1+n2;
}

function printResult1(num:number){
    console.log('Result :'+num);
}

/* let combineValues:Function;
combineValues=add1;

console.log(combineValues(10,20)); */

let combineValues:(a:number,b:number)=>number;
combineValues=add1;
console.log(combineValues(10,20));