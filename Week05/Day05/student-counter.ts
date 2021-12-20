'use strict';

const students: any[] = [
    { name: 'Theodor', age: 3, candies: 2 },
    { name: 'Paul', age: 9, candies: 2 },
    { name: 'Mark', age: 12, candies: 5 },
    { name: 'Peter', age: 7, candies: 3 },
    { name: 'Olaf', age: 12, candies: 7 },
    { name: 'George', age: 10, candies: 1 }
];

// create a function called listOfNames() that takes a list of students and returns:
// - The name of students who have more than 4 candies

// create a function called sumOfAge() that takes a list of students and returns:
// - The sum of the age of people who have less than 5 candies

function listOfNames(studentList: any[]) {
    for (let i = 0; i < studentList.length; i++) {
        if (studentList[i]["candies"] > 4) {
            console.log(studentList[i]["name"]);
        }
    }
}

listOfNames(students)

function sumOfAge(studentList: any[]) {
    let sum: number = 0
    for (let i = 0; i < studentList.length; i++) {
        if (studentList[i]["candies"] < 5) {
            sum += studentList[i]["age"];
        }
    }
    console.log(sum);
}

sumOfAge(students)