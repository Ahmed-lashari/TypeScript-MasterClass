// in Typescript we sometimes override the the type of a variable from one form to another

// e-g;
// from string to number, number to boolean, array to string and etc

// for this purpose, there are some builtin functions in typescript and some keys.
// we will discuss them one by one

var percentage: string = String(82.97); // complete type conversion
console.log(percentage);

//=====================================================================================

var position: number = Number("3"); // complete type conversion
console.log(position);

//=====================================================================================

var isOn: boolean = Boolean(0); // complete type conversion
console.log(isOn);

// same goes for the arrays, obejcts etc...

// USE OF CASTING KEYS LIKE,, AS

//=====================================================================================

let someVal: unknown = "Hello World";

// console.log(someVal.length); // give error of type issue

console.log((someVal as string).length); // a better appraoch (the type of variabe is not casted into any other form)

// same can be achieved like this

console.log((<string>someVal).length); // exactly like using ( as ) key

//=====================================================================================

interface User {
  name: string;
  age: number | string;
}

interface Admin extends User {
  role: unknown;
}

const user1: unknown = {
  name: "Ahmed",
  age: 20,
};

// casting user to type Admin
let admin1 = user1 as User;
// admin1.role = "Student";// will give error because User has now role property
console.log(admin1);

// casting user to type Admin
let admin2 = user1 as Admin;
admin2.role = "Instructor";

console.log(admin2);

//=====================================================================================

// now lets see what is forcefull casting

let somethingWeird: string = "123";

// casting string to number (forcefully)

let tempNumber = somethingWeird as unknown;
let realNumber = tempNumber as number;

console.log("Double casted value:", realNumber); // value is still string internally, but TypeScript sees it as number now

console.log(typeof realNumber); // string

//=====================================================================================

function getUser(): unknown {
  return { name: "Ahmed Lashari", age: 20 };
}

const typedUser1 = getUser() as User;
const typedUser2 = getUser() as Admin;

console.log(typedUser1); // only access the name and age parameter of User Object
console.log(typedUser2); // can access the name, age and role parameter of Admin Object
