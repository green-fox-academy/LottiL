import { Aircraft } from "./Aircrafts";
import { F16 } from "./F16";
import { F35 } from "./F35";
import { Carrier } from "./Carrier";

let f16 = new F16;
let f35 = new F35;
f16.refillAmmo(200);
f35.refillAmmo(200);
let flotta = new Carrier(100,200);
flotta.add(f16)
flotta.add(f35)


console.log(f16.getStatus());
console.log(f35.getStatus());

let ff16 = new F16;
ff16.refillAmmo(100);
let flotta2 = new Carrier(50,100);

flotta2.add(ff16)

flotta.fight(flotta2)

console.log(flotta.getStatus());
console.log(flotta2.getStatus());
