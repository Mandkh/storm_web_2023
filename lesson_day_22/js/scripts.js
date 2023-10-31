console.log('Lesson Day 22 - JS DOM - HTML functions')
let h2Element = document.createElement("h2");
h2Element.innertext = 'My favourite foods';
// hoolny torluud
h2Element.setAttribute('class', 'my-favourite-foods');
// DOM tree luu nemeh
let contentElement = document.getElementById('content');
contentElement
main();
function main() {
    printTriangleArea(40, 300, 100, 200);
}
function printTriangleArea(color, radius, x, y) {
    triangle(radius);
    triangle.setColor(color);
    triangle.setPosition(x, y);
    triangle.debug = true;
    add(triangle);
} 































let clickMeButton = document.createElement('button');
clickMeButton.innertext = 'Click Me';
clickMeButton.setAttribute('style', 'border: 1px solid green; padding 10px; font-size: 20px;');

contentElement.appendChild(clickMeButton);

function showAlert(){
    alert('Hello World');
}

clickMeButton.addEventListener('click', showAlert);
                                    // ki
