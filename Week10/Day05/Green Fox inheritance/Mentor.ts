import { Person } from "./Person";

export class Mentor extends Person {
    private level: string;

    constructor(name: string = "Jane Doe", age: number = 30, gender: string = "female", level: string = "intermediate") {
        super(name, age, gender);
        this.level = level;
    }

    getGoal(): void {
        console.log("My goal is: Educate brilliant junior software developers.");
    }

    introduce(): void {
        console.log(super.getIntroduction() + " " + this.level + " mentor.");
    }
}