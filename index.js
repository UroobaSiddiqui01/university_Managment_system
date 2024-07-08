"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    age;
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }
}
;
class Student extends Person {
    rollNumber;
    courses = [];
    // courses : Course [] = [];
    constructor(name, age, rollNUmber) {
        super(name, age);
        this.rollNumber = rollNUmber;
    }
    registerForCourse(course) {
        this.courses.push(course);
    }
}
class Instructor extends Person {
    salary;
    courses = [];
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
    assignCourse(course) {
        this.courses.push(course);
    }
}
const std1 = new Student("Urooba", 23, 1234);
console.log(std1.courses);
const std2 = new Student("Hooram", 15, 5678);
const instructor1 = new Instructor("wania", 20, 100000);
const instructor2 = new Instructor("sabeen", 20, 100000);
class Course {
    id;
    name;
    students = [];
    instructor = [];
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    addStudent(std) {
        this.students.push(std);
    }
    seInstructor(instructor) {
        this.instructor.push(instructor);
    }
}
class Department {
    name;
    courses = [];
    constructor(name) {
        this.name = name;
    }
    addCourse(course) {
        this.courses.push(course);
    }
}
const course1 = new Course(1, "blockchain");
const course2 = new Course(2, "meatverse");
std1.registerForCourse(course1);
course1.addStudent(std1);
course1.addStudent(std2);
course2.addStudent(std1);
course1.seInstructor(instructor1);
course2.seInstructor(instructor2);
console.log(course1.students);
const d1 = new Department("computer science");
d1.addCourse(course1);
console.log(d1.courses[0]);
//  log hello world
console.log("hello world");
// function
function add(a, b) {
    return a + b;
}
console.log(add(5, 6));
