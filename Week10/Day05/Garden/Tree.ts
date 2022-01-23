import { Plant } from "./Plant";

export class Tree extends Plant {
    protected className: string;

    constructor(color: string) {
        super(color);
        this.waterLevel = 0;
        this.waterNeed = 10;
        this.className = "Tree";
    }

    water(waterAmount: number) {
        this.waterLevel += waterAmount * 0.4;
    }
}
