import { Plant } from "./Plant";

export class Tree extends Plant {
    private className: string;

    constructor(color: string) {
        super(color);
        this.waterLevel = 0;
        this.waterNeed = 10;
        this.className = "Tree";
    }

    toString(): string {
        return `${this.getIntroduction() + this.className + this.needWater()}`;
    }

    water(waterAmount: number) {
        this.waterLevel += waterAmount * 0.4;
    }
}
