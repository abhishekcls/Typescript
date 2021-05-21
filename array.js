let games=['polo','cricket','hockey'];

console.log(games);

console.log("========for=========");
for(let i=0;i<games.length;i++){
    console.log(games[i]);
}
console.log("========while=========");
let i=0;
while(i<games.length){
    console.log(games[i++]);
}
console.log("========do..while=========");
i=0;
do{
    console.log(games[i++]);
}while(i<games.length);
console.log("========for..in=========");
i=0;
for(i in games){
    console.log(i,games[i]);
}
console.log("========for..of=========");
for(let g of games){
    console.log(g);
}
console.log("========forEach=========");

games.forEach(function(value){
    console.log(value);
});

console.log("========forEach with arrow=========");

games.forEach((value)=>{
    console.log(value);
});