var N1;
(function (N1) {
    N1.a = 100;
    class Emp {
    }
})(N1 || (N1 = {}));
var N2;
(function (N2) {
    function abc() {
        console.log(N1.a);
    }
    abc();
})(N2 || (N2 = {}));
