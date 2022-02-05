import { Animal } from "../../../Week09/Day05/Animal";
import { Farm } from "./Farm";

function initializeAnimal(numberOfAnimal: number): Animal[] {
    let Animals: Animal[] = []
    for (let i = 0; i < numberOfAnimal; i++) {
        Animals.push(new Animal());
    }
    return Animals;
}
let animalList: Animal[] = initializeAnimal(5);

let myFarm = new Farm(7);

animalList[0].play();
animalList[1].eat();

myFarm.breed();

myFarm.sell();