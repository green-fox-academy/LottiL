import { Sharpie } from "../../../Week09/Day05/Sharpie-class";
import { SharpieSet } from "./SharpieSet";

let green = new Sharpie("green", 10, 10);
let red = new Sharpie("red", 10);
let blue = new Sharpie("blue", 10);
let yellow = new Sharpie("yellow", 10);

let sharpieList: Sharpie[] = [green, red, blue]

green.use();

let mySharpies = new SharpieSet(sharpieList);
mySharpies.add(yellow);

console.log(mySharpies.countUsable());

mySharpies.removeTrash();

console.log(mySharpies);