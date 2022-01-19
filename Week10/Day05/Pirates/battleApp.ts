/* Create a BattleApp class, where you can fight with ships
Create 2 ships, fill them with pirates
Have a battle! */

import { Pirate } from "./pirate";
import { Ship } from "./ship";
import { Armada } from "./armada";
import { WarApp } from "./warApp";

export class BattleApp{
    private shipOne = new Ship;
    private shipTwo = new Ship;

    shipBattle(){
        this.shipOne.fillShip();
        this.shipTwo.fillShip();
        console.log(this.shipOne.toString());
        console.log(this.shipTwo.toString());
        this.shipOne.battle(this.shipTwo);
        console.log(this.shipOne.toString());
        console.log(this.shipTwo.toString());
    }
};