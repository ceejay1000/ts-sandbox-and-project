import Invoice from "./classes/invoice.js";
import Payments from "./classes/payments.js";
import { Hasformater } from "./interfaces/hasformatter";
import { ListTemplate } from "./classes/listTemplates.js";

// let docOne: Hasformater;
// let docTwo: Hasformater;

// docOne = new Invoice("yoshi", "web work", 2000);

// docTwo = new Payments("mario", "Plumbing", 4000);

// list template instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

let Invoices: Invoice[] = [];

const invOne = new Invoice("Mariam", "Ceejay built a site", 5000);

const invTwo = new Invoice("Mariam", "Ceejay maintained the site", 3000);

Invoices.push(invOne);
Invoices.push(invTwo);
console.log(Invoices)
// console.log(anchor.href)
const form = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault()

  let doc: Hasformater;
  if (type.value === "invoice") {
     doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
  } else {
    doc = new Payments(toFrom.value, details.value, amount.valueAsNumber)
  }

  list.render(doc, type.value, "end")
  console.log(
    doc
  )
})