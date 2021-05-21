class Emp{
    private sal:number;
    // "strict": false -> no error
    // "strict": true -> error
    constructor(){//if any initializer error comes
        this.sal=0;
    }
    //read
    get getSal():number{
        return this.sal;
    }

    //write
    set setSal(val:number){
        this.sal=val;
    }
}

let e:Emp=new Emp();
e.setSal=10000;
console.log(e.getSal);