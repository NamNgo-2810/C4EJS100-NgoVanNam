// 1.2.1
let myPromise = new Promise(function(resolve, rejected) {
    resolve(setTimeout(() => {
        console.log('Promise is da best');
    }, 5000));
});
console.log(myPromise);

// 1.2.2
async function myFunc() {
    let asyncPromise = new Promise(function(resolve, rejected) {
        resolve(setTimeout(() => {
            console.log('Promise is da best');
        }, 6000));
    });

    let res = await asyncPromise;
    return res;
}
console.log(myFunc());

// 1.2.3
let thenPromise = new Promise(function(resolve, rejected) {
    resolve(setTimeout(() => {
        console.log('Promise is da best');
    }, 7000));
})

thenPromise.then(
    res => console.log(res),
    err => console.log(err)
);