class HolidayDestination {
    constructor() {
        this.id = 100;
    }
    location() {
        console.log("Within India");
    }
}
//new HolidayDestination();//error
class Mussoorie extends HolidayDestination {
    constructor() {
        super(...arguments);
        this.name = 'Mussoorie';
    }
    //name='Mussoorie';//this is not fulfilling abstract
    //as its looking for string name
    //if in abstract calss name is any type then any name would work
    details() {
        console.log(`${this.name} is in Uttarakhand`);
    }
}
let mus = new Mussoorie();
console.log(mus);
mus.details();
mus.location();
