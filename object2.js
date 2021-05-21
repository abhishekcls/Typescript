const emp={
    'eid':101,
    'ename':'Abhishek',
    'sal':99999,
    'qual':'PhD',
    'details':function(){
        console.log(`${this.ename} is ${this.qual} and gets ${this.sal}`);
    },
    'disp':function(){
        console.log("Hello");
    }
};

console.log(emp);
emp.details();
emp.disp();
emp.eid=105;

let {eid,disp}=emp;
console.log(eid);
disp();

console.log(typeof(emp));
console.log(Array.isArray(emp));