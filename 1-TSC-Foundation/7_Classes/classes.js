// in Typescript we sometimes override the the type of a variable from one form to another
// e-g;
// from string to number, number to boolean, array to string and etc
// for this purpose, there are some builtin functions in typescript and some keys.
// we will discuss them one by one
var percentage = String(82.97); // complete type conversion
console.log(percentage);
//=====================================================================================
var position = Number("3"); // complete type conversion
console.log(position);
//=====================================================================================
var isOn = Boolean(0); // complete type conversion
console.log(isOn);
// same goes for the arrays, obejcts etc...
// USE OF CASTING KEYS LIKE,, AS
//=====================================================================================
var someVal = "Hello World";
// console.log(someVal.length); // give error of type issue
console.log(someVal.length); // a better appraoch (the type of variabe is not casted into any other form)
// same can be achieved like this
console.log(someVal.length); // exactly like using ( as ) key
var user1 = {
    name: "Ahmed",
    age: 20,
};
// casting user to type Admin
var admin1 = user1;
// admin1.role = "Student";// will give error because User has now role property
console.log(admin1);
// casting user to type Admin
var admin2 = user1;
admin2.role = "Instructor";
console.log(admin2);
//=====================================================================================
// now lets see what is forcefull casting
var somethingWeird = "123";
// casting string to number (forcefully)
var tempNumber = somethingWeird;
var realNumber = tempNumber;
console.log("Double casted value:", realNumber); // value is still string internally, but TypeScript sees it as number now
console.log(typeof realNumber); // string
//=====================================================================================
function getUser() {
    return { name: "Ahmed Lashari", age: 20 };
}
var typedUser1 = getUser();
var typedUser2 = getUser();
console.log(typedUser1); // only access the name and age parameter of User Object
console.log(typedUser2); // can access the name, age and role parameter of Admin Object
