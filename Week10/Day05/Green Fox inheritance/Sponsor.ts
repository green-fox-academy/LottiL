import { Person } from "./Person";

export class Sponsor extends Person {
    private company: string;
    private hiredStudents: number;

    constructor(name: string = "Jane Doe", age: number = 30, gender: string = "female", company: string = "Google") {
        super(name, age, gender);
        this.company = company;
        this.hiredStudents = 0;
    }

    introduce(): void {
        console.log(super.getIntroduction() + " who represents " + this.company + " and hired " + this.hiredStudents + " students so far.")
    }

    hire(): void {
        this.hiredStudents += 1;
    }

    getGoal(): void {
        console.log("My goal is: Hire brilliant junior software developers.");        
    }
}