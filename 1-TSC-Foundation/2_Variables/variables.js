// PRIMITIVE TYPE VARIABLES
// primitive type variables include: string, number, bool, bigint null, and undefined
// SYNTAX FOR NUMBERS
var ahmedAge = 20;
var nomanAge = 12;
var ageDiff = ahmedAge > nomanAge ? ahmedAge - nomanAge : nomanAge - ahmedAge;
console.log("Ahmed is ".concat(ageDiff, "yr older than Noman."));
// ==========================================================================================
var daysInWeek = 7;
var weekInMonth = 4; // on average
var monthsInYear = 12;
var daysInYear = daysInWeek * weekInMonth * monthsInYear;
console.info("There are ".concat(daysInYear, " days in a year."));
// ==========================================================================================
// Get current date parts
var currDate = new Date().getMilliseconds(); // 0–999
var currYear = new Date().getFullYear(); // e.g., 2025
var currMonth = new Date().getMonth(); // 0–11 (0 = Jan)
var currDay = new Date().getDay(); // 0–6 (0 = Sunday)
var ageCode = (currMonth + 1) * 10 + (currDay + 1);
var estimatedAge = ageCode / 2;
// Calculate your birth year
var myBirthYear = currYear - estimatedAge;
console.log("Current Year: ".concat(currYear));
console.log("Month : ".concat(getMonth(currMonth)));
console.log("Day of Week: ".concat(getWeekDay(currDay)));
console.log("Custom Age Code: ".concat(ageCode)); //
console.log("My Estimated Age is ".concat(estimatedAge));
console.log("My Birth Year is ".concat(myBirthYear));
function getWeekDay(dayIndex) {
    var isDay = "";
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
function getMonth(MonthIndex) {
    var isMonth = "";
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
var fullName = "Ahmed Lashari";
// false = male, true = female
var gender = !true; // will late use the enums for better understanding
var isTeacher = false;
var isMaleAndTutor = !gender && isTeacher;
var isMaleAndNotTutor = !gender && !isTeacher;
var isFemaleAndTutor = gender && isTeacher;
// let isFemaleAndNotTutor:boolean = (gender && !isTeacher)
if (isMaleAndTutor) {
    console.info("".concat(fullName, " is Male and a Teacher."));
}
else if (isMaleAndNotTutor) {
    console.info("".concat(fullName, " is Male and a Learner."));
}
else if (isFemaleAndTutor) {
    console.info("".concat(fullName, " is Female and a Teacher."));
}
else {
    console.info("".concat(fullName, " is Female and and a Learner."));
}
