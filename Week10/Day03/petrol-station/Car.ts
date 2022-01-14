/* Create Station and Car classes
Station
it stores how much gas is avaliable: gasAmount
it can refill a car: refill(car: Car):
decreases the gasAmount by the capacity of the car (let us suppose that the car is empty) and
increases the car's gasAmount
Car
it stores how much gas is actually present: gasAmount
it stores the capacity of the tank: capacity
create a constructor for the Car class where you:
initialize gasAmount -> 0
initialize capacity -> 100 */

import { Stations } from "./Station";

export class Car{
    private gasAmount: number;
    private capacity: number;

    constructor(gasAmount: number=0, capacity: number=100){
        this.gasAmount = gasAmount;
        this.capacity = capacity;
    }

    getCapacity():number{
        return this.capacity;
    }

    setGasAmount():void{
        this.gasAmount = this.getCapacity();
    }

}