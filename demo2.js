//es6
let a = 100;//global
function abc() {
    let b = 200;//function
    if (true) {
        const c = 300;//block
        //c=400;
        console.log(a, b, c);
    }
    //console.log(a, b, c);
}

abc();