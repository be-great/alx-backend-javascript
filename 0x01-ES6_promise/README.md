#  0x01. ES6 Promises 
it's an object that handles async operations by attach callbacks called when the operation: succeed or fails.

## Promises (how, why, and what)
```javascript
let myProm = new Promise((succ, reject) => {
    let status = true;
    if (success) {
        succ("anything");
    }
    else {
        reject("anything")
    }
});


```
## How to use the then, resolve, catch methods
- then : to handle the succ or resolved value
```javascript
myProm.then(result => {
    console.log(result);
});
```
- catch : to handle the rejected value
```javascript
myProm.catch(error => {
    console.log(error);
});

```
- finally : to execute the code whatever the promise is rejected or succ.
```javascript
myProm.finally(() => {
    console.log("anything");
});
```
- resolve : used to return a resolved promise.
```javascript
myProm.resolve("resolved directly").then(result => {
    console.log(result);
});
```
- reject : to return a rejected promise.
```javascript
myProm.reject("rejected").catch(error => {
    console.log(error);
});
```
## How to use every method of the Promise object

- Promise.all : Takes an array of promises and waits for all of them to be resolved. If any promise is rejected, Promise.all fails.
```javascript
let pro1 = Promise.resolve("Promise 1");
let pro2 = Promise.resolve("Promise 2");
Promise.all([pro1, pro2]).then(results => {
    console.log(results);
});
```
- Promise.race : Takes an array of promises and returns the result of the first one that settles (whether resolved or rejected).
```javascript
let slowProm = new Promise(resolve => setTimeout(() => resolve("slow"), 200));
let fastProm = new Promise(resolve => setTimeout(() => resolve("fast"), 100));
Promise.race([slowProm, fastProm]).then(result => {
    console.log(result);
});
```
## Throw / Try
when you want to custom an error you can type the logic in the then and then the error displayer on catch block. (manually throw an error).
```javascript
let myProm = new Promise(resolve => setTimeout(() => resolve("my Promise"), 200));
myProm.then(result => {
    if (!result) // or anything
    {
        throw new Error("Somthing went wrong!");
    }
}).catch(error => {
    console.error(error);
});

```
## Async / Await
- async : keyword allows you to define a function that returns a promise.
```javascript
async function name() {
    return "This is a promise";
}
name().then(result => console.log(result));
```
- await : keyword pauses the execute of an async function until the promise function resolved or rejected.

```javascript
async function name() {
    let data = await fetch("https://www.google.com");
    console.log(data);
}
```
- async, await : handles errors

```javascript
async function name() {
    try {
        let data = await fetch('https://www.google.com');
    }
    catch(error) {
        ...
    }
}

```
# Tasks

# Tasks 0
- just return a promise wihtout anything
# Tasks 1
# Tasks 2
# Tasks 3
# Tasks 4
# Tasks 5
# Tasks 6
# Tasks 7
# Tasks 8
# Tasks 9
# Tasks 100

