var details = { lastName: "Lashari" };
// Following the generic techniques we learned in previous chapter, we will use Generic Key " T " as parameter type and return type
function getDetails(data) {
    return data;
}
console.log(getDetails(details));
var personDetails = { lastName: "Lashari" };
function getPerrsonDetail(data) {
    data.firstName = "Ahmed";
    return data;
}
console.log(getPerrsonDetail(personDetails));
var constraintDetail = { lastName: "Lashari" };
function getConstraintPerson(data) {
    data.firstName = "Muhammad Ahmed";
    return data;
}
console.log("Generic Constraint Person:");
console.log(getConstraintPerson(constraintDetail));
// AND THE OUTPUT WE GET IS:
// Generic Constraint Person:
// {lastName: 'Lashari', firstName: 'Muhammad Ahmed'}
/// NOW THE CODE IS REUSABLE AND COMPILE TIME WIL BE FAST. THANKS TO THE COMBINATION OF GENERIC AND CONSTRAINT
// For Further Understanding You can check the following links that redirect us to TypeScript Official Documentation about Generic and Generic Constrainst where they had explained another Generic Constraint key, named as " extends keyof "
// which is passed as a second generic key to the fucntion and returns a specific value of that key placed in the passed object.
// Syntax for doing so:
// let myself = { name: 'Ahmed LAshari', age: 20 }
// GENERIC FUNCTION DEFINATION SYNTAX
/*

function genericFunc<A extends object, B extends keyof A>(isObj: A, isKey: B){
    return isObj[isKey];
}




PASSING TO GENERIC FUNCTION

let temp = genericFunc(myself, 'age')
console.log(temp) // 20





// RESOURCE LINK:

https://www.typescripttutorial.net/typescript-tutorial/typescript-generic-constraints/

*/
