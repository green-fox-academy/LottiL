/* Create a Pirate class. You can add other fields and methods, yet, you must have these methods:

drinkSomeRum() - intoxicates the Pirate by one
howsItGoingMate() - when called, the Pirate replies:
if drinkSomeRun() was called less than 4 times:
"Pour me anudder!"
else:
"Arghh, I'ma Pirate. How d'ya d'ink its goin?". Then the pirate passes out and sleeps it off (gets rid of the intoxication).
If you manage to get this far, then you can try to do the following.

brawl(pirate: Pirate) - where pirate fights another pirate (if both of them are alive):
there is 1/3 chance that this dies, the other dies or they both pass out.
die() - this kills off the pirate. When a pirate is dead, every method simply results in: he's dead.
And... if you get that far...

Add a parrot. */

import { Ship } from "./ship";
import { Armada } from "./armada";
import { BattleApp } from "./battleApp";
import { WarApp } from "./warApp";
import { Animal } from "../../../Week09/Day05/Animal";
import { getRandomInt } from "./random";

export class Pirate {
    private toxic: number;
    private parrot?: Animal;
    private isAlive: boolean;

    constructor(parrot?: Animal) {
        this.toxic = 0;
        this.isAlive = true;
        this.parrot = parrot;
    };

    getIsAlive(): boolean {
        return this.isAlive;
    };

    getNumberOfRum(): number {
        return this.toxic;
    };

    drinkSomeRum() {
        if (this.isAlive === false) {
            console.log("he's dead");
        } else {
            this.toxic = this.toxic + 1;
        }
    };

    howsItGoingMate() {
        if (this.isAlive === false) {
            console.log("he's dead");
        } else if (this.toxic < 4) {
            console.log("Pour me anudder!");
        } else {
            console.log("Arghh, I'ma Pirate. How d'ya d'ink its goin?");
            this.toxic = 0;
        }
    };

    brawl(pirate: Pirate) {
        let randomNumber: number = getRandomInt(0, 2);
        if (this.isAlive === false || pirate.isAlive === false) {
            console.log("he's dead");
        } else if (randomNumber === 0) {
            this.die();
        } else if (randomNumber === 1) {
            pirate.die();
        } else {
            this.toxic = 0;
            pirate.toxic = 0;
        }
    };

    die() {
        this.isAlive = false;
    };

    toString(): string {
        return `${"I drink " + this.getNumberOfRum() + " rum" + " ,and I my alive state is: " + this.isAlive + "."}`;
    };
};