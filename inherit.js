class Parent{
    constructor(){
        console.log('Parent cons');
    }
    disp(){
        console.log('Parent');
    }
}
class Child extends Parent{
    constructor(){
        super();
        console.log('Child cons');
    }
}

let c=new Child();
c.disp();