import { Block } from "./Block";

export abstract class TransformerBlock extends Block{
    protected transformFromTo : string[][] = [];
    protected hasTransformedABlock: boolean = false;    

    constructor(type: string, canBeCrossed: boolean, canBeAdjacentTo: string[],transformFromTo : string[][]){
        super(type,canBeCrossed,canBeAdjacentTo);
        this.transformFromTo = transformFromTo;
    }

    abstract transform(block:Block):void

    printStatus(): void {
        let infoAboutTransformation : string = this.hasTransformedABlock ? "Made no transformation" : "Has transformed a block of type ... to ...";
        console.log (super.printStatus() + infoAboutTransformation)
    }
}