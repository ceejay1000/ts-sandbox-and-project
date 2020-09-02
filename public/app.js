import Invoice from "./classes/invoice.js";
import Payments from "./classes/payments.js";
import { ListTemplate } from "./classes/listTemplates.js";
// let docOne: Hasformater;
// let docTwo: Hasformater;
// docOne = new Invoice("yoshi", "web work", 2000);
// docTwo = new Payments("mario", "Plumbing", 4000);
// list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
let Invoices = [];
const invOne = new Invoice("Mariam", "Ceejay built a site", 5000);
const invTwo = new Invoice("Mariam", "Ceejay maintained the site", 3000);
Invoices.push(invOne);
Invoices.push(invTwo);
console.log(Invoices);
// console.log(anchor.href)
const form = document.querySelector(".new-item-form");
// inputs
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payments(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
    console.log(doc);
});
