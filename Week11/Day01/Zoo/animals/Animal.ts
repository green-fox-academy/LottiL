import { Gender } from "./gender";

export abstract class Animal {
    private name: string;
    protected age: number;
    protected gender: Gender;

    constructor(name: string,age: number = 0, gender: Gender = Gender.Female){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    getName():string{
        return this.name;
    }

    drink():void{
        console.log("I drink water");
    }

    abstract breed():string;

    abstract eat():void;
}