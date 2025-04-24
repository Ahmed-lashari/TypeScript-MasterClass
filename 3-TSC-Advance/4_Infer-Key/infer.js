// What is infer?
// another example check
function func1(checkType) {
    console.log("Type: ".concat(typeof checkType, ": Value: ").concat(checkType, "\n"));
}
function func2(checkType) {
    console.log("Type: ".concat(typeof checkType, ": Value: ").concat(checkType, "\n"));
}
var result1 = true;
var result2 = true;
func1(result1); // output: Type is Boolean
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
