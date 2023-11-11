// Function to open the form
function openForm() {
    document.getElementById("myForm").style.display = "block";

    // Add an event listener to close the form if clicking outside of it 
    document.addEventListener('click', closeFormOutside);
}

// Function to close the form
function closeForm() {
    document.getElementById("myForm").style.display = "none";

    // Remove the event listener when the form is closed
    document.removeEventListener("click", closeFormOutside);
}

// Function to close to the form when clicking outside of it 
function closeFormOutside(event) {
    const form = document.getElementById("myForm");
    if (!form.contains(event.target) && event.target !== document.getElementById("openBtn")) {
        // Clicked outside the form, so close it
        closeForm();
    }
}
