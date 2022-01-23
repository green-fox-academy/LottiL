import { Aircraft } from "./Aircrafts";

export class F35 extends Aircraft {
    protected numberOfAmmo: number;
    protected maxNumberOfAmmo: number;
    protected baseDamage: number;
    protected type: string;

    constructor(){
        super()
        this.numberOfAmmo = 0;
        this.maxNumberOfAmmo = 12;
        this.baseDamage = 50;
        this.type = "F35"
    }
}