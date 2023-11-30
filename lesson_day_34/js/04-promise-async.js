let myPromise = new Promise((resolve, reject) => {
    //Asynchronous operation code here
    const condition = true; //This is just an example condition
    if (condition) {
        resolve('Promise is reszolved succesfully');
    } else {
        reject('Promise is rejected.');
    }
});


//async function without chaining
async function callMyPromise() {
    try {
        const res = await myPromise;

        console.log(res);
    } catch (err) {
        console.error(err);
    }
}

callMyPromise();