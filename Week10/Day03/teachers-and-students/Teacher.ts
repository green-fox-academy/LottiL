/* Create Student and Teacher classes
Student
learn() -> prints: the student is actually learning
question(teacher) -> calls the teacher's giveAnswer() method
Teacher
teach(student) -> calls the student's learn() method
giveAnswer() -> prints: the teacher is answering a question
Instantiate a Student and Teacher object
Call the student's question() method and the teacher's teach() method */

import { Student } from "./Student";

export class Teacher {

    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    teach(student: Student): void {
        student.learn();
    }

    giveAnswer(): void {
        console.log(this.name + " is answering a question");
    }

}