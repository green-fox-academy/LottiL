import { Plant } from "./Plant";

export class Flower extends Plant {

    constructor(color: string) {
        super(color,5,0.75);
    }
}