class StaticDemo{
    public static a:number=100;
    static b:number=200;

    static disp(){
        console.log('Hello',this.a,this.b);
        console.log('Hi',StaticDemo.a,StaticDemo.b);
    }
}

console.log(StaticDemo.a,StaticDemo.b);
StaticDemo.disp();
