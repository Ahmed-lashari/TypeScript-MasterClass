var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserTypes;
(function (UserTypes) {
    UserTypes["Student"] = "Student";
    UserTypes["Instructor"] = "Instructor";
})(UserTypes || (UserTypes = {}));
var User = /** @class */ (function () {
    function User(searchId, isName, userType, age, gender) {
        // remains state
        this._generatedUids = new Set();
        // private details
        this.uniqueId = this.generateUID();
        this.searchId = searchId;
        // public details
        this.fullName = isName;
        this.userType = userType;
        (this.age = age), (this.gender = gender);
    }
    User.prototype.generateUID = function () {
        var uid;
        do {
            uid = ((Math.random() * Math.pow(36, 4)) | 0).toString();
        } while (this._generatedUids.has(uid));
        this._generatedUids.add(uid);
        return uid;
    };
    User.prototype.getUniqueId = function () {
        return this.searchId;
    };
    User.prototype.getSearchId = function () {
        return this.searchId;
    };
    User.prototype.getAccountType = function () {
        return this.userType;
    };
    User.prototype.displayUser = function () {
        console.log("       ID: ".concat(this.uniqueId, "\n\n       Name: ").concat(this.fullName, "\n\n       Age: ").concat(this.age, "\n\n       Gender: ").concat(this.gender, "\n"));
    };
    return User;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(searchId, isName, age, gender, batch, cgpa, semester) {
        var _this = _super.call(this, searchId, isName, UserTypes.Student, age, gender) || this;
        _this.batch = batch;
        _this.cgpa = cgpa;
        _this.semester = semester;
        return _this;
    }
    Student.prototype.displayStd = function () {
        console.log("".concat(_super.prototype.displayUser.call(this), "\n      Batch: ").concat(this.batch, "\n\n      CGPA: ").concat(this.cgpa, "\n\n      Semester: ").concat(this.semester));
    };
    return Student;
}(User));
var Instructor = /** @class */ (function (_super) {
    __extends(Instructor, _super);
    function Instructor(searchId, fullName, age, gender, experInYrs, position, classesPerDay) {
        var _this = _super.call(this, searchId, fullName, UserTypes.Instructor, age, gender) || this;
        _this.experInYrs = experInYrs;
        _this.position = position;
        _this.classesPerDay = classesPerDay;
        return _this;
    }
    Instructor.prototype.displayInstructor = function () {
        console.log("".concat(_super.prototype.displayUser.call(this), "\n\n       Experience: ").concat(this.experInYrs, " Yrs\n\n       Position: ").concat(this.position, "\n\n       Classes per Day: ").concat(this.classesPerDay));
    };
    return Instructor;
}(User));
var Manager = /** @class */ (function () {
    function Manager() {
        this.users = [];
    }
    Manager.prototype.addUser = function (user) {
        this.users.push(user);
    };
    Manager.prototype.getUserById = function (searchId) {
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var x = _a[_i];
            if (x.getUniqueId() === searchId) {
                return x;
            }
        }
        return null;
    };
    Manager.prototype.getAllUsers = function () {
        return this.users.map(function (user) { return user.displayUser(); }).join("\n");
    };
    Manager.prototype.removeUser = function (searchId) {
        var userIndex = this.users.findIndex(function (user) { return user.getUniqueId() === searchId; });
        if (userIndex !== -1) {
            this.users.splice(userIndex, 1);
            return "User with ID ".concat(searchId, " has been removed.");
        }
        return "User with ID ".concat(searchId, " not found.");
    };
    return Manager;
}());
var userManager = new Manager();
var student1 = new Student(1, "Ahmed lashari", "20", "Male", 2023, 3.15, 3);
var instructor1 = new Instructor(2, "Jane", "42", "Female", "15", "Senior Instructor", 4);
userManager.addUser(student1);
// userManager.addUser(instructor1);
var instanc = userManager.getUserById(1);
if (typeof instanc !== null) {
    if (instanc.getAccountType() == UserTypes.Student) {
        instanc.displayStd();
    }
    else {
        instanc.displayInstructor();
    }
}
else {
    console.log("Returned Null");
}
// ... same goes for other CRUD Methods as well
