/*
abstract class ClassName{
  //variables declaration;
  //abstract or non-abstract methods
}
*/

abstract class Employee{
  constructor(private firstName:string,private lastName:string){

  }

  abstract getStipend():number

  get fullName():string{
    return `${this.firstName} ${this.lastName}`;
  }

  compensationStatement():string{
    return `${this.firstName} makes ${this.getStipend()} a month`;
  }

}

class FullTimeEmployee extends Employee{
  constructor(firstName:string,lastName:string,private stipend:number){
    super(firstName,lastName);
  }

  getStipend(): number {
      return this.stipend;
  }
}

class Contractor extends Employee {
  constructor(firstName: string, lastName: string, private rate: number, private hours: number) {
      super(firstName, lastName);
  }

  getStipend(): number {
      return this.rate * this.hours;
  }
 }

 const pc=new FullTimeEmployee('Pranay', 'Chauhan', 15000);
 const cn = new Contractor('Code', 'Ninja', 100, 200);

 console.log(pc.compensationStatement());
 console.log(cn.compensationStatement());