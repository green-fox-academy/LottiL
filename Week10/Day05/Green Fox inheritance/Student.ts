import { Person } from "./Person";

export class Student extends Person {
    private previousOrganization: string;
    private skippedDays: number;

    constructor(name: string = "Jane Doe", age: number = 30, gender: string = "female", previousOrganization: string="The School of Life", skippedDays: number = 0) {
        super(name, age, gender);
        this.previousOrganization = previousOrganization;
        this.skippedDays = skippedDays;
    }

    getGoal(): void {
        console.log("My goal is: Be a junior software developer.");
    }

    introduce(): void {
        console.log(super.getIntroduction() + " from " + this.previousOrganization + " who skipped " + this.skippedDays + " days from the course already.")
    }

    skipDays(numberOfDays:number):void{
        this.skippedDays += numberOfDays;
    }
}