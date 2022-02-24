import { Block } from "./Block";
import {Mud} from "./Mud"

export class Glass extends Block {

    constructor(color: string = "transparent", lightTransmission: number = 99) {
        super("glass", false, [/*Mud, Brick, Ice, Air, Glowstone, Door*/] )
        this.color = color;
        this.lightTransmission = lightTransmission;
    }
}