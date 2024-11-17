// Question 1
let name = "John";
let age = 25;
console.log(`My name is ${name} and I am ${age} years old.`);

// Question 2
let num = 13; 
if (num % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}


// Question 3
for (let i = 1; i <= 5; i++) {
    console.log(i);
  }

// Question 4

function addNumbers(a, b) {
    return a + b;
  }
  let result = addNumbers(7, 6);
  console.log(result);

// Question 5

let fruits = ["apple", "banana", "cherry"];
fruits.push("orange");
console.log(fruits[0]); 
console.log(fruits.length);

// Question 6

let numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
  console.log(number * 2);
});

// Question 7

document.getElementById("changeText").addEventListener("click", function () {
    document.querySelector("h1").innerText = "You clicked the button!";
  });
  

// Question 8

let text = "hello world";
console.log(text.toUpperCase());

// Question 9
let person = {
    name: "Alice",
    age: 30,
    greet: function () {
      return `Hello, my name is ${this.name}.`;
    },
  };
  console.log(person.greet());
  
