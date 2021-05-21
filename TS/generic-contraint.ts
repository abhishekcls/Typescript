function clone2<T extends Emps2>(obj:T):T{
    return {...obj};
}
interface Games2{
    name:string;
    players:number
}
interface Emps2{
    name:string;
    sal:number;
    retired:boolean;
}
interface Emps3 extends Emps2{}
let ludo2:Games2={name:'Ludo',players:4};
//let ludocopy2=clone2<Games2>(ludo2);//error because of constraint
//console.log(ludocopy2);
let ramesh2:Emps2={name:'Ramesh',sal:67000,retired:false}
let ramesh3:Emps3={name:'Suresh',sal:78000,retired:true}
let rameshcopy2=clone2(ramesh2);
let rameshcopy3=clone2(ramesh3);
console.log(rameshcopy2);
console.log(rameshcopy3);