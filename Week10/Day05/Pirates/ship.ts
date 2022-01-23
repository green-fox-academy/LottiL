/* The place for the Pirates

Create a Ship class.
The Ship stores Pirateinstances in a list as the crew and has one captain who is also a Pirate.
When a ship is created it doesn't have a crew or a captain.
The ship can be filled with pirates and a captain via fillShip() method.
fills the ship with a captain and a random (maximum 113) number of pirates
Ships should be represented in a nice way on command line including information about
rum consumed by the captain and its state (dead or alive)
number of alive pirates in the crew
Ships should have a method to battle other ships: ship.battle(otherShip: Ship)
should return true if the actual ship (this) wins
the ship should win if its calculated score is higher
calculated score: Number of alive pirates in the crew - Number of consumed rum by the captain
The loser crew has a random number of losses (deaths).
The winning captain and crew has a party: everyone drinks a random number of rum :) */

import { Pirate } from "./pirate";
import { Armada } from "./armada";
import { BattleApp } from "./battleApp";
import { WarApp } from "./warApp";
import { getRandomInt } from "./random";
import os from 'os';

export class Ship {
    private pirateList: Pirate[] = [];
    private captain: Pirate = new Pirate();

    fillShip() {
        let randomNumber: number = getRandomInt(2, 113);
        for (let i = 0; i <= randomNumber; i++) {
            this.pirateList.push(new Pirate());
        }
        this.captain = new Pirate();
        let randomNumber2: number = getRandomInt(1, 5);
        for (let i = 0; i < randomNumber2; i++) {
            this.captain.drinkSomeRum();
        }
    };

    getNumberOfAlivePirates(): number {
        let numberOfAlivePirates: number = 0;
        this.pirateList.forEach(pirate => {
            if (pirate.getIsAlive()) {
                numberOfAlivePirates += 1;
            }
        })
        return numberOfAlivePirates;
    };

    battleScore(): number {
        return this.getNumberOfAlivePirates() - this.captain.getNumberOfRum();
    };

    drinkRum() {
        let randomNumber: number = getRandomInt(1, 5);
        for (let i = 0; i < randomNumber; i++) {
            this.captain.drinkSomeRum();
            this.pirateList.forEach(pirate => {
                pirate.drinkSomeRum();
            })
        }
    };

    battleWinner(looser: Ship) {
        this.drinkRum();
        let randomDie: number = getRandomInt(1, looser.getNumberOfAlivePirates() - 3);
        for (let i = 0; i <= randomDie; i++) {
            looser.pirateList[i].die();
        }
    };

    battle(otherShip: Ship): boolean {
        if (this.battleScore() > otherShip.battleScore()) {
            this.battleWinner(otherShip);
            return true;
        } else {
            otherShip.battleWinner(this);
            return false;
        }
    };

    toString(): string {
        return `${os.EOL + "Captain: " + this.captain + " The number of alive pirates is " + this.getNumberOfAlivePirates() + "."}`
    };
};