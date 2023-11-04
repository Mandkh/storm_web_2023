console.log("Lesson day - 24 JS Functions, JS Dom keyboard event");

// functions
// define function - without parameter

function myFunction() {
    console.log('it is my function');
}

// MyFunction Call
myFunction();
// function - with 1 parameter /example
function addTwo(number) {
    let x = number + 2;
    return x;
}
console.log(addTwo(5));

// function expression
const myFunctionTwo = function(){
    console.log('it is my function expression');
}
myFunctionTwo();

// Call function expression 
// first must define the function. Then call function

// ARROW function
const myArrowFunction = () => {
    console.log('it is my arrow function');
}
myArrowFunction(); //call the arrow function
const myArrowFunctionWithParameter = (number) => {
    let x = number + 2;
    return x;
}
console.log(myArrowFunctionWithParameter(6));
const paint = function (element) {
    console.log(element);
    element.style.color = 'red';
}




const colors = [
    'red',
    'blue',
    'orange',
    'pink',
    'yellow',
    'green'
];

console.log(colors[0]); //red
const paintElement = (elEvent) => {
    let randomIndex = Math.floor(Math.random() * color.length);
    console.log(elEvent);
    elEvent.target.style.color = colors[randomIndex];
}

// create ul element
let ulElement = document.createElement('ul');

for (let i = 0; i < 3; i++) {
    let liElement = document.createElement('li');
    liElement.innerHTML = 'Element - ' + i;
    ulElement.appendChild(liElement);
}
// add to the content element
let contentElement = document.getElementById('content');
contentElement.appendChild(ulElement);