import { Plant } from "./Plant";
import { Flower } from "./Flower";
import { Tree } from "./Tree";
import os from 'os';

export class Garden {
    private plantList: Plant[] = [];

    addPlant(plant: Plant) {
        this.plantList.push(plant);
    }

    waterGarden(waterAmount: number) {
        let divideNumber = 0;
        for (let i = 0; i < this.plantList.length; i++) {
            if (this.plantList[i].needWater()) {
                divideNumber += 1;
            }
        };

        for (let j = 0; j < this.plantList.length; j++) {
            if (this.plantList[j].needWater()) {
                this.plantList[j].water(waterAmount / divideNumber);
            }
        }
    }

    toString(): string {
        let plantsInTheGarden: string = ""
        this.plantList.forEach(element => {
            plantsInTheGarden += element.toString() + os.EOL;
        })
        return plantsInTheGarden;
    }

}