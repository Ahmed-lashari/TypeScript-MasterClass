// Union type allows a variable to hold more than one type
// union symbol =  " | "
// useCase :
// great for handling flexible inputs, API responses, UI states etc
// lets move fro the user, person and fruits example to pets and animals now
// Example 1: A variable that can be a string OR a number
var id;
id = 10; // correct
id = "A102"; // correct
// id = true; // incorrect because the id can either be string or number
// ================================================================================
function printId(id) {
    console.log("ID:", id);
}
printId(123);
printId("ABC");
// ================================================================================
function getStatus(code) {
    return code === 200 ? "success" : "error";
}
var result = getStatus(200);
console.log(result);
// ================================================================================
var data = [1, "two", 3, "four"];
console.log(data);
var response1 = {
    status: "ok",
    data: "User found",
};
var response2 = {
    status: "fail",
    data: null,
};
console.log(response1);
console.log(response2);
// ================================================================================
// Example 6: Narrowing union types using typeof
function process(value) {
    if (typeof value === "string") {
        console.log("It's a string:", value.toUpperCase());
    }
    else {
        console.log("It's a number:", value.toFixed(2));
    }
}
process("hello");
process(42.789);
function makeSound(pet) {
    if ("bark" in pet) {
        pet.bark();
    }
    else {
        pet.meow();
    }
}
var myDog = {
    breed: "German Shepherd",
    bark: function () { return console.log("Woof"); },
};
var myCat = {
    breed: "Persian",
    meow: function () { return console.log("Meow"); },
};
makeSound(myDog);
makeSound(myCat);
