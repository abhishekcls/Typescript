let arr=['abc',78,true]

console.log(arr)
console.log(arr[0],typeof(arr[0]))
console.log(arr[1],typeof(arr[1]))
console.log(arr[2],typeof(arr[2]))

for(let v of arr){
    console.log(v,typeof(v));
}

console.log(typeof(arr));
console.log(Array.isArray(arr));