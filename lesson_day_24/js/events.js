console.log("JS Lessn day 24 - JS Events");

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
