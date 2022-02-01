import { Domino } from "./Domino";
import { Todo } from "./Todo";

let dominoes: Domino[] = [new Domino(1, 2), new Domino(2, 3), new Domino(3, 4)];
let todos: Todo[] = [new Todo("Buy milk", "high"), new Todo("To cook", "low")]
todos[0].itIsDone();

for (let domino of dominoes) {
  domino.printAllFields();
}

for (let todo of todos) {
  todo.printAllFields();
}