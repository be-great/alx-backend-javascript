#  0x00. ES6 Basics 

- What ES6 is

ES6, or ECMAScript 2015, is the 6th edition of the ECMAScript standard and one of the most significant updates to the JavaScript language. It introduced many new features and syntax improvements, making JavaScript more efficient, readable, and easier to work with.

- New features introduced in ES6
New Features Introduced in ES6

    Let and Const: Block-scoped variables and constants.
    Arrow Functions: A shorter syntax for writing functions.
    Template Literals: For embedding expressions and multiline strings.
    Default Parameters: Allow setting default values for function parameters.
    Destructuring Assignment: Extract values from arrays/objects easily.
    Rest and Spread Operators: For handling variable numbers of function parameters and expanding arrays/objects.
    Classes: More intuitive syntax for object-oriented programming.
    Modules: Import/export syntax for modular code.
    Promises: For handling asynchronous operations.
    Enhanced Object Literals: Shorthand for defining properties and methods.
    Iterators and Generators: For custom iteration behavior.
    for...of Loop: Iterating over iterable objects like arrays, strings, etc.

- The difference between a constant and a variable

* The Difference Between a Constant and a Variable

    Variable (let or var):
        A value that can change during program execution.
        let is block-scoped, whereas var is function-scoped.


  ```js
  let x = 5;
  x = 10; // Reassignment is allowed
  ```
* Constant (const):

    A value that cannot be reassigned once set.
    It is also block-scoped.

    ```js
    const y = 20;
    // y = 30; // Error: Assignment to constant variable
    ```
    Note: const only prevents reassignment; if the value is an object or array, its properties or elements can still be modified.

- Block-scoped variables
```js
if (true) {
  let a = 5;
  const b = 10;
}
// console.log(a); // ReferenceError: a is not defined
```
- Arrow functions and function parameters default to them
```js
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5
```

- Rest and spread function parameters

```js
const greet = (name = 'Guest') => `Hello, ${name}`;
console.log(greet()); // Output: Hello, Guest
```
- String templating in ES6

* Template Literals: Allow embedding expressions and multiline strings using backticks (`).

```javascript

const name = "Dua";
const greeting = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, Dua!
```

- Object creation and their properties in ES6

```javascript
const x = 10;
const y = 20;

const point = { x, y }; // Shorthand for { x: x, y: y }
console.log(point); // Output: { x: 10, y: 20 }

// Methods can be defined using shorthand syntax
const obj = {
  greet() {
    return "Hello!";
  }
};
console.log(obj.greet()); // Output: Hello!
```


- Iterators and for-of loops

```javascript
const numbers = [1, 2, 3];

// Using an iterator
const iterator = numbers[Symbol.iterator]();
console.log(iterator.next()); // Output: { value: 1, done: false }
console.log(iterator.next()); // Output: { value: 2, done: false }

// Using for-of loop
for (const num of numbers) {
  console.log(num); // Output: 1, 2, 3
}
```
## Install dependency

```
in your project directory, install Jest, Babel and ESList by using the supplied package.json and run npm install.

```
## Run The script
Example:-
```bash
npm run dev 0-main.js 
```

## Task 0


## Task 1


## Task 2


## Task 3


## Task 4


## Task 5


## Task 6


## Task 7
Shorthand Properties
```javascript
// From
function formatMessage (name, id, avatar) {
  return {
    name: name,
    id: id,
    avatar: avatar,
    timestamp: Date.now()
  }
}
// To
function formatMessage (name, id, avatar) {
  return {
    name,
    id,
    avatar,
    timestamp: Date.now()
  }
}

```
## Task 8
How to Set Variables as Property Names
```javascript

const key1 = "language"
const key2 = "isStudent"

const obj = {
  name: "dillion",
  age: 1000,
  [key1]: "javascript",
  [key2]: true
}

console.log(obj)

```

## Task 9
Use ES6 method properties:-
```javascript


```

## Task 10


## Task 11


## Task 12


## Task 100


## Task 101








