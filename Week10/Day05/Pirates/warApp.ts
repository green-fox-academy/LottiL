/* Create a WarApp class, where you can fight with armadas
Create 2 armadas, fill them with ships
Have a war! */

import { Pirate } from "./pirate";
import { Ship } from "./ship";
import { Armada } from "./armada";
import { BattleApp } from "./battleApp";

export class WarApp{
    private ArmadaOne = new Armada;
    private ArmadaTwo = new Armada;

    warApp(){
        this.ArmadaOne.fillArmada();
        this.ArmadaTwo.fillArmada();
        this.ArmadaOne.war(this.ArmadaTwo);
    }
};