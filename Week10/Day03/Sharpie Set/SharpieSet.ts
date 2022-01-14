/* Reuse your Sharpie class
Create SharpieSet class
-it contains a list of Sharpie, named listOfSharpies
-it has a method that adds a new Sharpie to the set: add(sharpie: Sharpie)
-it has a method that returns the number of usable Sharpies: countUsable() -> sharpie is usable if it contains ink
-it has a method that removes all unusable Sharpies: removeTrash() */

import { Sharpie } from "../../../Week09/Day05/Sharpie-class";

export class SharpieSet {
    private listOfSharpies: Sharpie[];

    constructor(listOfSharpies: Sharpie[]) {
        this.listOfSharpies = listOfSharpies;
    };

    add(sharpie: Sharpie) {
        this.listOfSharpies.push(sharpie);
    }

    countUsable(): number {
        let numberOfUsable: number = 0;
        this.listOfSharpies.forEach(sharpie => {
            if (sharpie.getInkAmount() > 0) {
                numberOfUsable = numberOfUsable + 1;
            }
        });
        return numberOfUsable;
    }

    removeTrash() {
        let listOfUsableSharpies: Sharpie[] = [];
        this.listOfSharpies.forEach(sharpie => {
            if (sharpie.getInkAmount() > 0) {
                listOfUsableSharpies.push(sharpie);
            }
        });
        this.listOfSharpies = listOfUsableSharpies;
    }
}