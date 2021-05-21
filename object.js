//JSON - JavaScript Object Notation
/*
{property1:value1,property2:value2}
*/
let emp={'eid':101,'ename':'Abhishek'};


console.log(typeof(emp));
//Task - copy the emp object
//es5
/*
let copyemp=JSON.stringify(emp);
console.log(typeof(copyemp));
copyemp=JSON.parse(copyemp);
console.log(typeof(copyemp));
*/
//es6
let copyemp={...emp};
emp.eid=105;

console.log(emp);
console.log(copyemp);
