class Emp {
    // "strict": false -> no error
    // "strict": true -> error
    constructor() {
        this.sal = 0;
    }
    //read
    get getSal() {
        return this.sal;
    }
    //write
    set setSal(val) {
        this.sal = val;
    }
}
let e = new Emp();
e.setSal = 10000;
console.log(e.getSal);
