//enum{New,Old} automatically gobal constants
enum Role {ADMIN,READ_ONLY,AUTHOR};

const person3={
    name:"khadar",
    age:37,
    hobbies:['Sports','Cooking'],
    role:Role.ADMIN
}

if(person3.role==Role.ADMIN){
    console.log('is author');
}