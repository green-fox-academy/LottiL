/* We are going to play with maps. Feel free to use the built-in methods where possible.

Create an empty map where the keys are integers and the values are characters
Print out whether the map is empty or not
Add the following key-value pairs to the map
Key	Value
97	a
98	b
99	c
65	A
66	B
67	C
Print all the keys
Print all the values
Add value D with the key 68
Print how many key-value pairs are in the map
Print the value that is associated with key 99
Remove the key-value pair where with key 97
Print whether there is an associated value with key 100 or not
Remove all the key-value pairs
Print how many key-value pairs are in the map
The full output of your main method should be the following:

true
[97, 65, 98, 66, 99, 67]
[a, A, b, B, c, C]
7
c
a
false
0 */

let map: { [key: number]: string } = {};

let IsEmpty1: boolean = Object.keys(map).length === 0;

console.log("the map is Empty: " + IsEmpty1);

map = {
    97: "a",
    98: "b",
    99: "c",
    65: "A",
    66: "B",
    67: "C",
};

console.log(Object.keys(map));

console.log(Object.values(map));

map[68] = "D";

console.log(Object.keys(map).length);

//console.log(Object.entries(map).length); key-value párok array-ben (2D array)

console.log(map[99]);

delete map[97];

let IsKay100: boolean = map[100] !== undefined;  //console.log(!!map[]) - !undefind-ot ad, ami

console.log(IsKay100);

map = {};

console.log(Object.keys(map).length);
