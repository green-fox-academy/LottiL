import { StringedInstrument } from "./StringedInstrument";

export class Violin extends StringedInstrument {

    constructor(numberOfStrings: number = 4) {
        super("Violin", numberOfStrings)
    }

    sound(): string {
        return "Screech";
    }

    play(): void {
        console.log(`${this.name + ", a " + this.numberOfStrings + "-stringed instrument that goes " + this.sound()}`);
    }
}