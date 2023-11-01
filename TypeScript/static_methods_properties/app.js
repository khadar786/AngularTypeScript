"use strict";
/*
abstract class ClassName{
  //variables declaration;
  //abstract or non-abstract methods
}
*/
class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    compensationStatement() {
        return `${this.firstName} makes ${this.getStipend()} a month`;
    }
}
class FullTimeEmployee extends Employee {
    constructor(firstName, lastName, stipend) {
        super(firstName, lastName);
        this.stipend = stipend;
    }
    getStipend() {
        return this.stipend;
    }
}
class Contractor extends Employee {
    constructor(firstName, lastName, rate, hours) {
        super(firstName, lastName);
        this.rate = rate;
        this.hours = hours;
    }
    getStipend() {
        return this.rate * this.hours;
    }
}
const pc = new FullTimeEmployee('Pranay', 'Chauhan', 15000);
const cn = new Contractor('Code', 'Ninja', 100, 200);
console.log(pc.compensationStatement());
console.log(cn.compensationStatement());
