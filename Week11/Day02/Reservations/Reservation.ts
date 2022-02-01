import {Reservationy} from "./Reservationy";

export class Reservation implements Reservationy{
    private dowBooking:string;
    private codeBooking:string;

    constructor(){
        this.codeBooking = this.getCodeBooking();
        this.dowBooking = this.getDowBooking();
    }

    getDowBooking(): string{
        let dayOfWeek:string[]=["MON","TUE","WED","THU","FRI","SAT","SUN"]
        let randomDay:string= dayOfWeek[Math.floor(Math.random() * 7)];

        return randomDay;
    }

    getCodeBooking(): string{
        let randomCode:string= Math.random().toString(36).replace(/[^a-z]+/g, '').substring(0, 8).toUpperCase();

        return randomCode;
    }

    toString():void{
        console.log("Booking# " + this.codeBooking + " for " + this.dowBooking);        
    }
}