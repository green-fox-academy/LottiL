export class Plant {
    private color: string;
    private waterLevel: number = 0;
    private waterNeed: number;
    private absorbWater: number;

    constructor(color: string, waterNeed: number, absorbWater: number) {
        this.color = color;
        this.waterNeed = waterNeed;
        this.absorbWater = absorbWater;
    }

    getIntroduction(): string {
        return `${"The " + this.color + " "}`;
    }

    needWater(): boolean {
        return this.waterLevel <= this.waterNeed;
    }

    water(waterAmount: number) {
        this.waterLevel += waterAmount * this.absorbWater;
    }

    toString(): string {
        if (this.needWater()) {
            return `${this.getIntroduction() + this.constructor.name + " needs water"}`;
        } else {
            return `${this.getIntroduction() + this.constructor.name + " doesnt need water"}`;
        }
    }
}