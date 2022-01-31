import { StringedInstrument } from "./StringedInstrument";

export class BassGuitar extends StringedInstrument {

    constructor(numberOfStrings: number = 4) {
        super("Bass Guitar", numberOfStrings)
    }

    sound(): string {
        return "Duum-duum-duum";
    }

    play(): void {
        console.log(`${this.name + ", a " + this.numberOfStrings + "-stringed instrument that goes " + this.sound()}`);
    }
}