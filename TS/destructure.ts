//1
// function demo(id:number,name:string){
//     console.log(id,name);
// }

// demo(1,'abc');

//2
// function demo(obj:{id:number,name:string}){
//     console.log(obj.id,obj.name);
// }

// demo({id:1,name:'abc'});
//Destructuring simply implies breaking down a complex structure into simpler parts.
//3
function demo(obj:{id:number,name:string}){
    const {id,name}=obj;//destructure
    console.log(id,name);
}

demo({id:1,name:'abc'});

//mixed destructure
const person={
    age:35,
    hobbies:['read','write']
}

const {age,hobbies:[h1,h2]}=person;
console.log(age,h1,h2);