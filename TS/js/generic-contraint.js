function clone2(obj) {
    return Object.assign({}, obj);
}
let ludo2 = { name: 'Ludo', players: 4 };
//let ludocopy2=clone2<Games2>(ludo2);//error because of constraint
//console.log(ludocopy2);
let ramesh2 = { name: 'Ramesh', sal: 67000, retired: false };
let ramesh3 = { name: 'Suresh', sal: 78000, retired: true };
let rameshcopy2 = clone2(ramesh2);
let rameshcopy3 = clone2(ramesh3);
console.log(rameshcopy2);
console.log(rameshcopy3);
