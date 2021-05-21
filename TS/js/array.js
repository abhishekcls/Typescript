let fruits = ['Orange'];
fruits.push("Apple");
let n = fruits.push("Banana");
//fruits.push(56);//error
console.log(fruits, n);
//fruits.sort();
//console.log(fruits);
fruits.reverse();
console.log(fruits);
let scores;
scores = [56, 12, 1, 78, 100];
console.log(scores);
scores.forEach(v => console.log(v));
//task
//sort the scores
function order(a, b) {
    return a - b;
}
scores.sort(order);
console.log(scores);
scores.sort((a, b) => b - a);
console.log(scores);
console.log(fruits.join());
console.log(fruits.join(', '));
console.log(fruits.join(':'));
console.log(fruits.join('#'));
console.log(fruits.pop()); //remove last value
console.log(fruits);
console.log(fruits.shift()); //remove first value
console.log(fruits);
let num = fruits.unshift("Kiwi"); //add first value
console.log(fruits, num);
/*
delete fruits[0];//dangerous
console.log(fruits);

console.log(fruits[0]);
*/
let deleted = fruits.splice(0, 1); //better delete
console.log('deleted', deleted);
console.log(fruits);
let games = ['polo', 'cricket', 'hockey'];
console.log(games);
games.splice(1, 0, 'badminton', 'squash'); //adding
console.log(games);
deleted = games.splice(1, 2, 'race'); //replace
console.log(games);
console.log('deleted', deleted);
deleted = games.splice(1, 1, 'swim', 'jump');
console.log(games);
console.log('deleted', deleted);
let group = fruits.concat(games);
console.log(fruits);
console.log(games);
console.log(group);
let g = games.slice(1);
console.log(g, games);
g = games.slice(3);
console.log(g, games);
g = games.slice(1, 3);
console.log(g, games);
