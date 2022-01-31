import { StringedInstrument } from "./StringedInstrument";

export class ElectricGuitar extends StringedInstrument {

    constructor(numberOfStrings: number = 6) {
        super("Electric Guitar", numberOfStrings)
    }

    sound(): string {
        return "Twang";
    }

    play(): void {
        console.log(`${this.name + ", a " + this.numberOfStrings + "-stringed instrument that goes " + this.sound()}`);
    }
}