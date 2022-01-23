export class Plant {
    private color: string;
    protected waterLevel: number;
    protected waterNeed: number;
    protected className: string;

    constructor(color: string) {
        this.color = color;
        this.waterLevel = 0;
        this.waterNeed = 0;
        this.className = "Plant";
    }

    protected getIntroduction(): string {
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
    }

    toString(): string {
        if (this.needWater()) {
            return `${this.getIntroduction() + this.className + " needs water"}`;
        } else {
            return `${this.getIntroduction() + this.className + " doesnt need water"}`;
        }
    }
}