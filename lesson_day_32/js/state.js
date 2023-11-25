//  Function to handle the click event
function handleClick(event) {
    //Perform some action when the button is clicked
    console.log("Button was clicked!");
}

//Getting the button element
const button = document.getElementById("myButton");

// Adding the event listener to the button
button.addEventListener('click', handleClick);

function handleMouseEvent(event) {
    console.log(`Mouse position: X=${event.clientX}, Y=${event.clientY}`);
}

// Assuming you have an element to attach this handler to
const someElement = document.getElementById("myButton");
someElement.addEventListener('mousemove', handleMouseEvent);
