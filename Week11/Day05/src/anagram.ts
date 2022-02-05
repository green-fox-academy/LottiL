export function anagram(stringOne: string, stringTwo:string) :boolean{
    let isTheSame: boolean=false;
    if (stringOne.length===stringTwo.length) {
        let str1 = stringOne.split("").sort();
        let str2 = stringTwo.split("").sort();
        for (let i = 0; i < str1.length; i++) {
            if (str1[i]!==str2[i]) {
                isTheSame = false;
                break;
            }else{
                isTheSame = true;
            }             
        }
    }
    return isTheSame;   
}

console.log(anagram("aac","cba"))