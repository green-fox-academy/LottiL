import { Block } from "./Block";

export class Gold extends Block {
    protected color: string = "rgb: 255,215,0";

    constructor(lightTransmission:number) {
        super("gold", false, ["glowStone", "glass"])
        this.lightTransmission = lightTransmission;
    }
}