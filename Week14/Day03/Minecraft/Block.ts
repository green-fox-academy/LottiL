import os from 'os';

export abstract class Block {
    private type: string;
    protected color: string = "";
    protected lightTransmission: number = 0;
    private canBeCrossed: boolean;
    private canBeAdjacentTo: Block[];

    constructor(type: string, canBeCrossed: boolean, canBeAdjacentTo: Block[]) {

        this.type = type;
        this.canBeCrossed = canBeCrossed;
        this.canBeAdjacentTo = canBeAdjacentTo;
    }

    canPlaceAfter(block: Block): boolean {
        return this.canBeAdjacentTo.includes(block);
    }

    getTransmission(): number {
        return this.lightTransmission;
    }

    printStatus(): void {
        let canCross: string = this.canBeCrossed ? " Can not be crossed." : "Can not be crossed."
        console.log(
            "Block of type: " + this.type + os.EOL +
            "Has light transmission: " + this.lightTransmission + os.EOL +
            canCross
        )
    }
}