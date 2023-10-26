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

class Department{
  //name:string;
  private employees:string[]=[];
  private readonly empId="Hgt123";
  //short hand
  constructor(private name:string){
    this.name=name;
    //this.empId="12313";
  }

  /* constructor(name:string){
    this.name=name;
  } */

  describe(this:Department){
    console.log('Department : '+this.name);
    console.log('empId : '+this.empId);
  }

  addEmployee(employee:string){
    this.employees.push(employee);
  }

  printEmployeeInformation(){
    console.log(this.employees.length);
    console.log(this.employees);
  }

}

const accounting=new Department("Accounting");
console.log(accounting);

//accounting.employees.push("testing");
accounting.describe();
accounting.addEmployee("khadar");
accounting.addEmployee("basha");
accounting.addEmployee("sayyad");
accounting.printEmployeeInformation();
// const accountCopy={name:'Dummy',descrbe:accounting.describe};
// accountCopy.descrbe();