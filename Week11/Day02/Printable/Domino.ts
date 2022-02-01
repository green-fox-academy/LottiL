import { Printable } from "./Printable";

export class Domino implements Printable {
    private aSide: number;
    private bSide: number;

    constructor(aSide: number, bSide: number) {
        this.aSide = aSide;
        this.bSide = bSide;
    }

    printAllFields(): void {
        console.log(`${"Domino A side: " + this.aSide + ", B side: " + this.bSide}`);         
    }
}