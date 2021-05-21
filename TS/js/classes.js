class Student {
    constructor(name) {
        this.name = name;
        this.age = 10;
    }
}
class Admission {
    add() {
        let stu = new Student("Gaurav");
        console.log(stu);
        stu.age = 15;
        console.log(stu);
    }
}
let ad = new Admission();
ad.add();
//3 access specifiers
/*
public
private
protected
*/ 
