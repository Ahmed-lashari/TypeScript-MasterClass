/*
 Conditional Types in TypeScript:

 1. Conditional Types allow you to create " types " based on a condition
 2. The syntax is similar to ternary operators in JavaScript:

    A extends B ? C : D

 3. This can be read as: " If A can be assigned to B, then the type is C, otherwise D "

 4. This is very useful when working with generics and advanced type transformations
 */

// Basic example

//If the input type is a string, return 'Yes', otherwise return 'No'.

type isString<T> = T extends string ? "Yes" : "No";

type Test1 = isString<string>; // `Yes
type Test2 = isString<number>; // No

// ================================================================

//  now unsing conditional types with GENERICS for reusable logic

//  checking if a type is an array or not
type isArray<T> = T extends any[] ? "Array" : "NotArray";
type Test3 = isArray<number[]>; // Array
type Test4 = isArray<string>; // NotArray

// ================================================================

//  such conditional types can be nested and combined with other types like infer(descussed in next topic)

type elementTyp<T> = T extends (infer U)[] ? U : T;

type Test5 = elementTyp<string[]>; // string
type Test6 = elementTyp<number>; // number

// ================================================================

//  we can also useconditional types to filter types from a union

type excludeString<T> = T extends string ? never : T;
type Test7 = excludeString<string | number | boolean>; // number | boolean

// ================================================================

//  conditional types distribute over unions by default

type toArray<T> = T extends any ? T[] : never;
type Test8 = toArray<string | number>; // string[] | number[]

// ================================================================

//  can also prevent distribution using square brackets

type noDistribute<T> = [T] extends [string | number] ? "Yes" : "No";
type Test9 = noDistribute<string | number>; // Yes
type Test10 = noDistribute<boolean>; // No

// ================================================================

// PRACTICAL USAGE

//  Defineing an API response based on whether data is null or not

type ApiResponse<T> = T extends null
  ? { success: false }
  : { success: true; data: T };

type Res1 = ApiResponse<string>; // { success: true; data: string }
type Res2 = ApiResponse<null>; // { success: false }
