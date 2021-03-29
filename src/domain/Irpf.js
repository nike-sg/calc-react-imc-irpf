export default class Irpf {
  constructor(theDependentes, theTotalSalary) {
    this.dependents = theDependentes;
    this.totalSalary = theTotalSalary;
    this.tax = null;
  }

  isValid() {
    return this.dependents && this.totalSalary;
  }

  get dependents() {
    return this._dependents;
  }

  get totalSalary() {
    return this._totalSalary;
  }

  get tax() {
    return this._tax;
  }

  set dependents(theDependentes) {
    console.log('setting dependents', theDependentes);
    this._dependents = theDependentes;
  }

  set totalSalary(theTotalSalary) {
    console.log('setting Total Salary', theTotalSalary);
    this._totalSalary = theTotalSalary;
  }

  set tax(theTax)  {
    console.log('setting tax', theTax);
    this._tax = theTax;
  }

  toObject() {
    return {
      dependentsNumber: this._dependents,
      totalSalary: this._totalSalary,
      tax: this._tax
    };
  }
}
