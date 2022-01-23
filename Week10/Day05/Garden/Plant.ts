export class Plant {
    private color: string;
    protected waterLevel: number;
    protected waterNeed: number;

    constructor(color: string) {
        this.color = color;
        this.waterLevel = 0;
        this.waterNeed = 0;
    }

    protected getIntroduction(): string {
        return `${"The " + this.color + " "}`;
    }

    needWater(): string {
        if (this.waterLevel <= this.waterNeed) {
            return " needs water";
        } else {
            return " doesnt need water";
        }
    }

    water(waterAmount: number) {
    }

    toString(): string {
        return " "
    }
}