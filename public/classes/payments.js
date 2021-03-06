class Payments {
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
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} owes £${this.amount} for ${this.details}`;
    }
}
export default Payments;
