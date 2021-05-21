//dynamically detecting type
//type assertion -> any
//type inference
//duck typing
let k = 100; //number
//k="abc";//error
let kk;
kk = 100;
//kk="abc";
//union
let kkk = 100;
kkk = "abc";
class Mussoorie2 {
    constructor() {
        this.name = 'Mussoorie';
    }
    details() {
        console.log(`${this.name} is in Uttarakhand`);
    }
}
let mus2 = new Mussoorie2();
console.log(mus2);
mus2.details();
