import { Animal } from "../../Day01/Zoo/animals/Animal"
import { Gender } from "../../Day01/Zoo/animals/gender";
import { Flyable } from "./Flyable";

export class Bird extends Animal implements Flyable{
    private favoriteFood : string;

    constructor(name:string,age?:number,gender?:Gender,favoriteFood:string=""){
        super(name,age,gender);
        this.favoriteFood = favoriteFood;
    }

    breed() :string{
        return "laying eggs.";
    }

    eat() :void{
        console.log(`${"I eat " + this.favoriteFood}`)
    }

    setFavoriteFood(favoriteFood:string):void{
        this.favoriteFood = favoriteFood;
    }

    fly(): void {
        console.log("I fly with my wings");        
    }

    land(): void {
        console.log("I land on my feet");        
    }

    takeOff(): void {
        console.log("I takeoff with my wings");        
    }
}