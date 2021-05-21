//internal modularity
namespace N1{
    export let a=100;
    export class Emp{}
    export interface I1{}
}
namespace N2{
    interface I2{}
    export function abc(){
       console.log(N1.a);
    }
    abc();
    let obj:N1.Emp=new N1.Emp();
}
namespace N3{
    import a=N1.a;
    import Emp=N1.Emp;
    console.log(a);
    let obj:Emp=new Emp();
    N2.abc();
}