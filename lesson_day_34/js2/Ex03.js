
function addRandomNumber(num) {
    return new Promise((resolve) => {
        const delay = 1000; //Delay of 1 second
        const randomNumber = Math.floor(Math.random() * 10) + 1; //

        setTimeout(() => {
            resolve(num + randomNumber);
        }, delay);
    })
}

addRandomNumber(6)
    .then(result => {
        console.log("First addition:", result);
        return addRandomNumber(result);
    });