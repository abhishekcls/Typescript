class StaticDemo {
    static disp() {
        console.log('Hello', this.a, this.b);
        console.log('Hi', StaticDemo.a, StaticDemo.b);
    }
}
StaticDemo.a = 100;
StaticDemo.b = 200;
console.log(StaticDemo.a, StaticDemo.b);
StaticDemo.disp();
