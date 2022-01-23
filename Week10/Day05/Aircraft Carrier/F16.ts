import { Aircraft } from "./Aircrafts";

export class F16 extends Aircraft {
    protected numberOfAmmo: number;
    protected maxNumberOfAmmo: number;
    protected baseDamage: number;
    protected type: string;

    constructor(){
        super()
        this.numberOfAmmo = 0;
        this.maxNumberOfAmmo = 8;
        this.baseDamage = 30;
        this.type = "F16"
    }

    isPriority(): boolean {
        return false;
    }
}