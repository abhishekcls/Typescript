var eid:number=101;
var ename:string='abc';
/*
//1
var emp:[number,string];//tuple
emp=[101,'abc'];
//2
var emp:[number,string]=[101,'abc'];//tuple
*/
//3
var emp:[number,string]=[101,'abc'];//tuple
emp.push(100);//push is array method
emp.push('xyz');//emp[3]
emp[1]='Abhishek';
//console.log(emp[3]);//error
for(let e in emp){
    console.log(e,emp[e]);
}
//emp.push(true);//error
console.log(emp);

var emps:[number,string][];
emps=[[101,'abc'],[102,'xyz']];
emps.push([103,'hhh']);
console.log(emps);

//let student:[string,boolean]=[true,'abc'];//error
let student:[string,boolean]=['Tarun',true];
console.log(student);