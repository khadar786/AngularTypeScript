"use strict";
class Department {
    //short hand
    constructor(name) {
        this.name = name;
        //name:string;
        this.employees = [];
        this.empId = "Hgt123";
        this.name = name;
        //this.empId="12313";
    }
    /* constructor(name:string){
      this.name=name;
    } */
    describe() {
        console.log('Department : ' + this.name);
        console.log('empId : ' + this.empId);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id);
        this.admins = admins;
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id);
        this.reports = reports;
    }
    addEmployee(name) {
        if (name == "Khadar") {
            return;
        }
        this.employees.push(name);
    }
    addReports(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
}
//const accounting=new Department("Accounting");
/* const accounting=new ITDepartment("hgt123",['admin1','admin2']);
console.log(accounting);

//accounting.employees.push("testing");
accounting.describe();
accounting.addEmployee("khadar");
accounting.addEmployee("basha");
accounting.addEmployee("sayyad");
accounting.printEmployeeInformation();
// const accountCopy={name:'Dummy',descrbe:accounting.describe};
// accountCopy.descrbe(); */
const it = new ITDepartment("hgt123", ['admin1', 'admin2']);
it.describe();
it.addEmployee("khadar");
it.addEmployee("basha");
it.addEmployee("sayyad");
it.printEmployeeInformation();
console.log(it);
const accDep = new AccountingDepartment("hgt123", []);
accDep.addReports("testing purpose");
accDep.printReports();
accDep.addEmployee("nagoor");
console.log(accDep);
