function add(...nums){//rest
    let sum=0;
    for(let n of nums){
        sum+=n;
    }
    console.log(sum);
}
/*
add(2);//2
add(1,2);//3
add(2,3,4);//9
add(3,5,6,8,0,9);
*/
//Task
//copy the arr in another array
let arr=[3,5,2];
let copy=[...arr];//spread
console.log(...arr);
arr[2]=8;
console.log(arr);
console.log(copy);
console.log(typeof(arr));

add(...arr);//spread
add(2,...arr);
add(3,4,...arr,...copy);