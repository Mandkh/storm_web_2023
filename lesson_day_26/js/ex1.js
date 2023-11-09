let div1 = document.createElement('div');
div1.innerHTML = "Element 1";
div1.setAttribute('id', 'div1');
div1.setAttribute('class', 'my-class');
div1.setAttribute('style', 'background-color: yellow;');
let div2 = document.createElement('div');
div2.innerHTML = "Element 2";
div2.setAttribute('id', 'div2');
div2.setAttribute('class', 'my-class');
div2.setAttribute('style', 'background-color: orange');
const container = document.getElementById('container');
container.appendChild(div1);
container.appendChild(div2);



