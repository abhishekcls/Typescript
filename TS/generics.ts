/*
function clone(obj:any):any{
    return {...obj};
}*/
function clone<T>(obj:T):T{
    return {...obj};
}

interface Games{
    name:string;
    players:number
}
interface Emps{
    name:string;
    sal:number;
    retired:boolean;
}
let ludo:Games={name:'Ludo',players:4};
let ludocopy=clone<Games>(ludo);
console.log(ludocopy);


let ramesh:Emps={name:'Ramesh',sal:67000,retired:true}
let rameshcopy=clone(ramesh);
console.log(rameshcopy);

// interface KeyValuePair<K,V>{
//     Key:K;
//     Value:V;
// }

// let kv1:KeyValuePair<number,string>={Key:1,Value:'abc'};
// let kv2:KeyValuePair<string,boolean>={Key:'xyz',Value:true};

// console.log(kv1);
// console.log(kv2);

class KeyValuePair<K,V>{
    Key:K;
    Value:V;
}

let kv1:KeyValuePair<number,string>={Key:1,Value:'abc'};
let kv2:KeyValuePair<string,boolean>={Key:'xyz',Value:true};

console.log(kv1);
console.log(kv2);

//----------------------------
//let colors:string[]=['red','yellow','green'];
//OR
let colors:Array<string>=['red','yellow','green'];
