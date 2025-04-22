enum UserTypes {
  Student = "Student",
  Instructor = "Instructor",
}

class User {
  // remains state
  private _generatedUids: Set<String> = new Set();

  // parameters
  private uniqueId: string;
  protected searchId: number;
  public fullName: string;
  public userType: string;
  public age: string;
  public gender: string;

  constructor(
    searchId: number,
    isName: string,
    userType: string,
    age: string,
    gender: string
  ) {
    // private details
    this.uniqueId = this.generateUID();
    this.searchId = searchId;

    // public details
    this.fullName = isName;
    this.userType = userType;
    (this.age = age), (this.gender = gender);
  }

  private generateUID(): string {
    let uid: string;
    do {
      uid = ((Math.random() * Math.pow(36, 4)) | 0).toString();
    } while (this._generatedUids.has(uid));
    this._generatedUids.add(uid);
    return uid;
  }
  public getUniqueId(): number {
    return this.searchId;
  }

  public getSearchId(): number {
    return this.searchId;
  }
  public getAccountType(): string {
    return this.userType;
  }

  public displayUser(): void {
    console.log(
      `       ID: ${this.uniqueId}\n
       Name: ${this.fullName}\n
       Age: ${this.age}\n
       Gender: ${this.gender}\n`
    );
  }
}
class Student extends User {
  private batch: number;
  private cgpa: number;
  private semester: number;

  constructor(
    searchId: number,
    isName: string,
    age: string,
    gender: string,
    batch: number,
    cgpa: number,
    semester: number
  ) {
    super(searchId, isName, UserTypes.Student, age, gender);
    this.batch = batch;
    this.cgpa = cgpa;
    this.semester = semester;
  }

  public displayStd(): void {
    console.log(
      `${super.displayUser()}
      Batch: ${this.batch}\n
      CGPA: ${this.cgpa}\n
      Semester: ${this.semester}`
    );
  }
}
class Instructor extends User {
  private experInYrs: string;
  private position: string;
  private classesPerDay: number;

  constructor(
    searchId: number,
    fullName: string,
    age: string,
    gender: string,
    experInYrs: string,
    position: string,
    classesPerDay: number
  ) {
    super(searchId, fullName, UserTypes.Instructor, age, gender);
    this.experInYrs = experInYrs;
    this.position = position;
    this.classesPerDay = classesPerDay;
  }

  public displayInstructor(): void {
    console.log(
      `${super.displayUser()}\n
       Experience: ${this.experInYrs} Yrs\n
       Position: ${this.position}\n
       Classes per Day: ${this.classesPerDay}`
    );
  }
}

class Manager {
  private users: User[] = [];

  public addUser(user: User) {
    this.users.push(user);
  }

  public getUserById(searchId: number): User | null {
    for (let x of this.users) {
      if (x.getUniqueId() === searchId) {
        return x;
      }
    }
    return null;
  }

  public getAllUsers(): string {
    return this.users.map((user) => user.displayUser()).join("\n");
  }

  public removeUser(searchId: number): string {
    const userIndex = this.users.findIndex(
      (user) => user.getUniqueId() === searchId
    );
    if (userIndex !== -1) {
      this.users.splice(userIndex, 1);
      return `User with ID ${searchId} has been removed.`;
    }
    return `User with ID ${searchId} not found.`;
  }
}

const userManager = new Manager();

const student1 = new Student(1, "Ahmed lashari", "20", "Male", 2023, 3.15, 3);
// const instructor1 = new Instructor(
//   2,
//   "Jane",
//   "42",
//   "Female",
//   "15",
//   "Senior Instructor",
//   4
// );

userManager.addUser(student1);
// userManager.addUser(instructor1);

let instanc: User | null = userManager.getUserById(1);
if (typeof instanc !== null) {
  if (instanc!.getAccountType() == UserTypes.Student) {
    (instanc as Student).displayStd();
  } else {
    (instanc as Instructor).displayInstructor();
  }
} else {
  console.log("Returned Null");
}
// ... same goes for other CRUD Methods as well
