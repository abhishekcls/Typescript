let obj = {
    'eid': 101,
    'ename': 'ravi',
    'hobbies': ['read', 'write', 'play'],
    'disp': function () {
        this.hobbies.forEach(function (v) {
            console.log(`${this.ename} likes to ${v}`);
        }, this);
        //console.log(this.hobbies);
    }
};
obj.disp();
//--------------------------
let obj2 = {
    'eid': 101,
    'ename': 'ravi',
    'hobbies': ['read', 'write', 'play'],
    'disp': function () {
        this.hobbies.forEach(v => console.log(`${this.ename} likes to ${v}`));
        //console.log(this.hobbies);
    }
};
obj2.disp();
