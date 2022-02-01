import { Gender } from "../../Day01/Zoo/animals/gender";
import { Bird } from "./Bird";
import { Flyable } from "./Flyable";
import { Helicopter } from "./Helicopter";

let flyableThings : Flyable[] = [new Bird("Duck", 2 ,Gender.Male,"corn"), new Helicopter(250)]

flyableThings.forEach(element => {
    console.log(element.constructor.name)
    element.fly();
    element.land();
    element.takeOff();
});