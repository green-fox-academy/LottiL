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

    add(aircraft: Aircraft) {
        this.listOfAircrafts.push(aircraft);
    }

    fight(otherCarrier: Carrier) {
        let causedDamage = 0;
        this.listOfAircrafts.forEach(aircraft => {
            causedDamage += aircraft.fight();
        })
        otherCarrier.healthPoint -= causedDamage;
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