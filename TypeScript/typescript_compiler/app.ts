console.log("testing purpose 2nd");

let age:number;
age=30;

const button=document.querySelector('button');

button?.addEventListener('click',()=>{
    console.log('clicked');
});

const map=new Map();

function demo(info:any){
    console.log(info);
}