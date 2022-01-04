'use strict';
// "Saturn" is missing from the planetList
// Insert it into the correct position
// Create a method called "putSaturn()" which has a list parameter and returns the correct list
// bonus for using some built in methods

let planetList: string[] = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Uranus', 'Neptune'];
// Expected output: "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn",  "Uranus", "Neptune"



export function putSaturn(list: string[]): string[] {
    let correctPlanetList: string[] = [];
    for (let i = 0; i <= list.indexOf('Jupiter'); i++) {
        correctPlanetList.push(list[i]);
    }
    correctPlanetList.push("Saturn");
    for (let i = 1; i < list.length - list.indexOf('Jupiter'); i++) {
        correctPlanetList.push(list[i + list.length - list.indexOf('Jupiter') + 1]);
    }
    return correctPlanetList;
}

console.log(putSaturn(planetList));