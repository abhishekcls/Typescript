class Student{
    public age:number=10;
    constructor(public name:string){
    }
}

class Admission{
    add(){
        let stu:Student=new Student("Gaurav");
        console.log(stu);
        stu.age=15;
        console.log(stu);
    }
}

let ad:Admission=new Admission();
ad.add();
//3 access specifiers
/*
public
private
protected
*/