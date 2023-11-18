// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    //Get the dropdown element
    let dropdown = document.querySelector('.dropdown');
    // Add mouseover event listener to the dropdown
    dropdown.addEventListener('mouseover', function () {
        // SHow the dropdown content
        this.querySelector('.dropdown-content').style.display = 'block';
    });

    //  Add mouseout event listener to the dropdown
    dropdown.addEventListener('mouseout', function () {
        // Hide the dropdown content
        this.querySelector('.dropdown-content').style.display = 'none'
    });
}
)