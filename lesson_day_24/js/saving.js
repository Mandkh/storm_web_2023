makeButton("a");
makeButton("q");
makeButton("w");
makeButton("b");
//copy your makeButton function from the previous exercise
function makeButton(text) {
    let keyboard = document.getElementById('keyboard');
    let button = document.createElement("button");
    button.addEventListener('click', makeText);
    button.innerHTML = text;
    keyboard.appendChild(button);
    
}
//create the makeText function
function makeText(event) {
    console.log(event.target.innerText);
    let textbox = document.getElementById('textbox');
    textbox.innerText = (event.target.innerText);
}