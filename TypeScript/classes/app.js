"use strict";
/* class Department{
  name:string;

  constructor(name:string){
    this.name=name;
  }

  describe(){
    console.log('Department : '+this.name);
  }
}

const accounting=new Department("Accounting");
console.log(accounting);

accounting.describe();
const accountCopy={descrbe:accounting.describe};
accountCopy.descrbe(); */
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
const accounting = new Department("Accounting");
console.log(accounting);
//accounting.employees.push("testing");
accounting.describe();
accounting.addEmployee("khadar");
accounting.addEmployee("basha");
accounting.addEmployee("sayyad");
accounting.printEmployeeInformation();
// const accountCopy={name:'Dummy',descrbe:accounting.describe};
// accountCopy.descrbe();
