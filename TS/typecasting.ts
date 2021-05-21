let a:number=100;
let b:string=a.toString();

let c:any="abc";
c=100;

let numStr:string = "123";
let numNum:string;

const clueless: unknown = "1";
const clueNum: number = <number>clueless;

// another format
const clueNumPreferred = clueless as number;


