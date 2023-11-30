function delayedHello() {
    setTimeout(() => {
        console.log("Hello, World");
    }, 2000)
};

delayedHello();

// .then((message) => console.log(message))

let myPromise = new Promise((resolve, reject) => {
    // Asyncronous operation code here
    const condition = true; //This is just an example condition
    if (condition) {
        resolve('Promise is resolved succesfully.');
    } else {
        reject('Promise is rejected');
    }
});

console.log(myPromise);

myPromise.then((res) => {
    console.log(res);
});


myPromise.catch((err) => {
    console.log(err);
});

