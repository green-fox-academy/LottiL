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

import { Car } from "./Car";

export class Stations{

    private gasAmount: number;

    constructor(gasAmount: number){
        this.gasAmount = gasAmount;
    }

    refill(car: Car){
        this.gasAmount = this.gasAmount - car.getCapacity();
        car.setGasAmount();
    }

}