abstract class HolidayDestination{
    id:number=100;
    abstract name:string;
    abstract details():void;
    location(){
        console.log("Within India");
    }
}

//new HolidayDestination();//error
class Mussoorie extends HolidayDestination{
    name:string='Mussoorie';
    //name='Mussoorie';//this is not fulfilling abstract
    //as its looking for string name
    //if in abstract calss name is any type then any name would work
    details(){
        console.log(`${this.name} is in Uttarakhand`);
    }
}

let mus:Mussoorie=new Mussoorie();
console.log(mus);
mus.details();
mus.location();