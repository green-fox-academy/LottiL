import { Printable } from "./Printable";

export class Todo implements Printable {
    private task: string;
    private priority: string;
    private isDone: boolean;

    constructor(task: string, priority: string) {
        this.task = task;
        this.priority = priority;
        this.isDone = false;
    }

    printAllFields(): void {
        console.log(`${"Task: " + this.task + " | Priority: " + this.priority + " | Done: " + this.isDone}`); 
    }

    itIsDone(): void {
        this.isDone = true;
    }
}