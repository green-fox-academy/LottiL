import { Block } from "./Block";
import { Mud } from "./Mud";
import { Glass } from "./Glass";
import { Air } from "./Air";
import { Gold } from "./Gold";
import { Brick } from "./Brick";

let mud = new Mud;
mud.printStatus()
let glass = new Glass;
console.log(glass.canPlaceAfter(mud))