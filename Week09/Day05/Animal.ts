/* Create an Animal class
Every animal has a hunger value, which is a whole number
Every animal has a thirst value, which is a whole number
When creating a new animal instance these values must be set to the default 50 value
Every animal can eat() which decreases its hunger by one
Every animal can drink() which decreases its thirst by one
Every animal can play() which increases both its hunger and thirst by one */

export class Animal{
    private hunger : number;
    private thirst : number;

    constructor(hunger : number = 50,thirst : number=50){
        this.hunger = hunger;
        this.thirst = thirst;
    }

    eat(){
        this.hunger -= 1;
    }

    drink(){
        this.thirst -= 1;
    }

    play(){
        this.thirst += 1;
        this.hunger += 1;      
    }

    getHunger():number{
        return this.hunger;
    }
}