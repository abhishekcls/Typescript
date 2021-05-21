let arr = ['abc', 7, 9, 'xyz'];
console.log(arr);
let arr2 = ['abc', 7, 9, 'xyz'];
console.log(arr2);
let x = 'abc';
let y = 55;
console.log(x, y);
for (let a of arr2) {
    if (typeof a === "string")
        console.log(a.toUpperCase());
    else
        console.log(a);
}
