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
        let randomDay:string= dayOfWeek[Math.floor(Math.random() * dayOfWeek.length)];

        return randomDay;
    }

    getCodeBooking(): string{
        let characters:string[]="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");
        let randomCode:string= ""
        for (let i = 0; i < 8; i++) {
            randomCode += characters[Math.floor(Math.random() * characters.length)];            
        }
        //let randomCode:string= Math.random().toString(36).replace(/[^0-9a-z]+/g, '').substring(0, 8).toUpperCase(); ami nem jó, azt eldobja, így kevesebb karakter

        return randomCode;
    }

    toString():void{
        console.log("Booking# " + this.codeBooking + " for " + this.dowBooking);        
    }
}