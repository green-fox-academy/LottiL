/* Create an Armada class
Contains a list of Ship
Have a armada.war(otherArmada: Armada) method where two armada can engage in war
it should work like merge sort
first ship from the first armada battles the first one from the other
the loser ship gets skipped so the next ship comes in play from the loser ship's armada
it starts a battle with the first (not yet defeated) ship from the other armada
whichever armada gets to the end of its ships loses the war
return true if this is the winner */

import { Pirate } from "./pirate";
import { Ship } from "./ship";
import { BattleApp } from "./battleApp";
import { WarApp } from "./warApp";
import { getRandomInt } from "./random";

export class Armada {
    private listOfShips: Ship[] = [];

    fillArmada() {
        let randomNumber: number = getRandomInt(3, 10);
        for (let i = 0; i <= randomNumber; i++) {
            this.listOfShips.push(new Ship());
            this.listOfShips[i].fillShip();
        }
    };

    war(otherArmada: Armada): boolean {
        let i: number = 0;
        let j: number = 0;
        let battleWinner: boolean = true;

        while (i < this.listOfShips.length && j < otherArmada.listOfShips.length){
            //console.log("this" + this.listOfShips);
            //console.log("other" + otherArmada.listOfShips);            
            
            battleWinner = this.listOfShips[i].battle(otherArmada.listOfShips[j]);
            //console.log(battleWinner)
            if (battleWinner) {
                j = j + 1;
            } else {
                i = i + 1;
            }
        };        

        if (battleWinner) {
            console.log("this Armada won")
            return true;
        } else {
            console.log("other Armada won")
            return false;
        };
    };
};