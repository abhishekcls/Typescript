let arr:(string | number)[]=['abc',7,9,'xyz'];

console.log(arr);

//custom type
type My=string | number;

let arr2:My[]=['abc',7,9,'xyz'];

console.log(arr2);

let x:My='abc';
let y:My=55;

console.log(x,y);

for(let a of arr2){
    if(typeof a === "string")
        console.log(a.toUpperCase());
    else
        console.log(a);
}