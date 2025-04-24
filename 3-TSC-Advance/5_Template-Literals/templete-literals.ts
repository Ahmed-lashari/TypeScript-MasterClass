/*
 Template Literal Types in TypeScript:

 ------------------------------------

 template literal types build on string literal types and allowing us to construct new string-like types using template literal syntax (like in JavaScript)
 
 Syntax: `${string}`
 */

// EXAMPLES

type Greeting = `Hello ${string}`;
const greet: Greeting = "Hello Ahmed LAshari";
// const greet2: Greeting = "Hi Ahmed LAshari";

console.log(greet); //Valid
// console.log(greet2); //Error - does not match template

// ============================================================

// combining literal types to create dynamic strings

type Color = "red" | "blue";
type Shade = "light" | "dark";
type ColoredShade = `${Shade}-${Color}`;

const color1: ColoredShade = "light-red";
const color2: ColoredShade = "dark-blue";
// const color3: ColoredShade = "bright-red";

console.log(color1); // valid format
console.log(color2); // valid format
// console.log(color3)  // invalid format

// ============================================================

// QUE: BUT THE QUESTION IS WHY WE DO THIS ?

// ANS: A SIMPLE ANSWER: TO MAKE DEBUGGING EASY.

// ============================================================

// LETS SEE AN EXAMPLE BELOW

type HttpMethod = "get" | "post" | "put" | "delete";
type Resource = "user" | "post" | "comments";

type ApiMethod<
  method extends HttpMethod,
  resource extends Resource
> = `${method}/api/${resource}`;

type GetUserEndpoint = ApiMethod<"get", "user">; // "get/api/user"

type AllEndpoints = GetUserEndpoint;

async function callApi(isEndpoint: AllEndpoints) {
  return { success: true };
}

let createEndpoint: GetUserEndpoint = "get/api/user"; // correct
// createEndpoint = "Get/api/user"; // incorrect

// But instead of repeating the method callApi(string1-string2) can result in spelling mestakes or the upper or lower case issue. no error willl be displayed at compile time but at runtime the bug will emerge and product may crash

// INSTEAD OF WRITING THE " get/api/user " each time while creating an endpoint we can utilize the ENUMS and the Capatilize, to-lower-case and TO-UPPER-CASE Custom methods which will correct the developer typing mistakes

/// THESE ARE THE REASONS FOR USING TEMPLATE LITERALS IN BACKEND PROGRAMMING
