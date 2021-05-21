class Parent {
    constructor() {
        this.a = 10;
        this.b = 20;
        this.c = 30;
        this.d = 11;
    }
    disp() {
        console.log(this.a);
    }
}
class Child extends Parent {
    constructor() {
        super(...arguments);
        this.d = 22;
    }
    disp() {
        super.disp();
        console.log(this.b, this.c, this.d); //d=22
    }
}
let cd = new Child();
cd.disp();
//-------------------------------
class P {
}
class C1 {
}
class C2 extends P {
}
let c1 = new C1();
let c2 = new C2();
console.log(c1 instanceof P); //false
console.log(c2 instanceof P); //true
