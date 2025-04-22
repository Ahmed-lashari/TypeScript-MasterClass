// PRIMITIVE TYPE VARIABLES

// primitive type variables include: string, number, bool, bigint null, and undefined

// SYNTAX FOR NUMBERS

let ahmedAge: number = 20;
let nomanAge: number = 12;
let ageDiff: number =
  ahmedAge > nomanAge ? ahmedAge - nomanAge : nomanAge - ahmedAge;

console.log(`Ahmed is ${ageDiff}yr older than Noman.`);

// ==========================================================================================
let daysInWeek: number = 7;
let weekInMonth: number = 4; // on average
let monthsInYear: number = 12;

let daysInYear = daysInWeek * weekInMonth * monthsInYear;

console.info(`There are ${daysInYear} days in a year.`);

// ==========================================================================================
// Get current date parts
let currDate: number = new Date().getMilliseconds(); // 0–999
let currYear: number = new Date().getFullYear(); // e.g., 2025
let currMonth: number = new Date().getMonth(); // 0–11 (0 = Jan)
let currDay: number = new Date().getDay(); // 0–6 (0 = Sunday)

let ageCode = (currMonth + 1) * 10 + (currDay + 1);
let estimatedAge = ageCode / 2;

// Calculate your birth year
let myBirthYear: number = currYear - estimatedAge;

console.log(`Current Year: ${currYear}`);
console.log(`Month : ${getMonth(currMonth)}`);
console.log(`Day of Week: ${getWeekDay(currDay)}`);
console.log(`Custom Age Code: ${ageCode}`); //
console.log(`My Estimated Age is ${estimatedAge}`);
console.log(`My Birth Year is ${myBirthYear}`);

function getWeekDay(dayIndex: number): string {
  let isDay: string = "";
  switch (dayIndex) {
    case 0:
      isDay = "Sunday";
      break;
    case 1:
      isDay = "Sunday";
      break;
    case 2:
      isDay = "Sunday";
      break;
    case 3:
      isDay = "Sunday";
      break;
    case 4:
      isDay = "Sunday";
      break;
    case 5:
      isDay = "Sunday";
      break;
    case 6:
      isDay = "Sunday";
      break;
    default:
      throw "Invalid-Index";
  }
  return isDay;
}

function getMonth(MonthIndex: number): string {
  let isMonth: string = "";
  switch (MonthIndex) {
    case 0:
      isMonth = "Jan";
      break;
    case 1:
      isMonth = "Feb";
      break;
    case 2:
      isMonth = "Mar";
      break;
    case 3:
      isMonth = "April";
      break;
    case 4:
      isMonth = "May";
      break;
    case 5:
      isMonth = "June";
      break;
    case 6:
      isMonth = "July";
      break;
    case 7:
      isMonth = "Aug";
      break;
    case 8:
      isMonth = "Sep";
      break;
    case 9:
      isMonth = "Oct";
      break;
    case 10:
      isMonth = "Nov";
      break;
    case 11:
      isMonth = "Dec";
      break;
    default:
      throw "Invalid-Index";
  }
  return isMonth;
}

// ==========================================================================================
// SYNTAX FOR STRING AND BOOLS

let fullName: string = "Ahmed Lashari";
// false = male, true = female
let gender: boolean = !true; // will late use the enums for better understanding
let isTeacher: boolean = false;

let isMaleAndTutor: boolean = !gender && isTeacher;
let isMaleAndNotTutor: boolean = !gender && !isTeacher;
let isFemaleAndTutor: boolean = gender && isTeacher;

// let isFemaleAndNotTutor:boolean = (gender && !isTeacher)

if (isMaleAndTutor) {
  console.info(`${fullName} is Male and a Teacher.`);
} else if (isMaleAndNotTutor) {
  console.info(`${fullName} is Male and a Learner.`);
} else if (isFemaleAndTutor) {
  console.info(`${fullName} is Female and a Teacher.`);
} else {
  console.info(`${fullName} is Female and and a Learner.`);
}
