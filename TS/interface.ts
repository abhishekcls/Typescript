interface Fruits{
    color:string;
    taste:string;
    qty?:number;//? means optional
}

class Apple implements Fruits{
    color:string;
    taste:string;
    qty:number;

    constructor(c:string,t:string,q:number){
        this.color=c;
        this.taste=t;
        this.qty=q;
    }
}

let apple:Fruits={color:'red',taste:'sweet',qty:5};
let apple2:Fruits={color:'green',taste:'sour'};
console.log(apple);
console.log(apple2);

interface IEmployee{
    fname:string;
    lname:string;
    getName():string;
    getFullName:(salutation:string)=>string;
}

class FullTimeEmp implements IEmployee{
    fname:string='Abhishek';
    lname:string='Samanta';
    getName():string{
        return this.fname+' '+this.lname;
    }
    getFullName(s:string):string{
        return s+this.fname+' '+this.lname;
    }
}

let abhi:FullTimeEmp=new FullTimeEmp();
console.log(abhi.getName());
console.log(abhi.getFullName('Mr.'));