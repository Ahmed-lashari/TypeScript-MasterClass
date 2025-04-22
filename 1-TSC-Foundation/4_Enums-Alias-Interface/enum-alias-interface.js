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
var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["Sunday"] = 0] = "Sunday";
    WeekDays[WeekDays["Monday"] = 1] = "Monday";
    WeekDays[WeekDays["Tuesday"] = 2] = "Tuesday";
    WeekDays[WeekDays["Wednesday"] = 3] = "Wednesday";
    WeekDays[WeekDays["Thursday"] = 4] = "Thursday";
    WeekDays[WeekDays["Friday"] = 5] = "Friday";
    WeekDays[WeekDays["Saturday"] = 6] = "Saturday";
})(WeekDays || (WeekDays = {}));
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
var WeekDayLabels;
(function (WeekDayLabels) {
    WeekDayLabels["Sunday"] = "Sunday";
    WeekDayLabels["Monday"] = "Monday";
    WeekDayLabels["Tuesday"] = "Tuesday";
    WeekDayLabels["Wednesday"] = "Wednesday";
    WeekDayLabels["Thursday"] = "Thursday";
    WeekDayLabels["Friday"] = "Friday";
    WeekDayLabels["Saturday"] = "Saturday";
})(WeekDayLabels || (WeekDayLabels = {}));
console.log(WeekDayLabels.Sunday); // Output: Sunday
for (var _i = 0, _a = Object.values(WeekDayLabels); _i < _a.length; _i++) {
    var x = _a[_i];
    console.log(x); // will print each value assigned to each num
}
console.log(typeof WeekDays.Sunday); // number (un assigned enum values will return their index values)
console.log(typeof WeekDayLabels.Sunday); // string
var isName = "Ahmed Lashari";
var isAge = 20;
var isLearningStatus = true;
console.log(isName);
console.log(isAge);
console.log(isLearningStatus);
// Alias are rarely used in the Production products to keep the things simple and understandable
// ==============================================================================
// INTERFACES
// INTErfaces are aslo the similar thing like ALIAS but they are only used with objects
// Normal Approach while making OBJECTS
var person = {
    userName: "Ahmed Lashari",
    userExpe: "2.5 years",
};
console.log(person);
var isUser1 = {
    userFirstName: "Ahmed",
    userExpe: "2.5 Years",
};
console.log(isUser1);
var vehicle1 = {
    model: 2025,
    milage: 0,
    color: "Bright-White",
};
var vehicle2 = {
    model: 2024,
    milage: 0,
    color: "black",
    topSpeed: 320,
    isTurbo: true,
};
// Practice proble!! Extend an interface for an "EV-Vehicle" from the "Vehicle" Interface
