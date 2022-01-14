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
import { Teacher } from "./Teacher";

let lotti = new Student("Lotti")
let emi = new Teacher("Emi")

lotti.question(emi)
emi.teach(lotti)