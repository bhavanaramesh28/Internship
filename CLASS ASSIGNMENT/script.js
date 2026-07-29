/*var   a=10
console.log(a)*/

/*const a=20
    a=15
console.log(a)*/

//create a variable as brand store as samsung//
 var brand =" samsung"
var price = 50000
var specification ="ROM"
console.log(brand)

const myname="Bhavana"
const pi = 3.14

let score = 0
score = 10
score=(score+5)
console.log(score)

let name="Bhavana"
let age = 19
console.log("My name is:",name, " and My age is:",age)

// Variables and typeof
let mark = 90;

console.log("Mark:", mark);
console.log("Type of mark:", typeof mark);

// Function Declaration
function sayHello() {
    console.log("Hello");
}
sayHello();

// Function Declaration (Addition)
function findProduct(a, b) {
    return a + b;
}
console.log("Addition:", findProduct(4, 7));

// Function Expression
let add = function(a, b) {
    return a + b;
};
console.log("Function Expression:", add(5, 3));

// Arrow Function (Multiplication)
let multiply = (a, b) => a * b;
console.log("Multiplication:", multiply(2, 3));

// Object
let person = {
    name: "Pooja",
    age: 19,
    isStudent: true,
    skill: ["HTML", "CSS"]
};

// Dot Notation
console.log("Name:", person.name);
console.log("Student:", person.isStudent);

// Bracket Notation
console.log("Name:", person["name"]);
console.log("Student:", person["isStudent"]);

// Display Array
console.log("Skills:", person.skill);

// Arrow Function (Tax Calculation)
let calculateTax = (price, rate) => {
    let tax = price * (rate / 100);
    return price + tax;
};

console.log("Total Price:", calculateTax(1000, 18));

// ===============================
// querySelector()
// ===============================

let heading = document.querySelector("h1");

console.log(heading.textContent);
console.log(heading.innerHTML);

// Change text
heading.textContent = "JavaScript DOM Updated";

// Change HTML
heading.innerHTML = "JavaScript <span>DOM</span>";

console.log(heading.className);

// ===============================
// classList
// ===============================

// Add
heading.classList.add("active");
console.log(heading.className);

// Remove
heading.classList.remove("active");
console.log(heading.className);

// Toggle
heading.classList.toggle("dark");
console.log(heading.className);

// ===============================
// Parent, Child & Sibling
// ===============================

let element = document.querySelector(".hero-section");

let parent = element.parentElement;
console.log(parent);

let children = element.children;
console.log(children);

let sibling = element.nextElementSibling;
console.log(sibling);

let first = element.firstElementChild;
console.log(first);

// ===============================
// Create Element
// ===============================

let card = document.createElement("div");

card.className = "project-card";

card.innerHTML = `
<img src="amazonlogo.jpg" alt="Amazon Logo">

<div class="project-body">
    <h3>New Project</h3>
    <p>This project is created using JavaScript.</p>
</div>
`;

let projects = document.querySelector(".projects-grid");

projects.appendChild(card);

// ===============================
// querySelectorAll()
// ===============================

let cards = document.querySelectorAll(".project-card");

console.log(cards);