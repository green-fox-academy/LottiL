import { Block } from "./Block";

export class Glass extends Block {

    constructor(color: string = "transparent", lightTransmission: number = 99) {
        super("glass", false, ["mud", "brick", "ice", "air", "glowstone", "door"])
        this.color = color;
        this.lightTransmission = lightTransmission;
    }
}