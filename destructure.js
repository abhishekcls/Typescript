//array, object

let arr=[4,7,9,3,8];

/*
let a=arr[0];
let b=arr[1];
*/

let [a,b,...c]=arr;//array destructuring
console.log(a,b,c);

let emp={'eid':101,'ename':'Abhishek','sal':99999,'qual':'PhD'};
//let {eid,ename,...data}=emp;//object destructuring
//console.log(eid,ename,data);

let {eid:ed,ename}=emp;
console.log(ed,ename);
