export class Plant {
    private color: string;
    private waterLevel: number;
    private waterNeed: number;
    private absorbWater: number;

    constructor(color: string, waterLevel: number,waterNeed: number,absorbWater: number) {
        this.color = color;
        this.waterLevel = waterLevel;
        this.waterNeed = waterNeed;
        this.absorbWater = absorbWater;
    }

    getIntroduction(): string {
        return `${"The " + this.color + " "}`;
    }

    needWater(): boolean {
        if (this.waterLevel <= this.waterNeed) {
            return true;
        } else {
            return false;
        }
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