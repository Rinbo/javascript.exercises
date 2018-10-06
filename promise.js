// Promises
const isDogHappy = true;

const willIGetTreat = new Promise(
    (resolve, reject) => {
        if (isDogHappy) {
            const treat = {
                brand: 'Pedigree',
                taste: 'great'
            };
            resolve(treat);
        } else {
            const reason = new Error('dog is not happy, at all!');
            reject(reason);
        }
    }
);

const happyDog = function (treat) {
    const message = 'Im happy friend I got a ' + treat.taste + ' ' + treat.brand + ' treat';
    return Promise.resolve(message);
};
// Call the promise
const askForTreat = function () {
    willIGetTreat
        .then(happyDog)
        .then(fulfilled => console.log(fulfilled))
        .catch(error => console.log(error.message));
};
askForTreat();