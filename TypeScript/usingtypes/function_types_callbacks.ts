function addAndHandle(n1:number,n2:number,cb:(num:number)=>void){
    const result=n1+n2;
    cb(result);
}

addAndHandle(10,20,(result)=>{
    console.log(result);
})

function delayMessage(message:string,delay:number,cb:(msgr:string)=>void){
    setTimeout(()=>{
        console.log(message);
        cb(message);
    },delay);
}

const message: string = "Hello, World!";
delayMessage(message,1000,(msg)=>{
    console.log(msg);
});


function sendRequest(data: string, cb: (response: any) => void) {
    // ... sending a request with "data"
    return cb({data: 'Hi there!'});
  }
   
  sendRequest('Send this!', (response) => { 
    console.log(response);
    return true;
   });