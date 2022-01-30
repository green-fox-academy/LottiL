import { Aircraft } from "./Aircrafts";
import { F16 } from "./F16";
import { F35 } from "./F35";
import os from 'os';

export class Carrier {
    private listOfAircrafts: Aircraft[];
    private numberOfStoredAmmo: number;
    private healthPoint: number;

    constructor(numberOfStoredAmmo: number, healthPoint: number) {
        this.numberOfStoredAmmo = numberOfStoredAmmo;
        this.healthPoint = healthPoint;
        this.listOfAircrafts = [];
    }

    add(aircraft: Aircraft) :void{
        this.listOfAircrafts.push(aircraft);
    }

    fill():void{
        let ammoNeed: number = 0;
        this.listOfAircrafts.forEach(aircraft => {
            ammoNeed += aircraft.getMaxNumberOfAmmo();
        })
        if (this.numberOfStoredAmmo === 0) {
            throw new Error ("We are out ot Ammo, sorry");            
        } else if (this.numberOfStoredAmmo < ammoNeed) {
            this.listOfAircrafts.forEach(aircraft => {
                if (aircraft.isPriority()) {
                    this.numberOfStoredAmmo = aircraft.refillAmmo(this.numberOfStoredAmmo);
                }
            });
            this.listOfAircrafts.forEach(aircraft => {
                if (!aircraft.isPriority()) {
                    this.numberOfStoredAmmo = aircraft.refillAmmo(this.numberOfStoredAmmo);
                }
            });
        } else {
            this.listOfAircrafts.forEach(aircraft => {
                this.numberOfStoredAmmo = aircraft.refillAmmo(this.numberOfStoredAmmo);
            });
        }
    }

    fight(otherCarrier: Carrier) :void {
        let causedDamage = 0;    
        this.listOfAircrafts.forEach(aircraft => {
            if (otherCarrier.healthPoint > 0) {
                causedDamage = aircraft.fight();
                otherCarrier.healthPoint -= causedDamage; 
            }
        }); 
        if (otherCarrier.healthPoint < 0) {
            otherCarrier.healthPoint = 0;
        }     
    }

    getStatus(): string {
        let aircrafts: string = "";
        let totalDamage: number = 0;

        if (this.healthPoint === 0) {
            return "It's dead Jim :("
        } else {
            this.listOfAircrafts.forEach(aircraft => {
                aircrafts += aircraft.getStatus() + os.EOL;
                totalDamage += aircraft.getAllDamage();
            })
            return `${"HP " + this.healthPoint + ", Aircraft count: " + this.listOfAircrafts.length + ", Ammo Storage " + this.numberOfStoredAmmo + ", Total damage " + totalDamage + os.EOL + aircrafts}`
        }
    }
}