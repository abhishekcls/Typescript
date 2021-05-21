/*
function clone(obj:any):any{
    return {...obj};
}*/
function clone(obj) {
    return Object.assign({}, obj);
}
let ludo = { name: 'Ludo', players: 4 };
let ludocopy = clone(ludo);
console.log(ludocopy);
let ramesh = { name: 'Ramesh', sal: 67000, retired: true };
let rameshcopy = clone(ramesh);
console.log(rameshcopy);
// interface KeyValuePair<K,V>{
//     Key:K;
//     Value:V;
// }
// let kv1:KeyValuePair<number,string>={Key:1,Value:'abc'};
// let kv2:KeyValuePair<string,boolean>={Key:'xyz',Value:true};
// console.log(kv1);
// console.log(kv2);
class KeyValuePair {
}
let kv1 = { Key: 1, Value: 'abc' };
let kv2 = { Key: 'xyz', Value: true };
console.log(kv1);
console.log(kv2);
//----------------------------
//let colors:string[]=['red','yellow','green'];
//OR
let colors = ['red', 'yellow', 'green'];
