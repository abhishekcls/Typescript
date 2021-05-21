class Apple {
    constructor(c, t, q) {
        this.color = c;
        this.taste = t;
        this.qty = q;
    }
}
let apple = { color: 'red', taste: 'sweet', qty: 5 };
let apple2 = { color: 'green', taste: 'sour' };
console.log(apple);
console.log(apple2);
class FullTimeEmp {
    constructor() {
        this.fname = 'Abhishek';
        this.lname = 'Samanta';
    }
    getName() {
        return this.fname + ' ' + this.lname;
    }
    getFullName(s) {
        return s + this.fname + ' ' + this.lname;
    }
}
let abhi = new FullTimeEmp();
console.log(abhi.getName());
console.log(abhi.getFullName('Mr.'));
