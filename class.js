class Demo{
  age=10;//allowed now in node 16.1.0(supports esnext features)
    constructor(name){
        console.log('cons');
        this.id=100;
        this.name=name;
    }
    disp(){
      console.log(`hello ${this.id} ${this.name}`);  
    }
}

let obj=new Demo('Abhishek');
obj.disp();
console.log(obj);
console.log(typeof(obj));