let myPromise = new Promise((resolve, reject) => {
    // Asyncronous operation code here
    const condition = false; //This is just an example condition
    if (condition) {
        resolve('Promise is rsolved succesfully.');
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

