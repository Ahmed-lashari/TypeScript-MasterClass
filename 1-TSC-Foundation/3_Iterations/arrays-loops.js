var isname = ""; //prompt("Add fav fruits (seperated by commas , ): ") ?? "";
// ARRAYS
var fruits = [];
if (isname !== "") {
    /// mapping
    fruits = isname.split(",").map(function (fruit) { return fruit.trim(); });
    // FOR OF LOOP
    console.log("Fruits List:");
    for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
        var x = fruits_1[_i];
        console.log(x);
    }
}
//==============================================================================
// FOR LOOP
var limit;
// *
// **
// ***
// ****
// *****
limit = 0; //Number(prompt("Input the limit: ")) ?? 5;
var num1 = 1;
var num2 = 1;
var start = "";
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
for (var num1_1 = limit - 1; num1_1 >= 1; num1_1--) {
    var stars = "";
    for (var num2_1 = 1; num2_1 <= num1_1; num2_1++) {
        stars += " * ";
    }
    console.log(stars);
}
//==============================================================================
// Table of 3
num1 = 1;
while (num1 <= 10) {
    console.log("3 x ".concat(num1, " = ").concat(3 * num1));
    num1++;
}
//==============================================================================
// TUPLES
// let isTuple: [] = [];                                              // correct
// let isTuple3: [string, number, number] = ["Ahmed Lashari", 5, 77]; // correct
// let isTuple2:[] = ["Ahmed Lashari", 5, 77]                         // incorrect
var myTuple = [
    20,
    "Understanding Typescript's script",
    true,
];
for (var _a = 0, myTuple_1 = myTuple; _a < myTuple_1.length; _a++) {
    var x = myTuple_1[_a];
    console.log(x);
}
var a = myTuple[0], b = myTuple[1], c = myTuple[2];
console.log("Number: ".concat(a));
console.log("Agenda: ".concat(b));
console.log("Status: ".concat(c));
//==============================================================================
// OBJECTS
var tutor = {
    name: "Ahmed Lashari",
    age: 20,
    experienceInYrs: 2.5,
    qualification: "U-Grad",
    certifications: ["FlutterDev", "Python-Beginner to Advance", "DjangoWebDev"],
    status: true,
};
