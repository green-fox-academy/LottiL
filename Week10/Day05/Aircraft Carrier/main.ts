import { Aircraft } from "./Aircrafts";
import { F16 } from "./F16";
import { F35 } from "./F35";
import { Carrier } from "./Carrier";

let flotta = new Carrier(200,1500);
flotta.add(new F16);
flotta.add(new F16);
flotta.add(new F35);


let flotta2 = new Carrier(100,1000);
flotta2.add(new F16);
flotta2.add(new F16);
flotta2.add(new F35);


console.log(flotta.getStatus());
console.log(flotta2.getStatus());

flotta.fill();
flotta2.fill();

console.log(flotta.getStatus());
console.log(flotta2.getStatus());

flotta.fight(flotta2)

console.log(flotta.getStatus());
console.log(flotta2.getStatus());