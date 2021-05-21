class Employee{
    readonly sal:number;
    constructor(){
        this.sal=10000;
    }
}

let e1:Employee=new Employee();
//e1.sal=1000;//error
console.log(e1.sal);