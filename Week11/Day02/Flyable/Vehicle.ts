import { LivingArea } from "./livingArea";

export abstract class Vehicle {
    private maxSpeed: number;
    private numberOfWheels: number;
    private livingArea: LivingArea;

    constructor(maxSpeed: number, numberOfWheels: number, livingArea: LivingArea) {
        this.maxSpeed = maxSpeed;
        this.numberOfWheels = numberOfWheels;
        this.livingArea = livingArea;
    }
}