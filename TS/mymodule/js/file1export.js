"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emp = void 0;
class Emp {
    static disp() {
        console.log("Module Demo");
    }
}
exports.Emp = Emp;
class Dept {
    static disp() {
        console.log("dept");
    }
}
exports.default = Dept; //only 1 default export in a file/module
