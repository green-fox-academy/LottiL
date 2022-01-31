import { Flower } from "./Flower";
import { Tree } from "./Tree";
import { Garden } from "./Garden";

let yellow = new Flower("yellow");
let blue = new Flower("blue");
let purple = new Tree("purple");
let orange = new Tree("orange");

let garden = new Garden();

garden.addPlant(yellow);
garden.addPlant(blue);
garden.addPlant(purple);
garden.addPlant(orange);

console.log(garden.toString());

garden.waterGarden(40);

console.log(garden.toString());

garden.waterGarden(70);

console.log(garden.toString());