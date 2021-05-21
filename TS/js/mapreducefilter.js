let nums = [23, 1, 88, 54, 35];
function print(value, index, arr) {
    console.log(index, value, arr);
}
nums.forEach(print);
//----------------------------
function add1(value) {
    return value + 1;
}
console.log("-----------------------");
let vals = nums.map(add1);
console.log(vals);
//Task
//display half of all the numbers
let half = nums.map(n => n / 2);
console.log(half);
let evens = nums.filter(n => n % 2 == 0);
console.log(evens);
//Task
//get the sum of nums
//let sum:number=nums.reduce((p,c)=>p+c);
let sum = nums.reduce((p, c) => p + c, 10);
console.log(sum);
//find the max (shortest code)
/*
//Priyasha Rath
let max = nums.reduce((x,y)=> x>y?x:y)
console.log(max);

//Aditya Gummalla
console.log(nums.sort((a,b)=>b-a)[0]);

//Vignesh M

let max: number = nums.reduce((max: number = 0, num: number) => (num > max ? num : max));

console.log(max);

//Ripu Daman Singh Sasan
nums.sort((p,q)=>q-p)
console.log(nums.shift())


//vivek pyasi

console.log(nums.reduce((value1, value2) => value1 > value2 ? value1: value2));

//Basu, Snehashree

let max:number = nums.reduce((a,b)=>a>b?a:b);
console.log(max);
*/
let max = nums.reduce((p, c) => Math.max(p, c));
console.log(max);
