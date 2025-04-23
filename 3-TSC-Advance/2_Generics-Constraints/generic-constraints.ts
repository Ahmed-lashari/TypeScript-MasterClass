// Before Diving into Theoratical Conepts, LEts solve an Example First
type Person = {
  firstName?: string;
};

const details: Object = { lastName: "Lashari" };

// Following the generic techniques we learned in previous chapter, we will use Generic Key " T " as parameter type and return type
function getDetails<T>(data: T): T {
  return data as T;
}

console.log(getDetails(details));

// Every Thing is Well Structured so we will get the Output as :
// {lastName: 'Lashari'}

// NOW HERE COMES THE MAGIC

// we want the getDetails function to accept parameter of type Person
// and return us an object with first and last name both.

// Procedurally We can achieve this thing like this:

type Person2 = {
  firstName?: string;
  lastName: string;
};
const personDetails: Person2 = { lastName: "Lashari" };

function getPerrsonDetail(data: Person2): Person2 {
  data.firstName = "Ahmed";
  return data as Person2;
}

console.log(getPerrsonDetail(personDetails));

// OUTPUT:
// {lastName: 'Lashari', firstName: 'Ahmed'}

/// BUT THIS IS CODE IS NOT REUSABLE AND WILL SLOW DOWN THE COMPILE TIME.

/// LWTS TACKLE THIS SETUATION USING GENERIC-CONSTRAINTS

type ConstraintPerson = {
  firstName?: string;
};
const constraintDetail: Object = { lastName: "Lashari" };

function getConstraintPerson<T extends ConstraintPerson>(data: T): T {
  data.firstName = "Muhammad Ahmed";
  return data as T;
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
