import { Block } from "./Block";

export class Mud extends Block {
    protected color: string = "dark gray";

    constructor() {
        super("mud", false, ["brick", "air", "lava", "door", "window", "gold"])
        this.lightTransmission = 0;
    }
}