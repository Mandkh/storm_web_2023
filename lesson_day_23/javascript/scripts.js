function paintRed(element) {
    if (element.hasAttribute('style'))
        element.stylee.color = "blue";
}
console.log("Lesson day 23 - JS HTML functions, this keyword");
// 1. HTML functions
const todaysTopics = ['HTML functions', 'This keyword', 'Making Keyword small project']

console.log(todaysTopics);


const topicHeader = document.createElement("h2");

// topic h2 add text
topicHeader.innerHTML = "Today's lesson";

// id=content get element
let content = document.getElementById('content');

// add h2 in id=content
content.appendChild(topicHeader);


// Create elements
let ulElement = document.createElement('ul');


// show todaystopic's massive defines
for(let i = 0; i < todaysTopics.length; i++) {
    let liElement = document.createElement('li');
    liElement.innerHTML = todaysTopics[i];
    ulElement.appendChild(liElement);
}

content.appendChild(ulElement);

topicHeader.addEventListener('click', paintRed);
topicHeader.addEventListener('mousedown', makeBigger);
topicHeader.addEventListener('mouseove', makeNormal);

function paintRed() {
    topicHeader.style.color = 'red';
}

function makeBigger() {
    topicHeader.style.fontSize = '70px';
}

function makeNormal() {
    todaysTopics.style.fontSize = '20px';
}


// how to add eventlistener to elements has already exists
function paintBlue(element){
    if(element.hasAttribute('style')){
        element.removeAttribute('style');

    } else {
        element.style.color = 'blue';

    }
}