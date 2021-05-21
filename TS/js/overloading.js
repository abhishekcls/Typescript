class Messages {
    getMessages() {
        return "hello";
    }
    static getMessages() {
        return "Hi";
    }
}
console.log(Messages.getMessages());
let m = new Messages();
console.log(m.getMessages());
/*
function add(a:number,b:number):number;

function add(a:string,b:string):string;

function add(a:any,b:any):any{
    return a+b;
}

console.log(add(10,20));
console.log(add("abc","xyz"));
*/
/*
class Overloading{
    add(a:number,b:number):number{
        return a+b;
    }
    add(a:string,b:string):string{
        return a+b;
    }
}
*/ 
