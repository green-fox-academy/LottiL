import { Block } from "./Block";

export class Air extends Block {
    protected color: string = "transparent";

    constructor() {
        super("air", true, ["mud", "brick", "glass", "door", "window", "gold"])
        this.lightTransmission = 100;
    }
}