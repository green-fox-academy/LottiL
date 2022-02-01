import { Vehicle } from "./Vehicle";
import { LivingArea } from "./livingArea";
import { Flyable } from "./Flyable";

export class Helicopter extends Vehicle implements Flyable{
    constructor(maxSpeed:number){
        super(maxSpeed,0,LivingArea.Air)
    }

    fly(): void {
        console.log("I fly with my rotor");        
    }

    land(): void {
        console.log("When I land I make wind");        
    }

    takeOff(): void {
        console.log("When I takeoff I make wind");        
    }
}