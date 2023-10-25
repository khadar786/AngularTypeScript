const person1={
    name:'khadar basha',
    age:37,
    hobbies:['Sports','Cooking']
}

let favoriteActivities:string[];
favoriteActivities=['Cricket','Hockey','Volley Ball'];

let favoriteActivitiesNew:any[];
favoriteActivitiesNew=[1,'Cricket',30.25];

for(const hobby of person1.hobbies){
    console.log(hobby.toUpperCase());
}