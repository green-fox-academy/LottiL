import { TransformerBlock } from "./TransformerBlock";
import { Block } from "./Block";
import { Gold } from "./Gold";

export class Glowstone extends TransformerBlock {
    protected color: string = "white";

    constructor() {
        super("glowstone", false, ["glass", "ice", "air", "lava"],[["glass" ,"gold"]])
        this.lightTransmission = 300;
    }

    transform(block:Block):void{
        for (let i = 0; i < this.transformFromTo.length; i++) {
            if (block.getType() === this.transformFromTo[i][0]){
                block = new Gold(160);
                this.hasTransformedABlock = true;
            }       
        }        
    }
}