/* Reuse your Animal class
Create a Farm class
it has a list of Animals listOfAnimals
it has a limit that defines how many animals can be kept in the Farm and can be set when the Farm is created
it has two methods:
breed() -> creates a new animal if there's place for it
sell() -> removes the least hungry animal
 */

import { Animal } from "../../../Week09/Day05/Animal";

export class Farm {
    private listOfAnimals: Animal[];
    readonly limitOfAnimals: number;

    constructor(listOfAnimals: Animal[], limitOfAnimals: number) {
        this.listOfAnimals = listOfAnimals;
        this.limitOfAnimals = limitOfAnimals;
    }

    breed() {
        if (this.listOfAnimals.length < this.limitOfAnimals) {
            let newAnimal = new Animal();
            this.listOfAnimals.push(newAnimal);
        }
    }

    sell() {
        /* let hungerList: number[] = []
        this.listOfAnimals.forEach(animal => {
            hungerList.push(animal.getHunger());
        });
        
        this.listOfAnimals.splice(this.listOfAnimals.indexOf(this.listOfAnimals.find(animal=>animal.getHunger()===Math.min(...hungerList))),1) ; */

        /*         let hungriestAnimal: Animal = this.listOfAnimals[0];
                let indexOfHungriestAnimal: number = 0;
        
                for (let i = 0; i < this.listOfAnimals.length; i++) {
                    if (this.listOfAnimals[i].getHunger() < hungriestAnimal.getHunger()) {
                        hungriestAnimal = this.listOfAnimals[i];
                        indexOfHungriestAnimal = i;
                    }
                } 
        
                this.listOfAnimals.splice(indexOfHungriestAnimal,1);*/
        this.listOfAnimals.sort((a, b) => b.getHunger() - a.getHunger()).pop();
    }


}