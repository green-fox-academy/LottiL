import { Block } from "./Block";

export class Mud extends Block{
    protected color :string = "dark gray";

    constructor(){
        super("mud",false,[/* Brick, Air, Lava, Door, Window, Gold */])
        this.lightTransmission = 0;
    }
}