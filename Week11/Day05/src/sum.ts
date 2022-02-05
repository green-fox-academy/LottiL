export class sum {
    sum(listOfInteger : number[]):number{
        let sumOfInteger: number = 0;
        for (let i = 0; i < listOfInteger.length; i++) {
            sumOfInteger += listOfInteger[i];            
        }
        return sumOfInteger;
    }    
}
