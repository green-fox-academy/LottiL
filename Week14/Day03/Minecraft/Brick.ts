import { Block } from "./Block";

export class Brick extends Block {
    protected color: string;

    constructor(color: string = "rgb: 144, 76, 42",) {
        super("brick", false, ["mud", "glass", "air", "door", "window"])
        this.lightTransmission = 0;
        this.color = color;
    }
}