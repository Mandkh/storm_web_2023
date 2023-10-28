console.log('lesson Day 21 - JS DOM CreateElement');
// recapture
// JS arrays
let numberArrays = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numberArrays);
console.log('lenght of array: ', numberArrays.length);

// change of element array

numberArrays[4] = 15;
console.log(numberArrays);

// looping in array
for (let i = 0; i < numberArrays.length; i++) {
    numberArrays[i] = numberArrays[i] * 6;
}

console.log(numberArrays);

// JS DOMs

var input = prompt('Enter your name: ');

// get element by id
var contentElement = document.getElementById('content');
console.log(contentElement);

contentElement.innerHTML = input;

// get elements by tag
var listsOfElements = document.getElementsByTagName('li');
console.log(listsOfElements);

listsOfElements[0].innerHTML = 'First : 1';

for (var i = 0; i < listOfElements.length; i++) {
    listOfElements[i].innerHTML = 'First : ' + (i + 1);
}

// create element and append to DOM

var fourthLi = document.createElement('li')

console.log(fourthLi);

fourthLi.innerHTML = 'Fourth : 4';

var ulElement = document.getElementsByTagName('ul');
console.log(ulElement);
ulElement[0].appendChild(fourthLi);