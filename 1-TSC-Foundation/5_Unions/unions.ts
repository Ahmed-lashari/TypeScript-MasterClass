// Union type allows a variable to hold more than one type
// union symbol =  " | "

// useCase :
// great for handling flexible inputs, API responses, UI states etc

// lets move fro the user, person and fruits example to pets and animals now

// Example 1: A variable that can be a string OR a number
let id: string | number;

id = 10; // correct
id = "A102"; // correct
// id = true; // incorrect because the id can either be string or number

// ================================================================================
function printId(id: string | number) {
  console.log("ID:", id);
}

printId(123);
printId("ABC");

// ================================================================================
function getStatus(code: number): "success" | "error" {
  return code === 200 ? "success" : "error";
}

const result = getStatus(200);
console.log(result);
// ================================================================================

let data: (string | number)[] = [1, "two", 3, "four"];
console.log(data);

// ================================================================================

type ApiResponse = {
  status: "ok" | "fail";
  data: string | null;
};

const response1: ApiResponse = {
  status: "ok",
  data: "User found",
};

const response2: ApiResponse = {
  status: "fail",
  data: null,
};

console.log(response1);
console.log(response2);
// ================================================================================

// Example 6: Narrowing union types using typeof
function process(value: string | number) {
  if (typeof value === "string") {
    console.log("It's a string:", value.toUpperCase());
  } else {
    console.log("It's a number:", value.toFixed(2));
  }
}

process("hello");
process(42.789);

// ================================================================================
type Dog = { breed: string; bark: () => void };
type Cat = { breed: string; meow: () => void };

type Pet = Dog | Cat;

function makeSound(pet: Pet) {
  if ("bark" in pet) {
    pet.bark();
  } else {
    pet.meow();
  }
}

const myDog: Dog = {
  breed: "German Shepherd",
  bark: () => console.log("Woof"),
};

const myCat: Cat = {
  breed: "Persian",
  meow: () => console.log("Meow"),
};

makeSound(myDog);
makeSound(myCat);
