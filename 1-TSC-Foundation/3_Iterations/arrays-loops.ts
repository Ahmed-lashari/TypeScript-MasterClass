let isname: string = ""; //prompt("Add fav fruits (seperated by commas , ): ") ?? "";

// ARRAYS
let fruits: string[] = [];

if (isname !== "") {
  /// mapping
  fruits = isname.split(",").map((fruit) => fruit.trim());

  // FOR OF LOOP
  console.log("Fruits List:");
  for (let x of fruits) {
    console.log(x);
  }
}

//==============================================================================

// FOR LOOP
let limit: number;

// *
// **
// ***
// ****
// *****
limit = 0; //Number(prompt("Input the limit: ")) ?? 5;

let num1: number = 1;
let num2: number = 1;
let start: string = "";

// rows
for (num1 = 1; num1 <= limit; num1++) {
  start = "";
  // columns
  for (num2 = 1; num2 <= num1; num2++) {
    start += num2;
  }
  console.log(start);
}
console.log("\n\n");
//==============================================================================
// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

for (num1 = 1; num1 <= limit; num1++) {
  start = "";
  for (num2 = 1; num2 <= num1; num2++) {
    start += " * ";
  }
  console.log(start);
}

for (let num1 = limit - 1; num1 >= 1; num1--) {
  let stars = "";
  for (let num2 = 1; num2 <= num1; num2++) {
    stars += " * ";
  }
  console.log(stars);
}

//==============================================================================

// Table of 3
num1 = 1;
while (num1 <= 10) {
  console.log(`3 x ${num1} = ${3 * num1}`);
  num1++;
}

//==============================================================================
// TUPLES

// let isTuple: [] = [];                                              // correct
// let isTuple3: [string, number, number] = ["Ahmed Lashari", 5, 77]; // correct
// let isTuple2:[] = ["Ahmed Lashari", 5, 77]                         // incorrect

let myTuple: [x: number, y: string, z: boolean] = [
  20,
  "Understanding Typescript's script",
  true,
];

for (let x of myTuple) {
  console.log(x);
}

let [a, b, c] = myTuple;
console.log(`Number: ${a}`);
console.log(`Agenda: ${b}`);
console.log(`Status: ${c}`);

//==============================================================================
// OBJECTS

let tutor: {
  name: string;
  age: number;
  experienceInYrs: number;
  qualification: string;
  certifications: [string, string, string];
  status: boolean;
} = {
  name: "Ahmed Lashari",
  age: 20,
  experienceInYrs: 2.5,
  qualification: "U-Grad",
  certifications: ["FlutterDev", "Python-Beginner to Advance", "DjangoWebDev"],
  status: true,
};
