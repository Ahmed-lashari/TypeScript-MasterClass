// ENUMS
// Theory and Usage
// An enum (enumeration) is a way to define a set of named constant values
// that don’t change.

// For Example:

// Days of the Week
// Months in a Year
// Months in a Year
// Roles in some Organization/Institute

// SYNTAX

// enum variableName {enum1, enum2, enum3...}

enum WeekDays {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

// Instead of making a list, tupple, or seperate variables for each day, we created an enum and now each value of it can be accessed individually, unlike lists or tupples index based approach; e-g

console.log(WeekDays.Sunday); // will give the index : 0

// we can assign/initilize each value in an enum like this;

// These will give an error becaus the enum is already initilized and now cannot be changed
// WeekDays.Sunday = "Sunday";
// WeekDays.Monday = "Monday";
// WeekDays.Tuesday = "Tuesday";
// WeekDays.Wednesday = "Wednesday";
// WeekDays.Thursday = "Thursday";
// WeekDays.Friday = "Friday";
// WeekDays.Saturday = "Saturday";

enum WeekDayLabels {
  Sunday = "Sunday",
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
}

console.log(WeekDayLabels.Sunday); // Output: Sunday

for (let x of Object.values(WeekDayLabels)) {
  console.log(x); // will print each value assigned to each num
}

console.log(typeof WeekDays.Sunday); // number (un assigned enum values will return their index values)
console.log(typeof WeekDayLabels.Sunday); // string

// Simple but pracitical sse Case Example of Enum

// let selectWeekDay: string | null = prompt("Select Day Of Booking: ");

// if (selectWeekDay !== null) {
//   // enum check
//   while (
//     !Object.values(WeekDayLabels).includes(selectWeekDay as WeekDayLabels)
//   ) {
//     // selectWeekDay = prompt("Invalid value Entered: ");
//   }

//   console.log(`${selectWeekDay} is Booked.`);
// }

// ==============================================================================
// ALIAS

// As the word Alias resembles, one short or nickname used for another

// here the Alias use to the variable types like number, string etc

// SYNTAX
// type aliasName = variableType

type isNumericAlias = number;
type isStringAlias = string;
type isBooleanAlias = boolean;

let isName: isStringAlias = "Ahmed Lashari";
let isAge: isNumericAlias = 20;
let isLearningStatus: isBooleanAlias = true;

console.log(isName);
console.log(isAge);
console.log(isLearningStatus);

// Alias are rarely used in the Production products to keep the things simple and understandable

// ==============================================================================
// INTERFACES

// INTErfaces are aslo the similar thing like ALIAS but they are only used with objects

// Normal Approach while making OBJECTS

let person: { userName: string; userExpe: string } = {
  userName: "Ahmed Lashari",
  userExpe: "2.5 years",
};

console.log(person);
// By With the Help of Interfaces or code gets reduced like this

interface UserModel {
  userFirstName: string;
  userLasttName?: string; // ontional parameter
  userExpe: string;
}

let isUser1: UserModel = {
  userFirstName: "Ahmed",
  userExpe: "2.5 Years",
};
console.log(isUser1);

// Which is more Clean and with reduced boilerplate

/// Objects can also be extend with attitional properties from a common structure

interface Vehicle {
  model: number;
  milage: number;
  color: string;
}

const vehicle1: Vehicle = {
  model: 2025,
  milage: 0,
  color: "Bright-White",
};

// This means "SportsVehicel" will have all the Porperties of "Vehicle" interface with some addt=itional properties of its own that doesnt belong the "Vehicle" interface
interface SportVehicle extends Vehicle {
  topSpeed: number;
  isTurbo: boolean;
}

const vehicle2: SportVehicle = {
  model: 2024,
  milage: 0,
  color: "black",
  topSpeed: 320,
  isTurbo: true,
};

// Practice proble!! Extend an interface for an "EV-Vehicle" from the "Vehicle" Interface
