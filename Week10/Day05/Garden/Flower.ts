import { Plant } from "./Plant";

export class Flower extends Plant {
    protected className: string;

    constructor(color: string) {
        super(color);
        this.waterLevel = 0;
        this.waterNeed = 5;
        this.className = "Flower";
    }

    water(waterAmount: number) {
        this.waterLevel += waterAmount * 0.75;
    }
}