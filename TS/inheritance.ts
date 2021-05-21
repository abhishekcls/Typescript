class Parent{
    private a:number=10;
    public b:number=20;
    protected c:number=30;
    d=11;
    disp(){
        console.log(this.a);
    }
}

class Child extends Parent{
    d=22;
    disp(){//overriding (polymorphism)
        super.disp();
        console.log(this.b,this.c,this.d);//d=22
    }
}

let cd:Child=new Child();
cd.disp();

//-------------------------------
class P{
    a:number;
    b:number;
}

class C1 implements P{
    //all the members a,b must be public else can't implement
    a:number;
    b:number;
}

class C2 extends P{}

let c1:C1=new C1();
let c2:C2=new C2();

console.log(c1 instanceof P);//false
console.log(c2 instanceof P);//true