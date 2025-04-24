// What is infer?

// infer is a keyword used to "guess" or "extract" a type from another type.

// we use it inside a conditional type (a type with "extends").

//Syntax:
// T extends Something<infer U> ? U : DefaultType

// example
type result1 = true extends boolean ? "boolean" : "true"; //  output: "boolean"(because true does extends boolean type)

// now reversing the condition
type result2 = boolean extends true ? "true" : "boolean"; // output: 'true' (because true extends boolean type not the other way around)

// another example check
function func1(checkType: boolean) {
  console.log(`Type: ${typeof checkType}: Value: ${checkType}\n`);
}
function func2(checkType: true) {
  console.log(`Type: ${typeof checkType}: Value: ${checkType}\n`);
}

const result1: boolean = true;
const result2: true = true;

func1(result1); // output: Type is Boolean
// func2(!result2); // output: Argument of type 'boolean' is not assignable to parameter of type 'true'

// WHAT WE GET FROM THIS SIMPLE EXAMPLE ?

// 1. func1(result1) works because result1 is of type boolean, which includes both true and false

// 2. func2(!result2) fails because !result2 evaluates to false (type: boolean), which cannot be passed to a function expecting the literal type " true ".

// 3. This links to the infer keyword because infer is used in " type-level logic "" to extract specific types (like " true " from boolean) , just like func2 expects exactly true not any boolean

// NOW DIGGING DEEPER INTO INFER KEY

// Using a Typescript's Global runtime type returner function

// SYNTAX:
// type VAR-NAME = ReturnType<typeof `variable/function/whose /time/is/being/checked` >

type checkType = ReturnType<typeof func1>; // checkType = void
// console.log(typeof checkType);

/// INFER LETS US FIND OUT SOMETHING THAT WE WANT TO INVESTIGTE , REPRESENT IT AS A VARIABLE AND THEN WE CAN USED THAT STORED VALUE FROM THE VARIABLE AND REUSE IT HOW EVER WE WANT

// THATS THE BASIC CONCEPT OF USING INFER KEY

// Getting the return type of a function now, USING INFER and not ReturnType<...>

type getReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type returnedTypeIs = getReturnType<() => number>; // number

/*
=> SYNTAX EXPLANATION

=> type getReturnType<T> = T extends (...args: any[]) => infer R ? R : never;


type getReturnType<T> = 

1. we are creating a " type alias " named as  " getReturnType ".
2. it is taking onr generic type parameter " T ", could be more than one

====================================================================

T extends (...args: any[]) =>

1. we check, DOES T LOOKS LIKE A FUNCTION ?
2. specifically, a function that takes any arguments (...args: any[])
3. and returns  " some type ", which we want to extract.

====================================================================

infer R 

1. " infer R " is always used to "guess" or "extract" the return type of the function
2. the keyword " infer R " is like saying "find or guess the type of R"
3. " R " is the function that we passed and " T extends (...args: any[]) => " said " YES IT LOOKS LIKE A FUNCTIOn"

====================================================================

? R 

1. if the condition is true (T is a function), return the inferred return type .

====================================================================
: never;

1. otherwise (T is not a function), return " never " (which means invalid or no type).

*/

// EXAMPLEs

type example1 = getReturnType<() => string>; // output; string
type example2 = getReturnType<() => number>; // output: number
type example3 = getReturnType<number>; // output: never (coz number is not a function)

// ====================================================================
type ElementType<T> = T extends (infer U)[] ? U : T;

type FromArray = ElementType<string[]>; // string

/*
=> SYNTAX EXPLANATION:

type ElementType<T> = 

1. We are creating another " type alias " called " ElementType ".
2. It accepts a generic type " T "

====================================================================


T extends (infer U)[] 


1. We check: Is T an array? 
2. " Is T like some type of an array of something? "   ---  " U[] "
3. " infer U " tells typeScript; "Try to extract whatever the array holds."

====================================================================

? U 
3. if YES, then return the extracted element type " U ".
4.  e-g, if T is string[], then U will be string.

====================================================================


: T;
1. if NO (T is not an array), just return T as it is.

*/

// PRACTICAL USES OF THE INFER IN REAL WORLD PROBLEMS
/*

1 .  API Response Type Extraction
2 .  A Form consisting of input field whose type whould be extracted types
3 .  Dynamic Form Builders / Object Mappers
4 .  Building reusable utility types	for type safety


*/

// SOURCES I USED FOR INFER KEY UNDERSTANDING AND WILL HELP YOU TOO FOR GETTING A MORE BETTER GRIP ON THE TOPIC:
