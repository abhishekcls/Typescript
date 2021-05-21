//1
//number Type enum
//enum Days{sun,mon,tues}//0 1 2
//enum Days{sun=1,mon,tues}//1 2 3
enum Days{sun=1,mon=5,tues=7}//1 5 7
let day1:Days=Days.tues;

console.log(day1);

//console.log(Days[5]);
//2
//string type enum
enum DAYS{
    sun='SUNDAY',
    mon='MONDAY',
    tues='TUESDAY'
}

console.log(DAYS.mon);

//3
//hetrogeneous type enum
enum WeekDay{
    sun='SUNDAY',
    mon='MONDAY',
    tues='TUESDAY',
    wed=4,
    thu,
    fri,
    sat
}
console.log(WeekDay.sun);
console.log(WeekDay.thu);

console.log(typeof(Days),Days);
console.log(typeof(DAYS),DAYS)
console.log(typeof(WeekDay),WeekDay);