import { Domino } from "./domino";

function initializeDominoes(): Domino[] {
  let dominoes = [];
  dominoes.push(new Domino(5, 2));
  dominoes.push(new Domino(4, 6));
  dominoes.push(new Domino(1, 5));
  dominoes.push(new Domino(6, 7));
  dominoes.push(new Domino(2, 4));
  dominoes.push(new Domino(7, 1));
  return dominoes;
}

function print(dominoes: Domino[]) {
  dominoes.forEach(function (value) {
    console.log(value);
  });
}

let dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

function orderIntoOneSnake(dominoList:Domino[]): void{
  let dominosInOneSnake:Domino[] = [dominoList[0]]
  for (let i = 0; i < dominoList.length-1; i++) {
    let nextDomino : Domino | undefined = dominoList.find(domino => domino.getValues()[0] === dominosInOneSnake[i].getValues()[1]); 
    nextDomino ? dominosInOneSnake.push(nextDomino) : console.log("Something went wrong");
  }
  dominoes = dominosInOneSnake;
}

orderIntoOneSnake(dominoes)

print(dominoes);