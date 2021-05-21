//1
//number Type enum
//enum Days{sun,mon,tues}//0 1 2
//enum Days{sun=1,mon,tues}//1 2 3
var Days;
(function (Days) {
    Days[Days["sun"] = 1] = "sun";
    Days[Days["mon"] = 5] = "mon";
    Days[Days["tues"] = 7] = "tues";
})(Days || (Days = {})); //1 5 7
let day1 = Days.tues;
console.log(day1);
//console.log(Days[5]);
//2
//string type enum
var DAYS;
(function (DAYS) {
    DAYS["sun"] = "SUNDAY";
    DAYS["mon"] = "MONDAY";
    DAYS["tues"] = "TUESDAY";
})(DAYS || (DAYS = {}));
console.log(DAYS.mon);
//3
//hetrogeneous type enum
var WeekDay;
(function (WeekDay) {
    WeekDay["sun"] = "SUNDAY";
    WeekDay["mon"] = "MONDAY";
    WeekDay["tues"] = "TUESDAY";
    WeekDay[WeekDay["wed"] = 4] = "wed";
    WeekDay[WeekDay["thu"] = 5] = "thu";
    WeekDay[WeekDay["fri"] = 6] = "fri";
    WeekDay[WeekDay["sat"] = 7] = "sat";
})(WeekDay || (WeekDay = {}));
console.log(WeekDay.sun);
console.log(WeekDay.thu);
console.log(typeof (Days), Days);
console.log(typeof (DAYS), DAYS);
console.log(typeof (WeekDay), WeekDay);
