import { Hasformater } from "../interfaces/hasformatter";

class Invoice implements Hasformater{
  // readonly client: string;
  // private details: string;
  // public amount: number;

  // readonly allows variables to only be read inside or outside the class.
  // private allows variablees to only bbe modified inside the class.
  // public allows the class variables to be read and modified inside and outside the class.

  // constructor(c: string, d: string, a: number) {
  //   this.client = c;
  //   this.details = d;
  //   this.amount = a;
  // }

  // method two
  constructor(readonly client: string, private details: string, public amount: number) { }

  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`
  }
}

export default Invoice;