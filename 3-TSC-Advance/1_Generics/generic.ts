// Lets start with a simple example

function identity(data: any): any {
  return data;
}

// these work, but we lose " type-safety " benefits, the only reason for which we use TYPESCRIPT
console.log(identity("Ahmed")); // output: 'Ahmed'
console.log(identity(123)); // output: 123
console.log(identity(true)); // output: true

//Problem is:
// The return type is "any", which means TypeScript cannot ensure what type is coming out. (Which will create bugs and runtime issues in the code while infering. Will cover this topic in coming lectures)

// For example:
const output = identity("Flutter Dev");
// output.toUpperCase(); This works
// But if we passed a number it would still compile and cause issues at runtime

// ============================================================
// USE OF GENERICS?

/*
1.  generics allow us to build reusable functions that preserve the types of the input and output.
 
2. typeScript can infer the type and offer better intellisense + type safety.
 
3. generics are perfect when you want to write logic that can work with multiple types, but still preserve type information.

*/
// vefore diving into Theoretical Concepts, lets solve an example first
// simple reusable generic function to return anything passed to it

function returnData<T>(data: T): T {
  return data as T;
}

console.log(returnData("Ahmed Lashari")); // 'Ahmed Lashari'

// ============================================================
//  NOW LETS CREATE A REUSABLE GENERIC FUNCTION TO HANDLE DIFFERENT TYPES

function processAnything<T>(item: T): T {
  return item;
}

console.log(processAnything(123)); // putpuT: 123
console.log(processAnything("Typescript")); // putpuT: Typescript
console.log(processAnything([1, 2, 3])); // putpuT: [1, 2, 3]

// ============================================================

// Using Generic Functions in Real-Life Scenarios

// Wrap a value in an object (useful for wrappers(discussed in coming lectures), loaders, etc...)

function wrapValue<T>(value: T): { value: T } {
  return { value };
}

console.log(wrapValue("Ahmed")); // putpuTputpuT: { value: 'Ahmed' }

// reversing an array using generics
function reverseArray<T>(items: T[]): T[] {
  return items.reverse();
}

console.log(reverseArray([1, 2, 3])); // putpuT: [3, 2, 1]

// ============================================================

// RESOURCES:
// Learn more about Generics:
// https://www.typescriptlang.org/docs/handbook/2/generics.html
// https://www.typescripttutorial.net/typescript-tutorial/typescript-generics/
