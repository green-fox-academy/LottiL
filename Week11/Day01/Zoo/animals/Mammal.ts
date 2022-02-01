import { Animal } from "./Animal";
import { Gender } from "./gender";

export class Mammal extends Animal{
    private favoriteFood : string;

    constructor(name:string,age?:number,gender?:Gender,favoriteFood:string=""){
        super(name,age,gender);
        this.favoriteFood = favoriteFood;
    }

    breed() :string{
        return "pushing miniature versions out.";
    }

    eat() :void{
        console.log(`${"I eat " + this.favoriteFood}`)
    }

    setFavoriteFood(favoriteFood:string):void{
        this.favoriteFood = favoriteFood;
    }
}