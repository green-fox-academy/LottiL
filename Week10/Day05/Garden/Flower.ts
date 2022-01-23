import { Plant } from "./Plant";

export class Flower extends Plant {
    private className: string;

    constructor(color: string) {
        super(color);
        this.waterLevel = 0;
        this.waterNeed = 5;
        this.className = "Flower";
    }

    toString(): string {
        return `${this.getIntroduction() + this.className + this.needWater()}`
    }

    water(waterAmount: number) {
        this.waterLevel += waterAmount * 0.75;
    }
}

//A watert valahogy nem lehetne a plants-ból szedni?
// class nevére nem tudok hivatkozni?