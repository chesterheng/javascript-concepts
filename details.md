# JavaScript: The Advanced Concepts Study Notes (Live)

## Table of Contents

- [JavaScript: The Advanced Concepts Study Notes (Live)](#javascript-the-advanced-concepts-study-notes-live)
  - [Table of Contents](#table-of-contents)
  - [**Section 2: JavaScript Foundation**](#section-2-javascript-foundation)
    <details>
    <summary>Click to expand!</summary>
      
    - [Javascript Engine](#javascript-engine)
    - [Inside the Engine](#inside-the-engine)
    - [Interpreters and Compilers](#interpreters-and-compilers)
    - [Babel + TypeScript](#babel--typescript)
    - [Inside the V8 Engine](#inside-the-v8-engine)
    - [Comparing Other Languages](#comparing-other-languages)
    - [Writing Optimized Code](#writing-optimized-code)
    - [WebAssembly](#webassembly)
    - [Call Stack and Memory Heap](#call-stack-and-memory-heap)
    - [Stack Overflow](#stack-overflow)
    - [Garbage Collection](#garbage-collection)
    - [Memory Leaks](#memory-leaks)
    - [Single Threaded](#single-threaded)
    - [Javascript Runtime](#javascript-runtime)
    - [Node.js](#nodejs)
    - [Advanced JavaScript Cheatsheet](#advanced-javascript-cheatsheet)
    </details>
  - [**Section 3: Javascript Foundation II**](#section-3-javascript-foundation-ii)
    <details>
    <summary>Click to expand!</summary>
    
    - [Execution Context](#execution-context)
    - [Lexical Environment](#lexical-environment)
    - [Hoisting](#hoisting)
    - [Function Invocation](#function-invocation)
    - [arguments Keyword](#arguments-keyword)
    - [Variable Environment](#variable-environment)
    - [Scope Chain](#scope-chain)
    - [[[scope]]](#scope)
    - [JS is Weird](#js-is-weird)
    - [Function Scope vs Block Scope](#function-scope-vs-block-scope)
    - [Global Variables](#global-variables)
    - [IIFE](#iife)
    - [this Keyword](#this-keyword)
    - [Dynamic Scope vs Lexical Scope](#dynamic-scope-vs-lexical-scope)
    - [call(), apply(), bind()](#call-apply-bind)
    - [bind() and currying](#bind-and-currying)
    - [Context vs Scope](#context-vs-scope)
    </details>
  - [**Section 4: Types in JavaScript**](#section-4-types-in-javascript)
    <details>
    <summary>Click to expand!</summary>
    
    - [Javascript Types](#javascript-types)
    - [Array.isArray()](#arrayisarray)
    - [Pass By Value vs Pass By Reference](#pass-by-value-vs-pass-by-reference)
    - [Exercise: Compare Objects](#exercise-compare-objects)
    - [Exercise: Pass By Reference](#exercise-pass-by-reference)
    - [Type Coercion](#type-coercion)
    </details>
  - [**Section 5: The 2 Pillars: Closures and Prototypal Inheritance**](#section-5-the-2-pillars-closures-and-prototypal-inheritance)
    <details>
    <summary>Click to expand!</summary>
      
    - [Functions are callable Objects](#functions-are-callable-objects)
    - [First Class Citizens](#first-class-citizens)
    - [Extra Bits: Functions](#extra-bits-functions)
    - [Higher Order Functions](#higher-order-functions)
    - [Closures](#closures)
    - [Closures and Memory](#closures-and-memory)
    - [Closures and Encapsulation](#closures-and-encapsulation)
    - [Closures Exercises and Solutions](#closures-exercises-and-solutions)
    - [Prototypal Inheritance](#prototypal-inheritance)
    - [Inherit the properties of parent object](#inherit-the-properties-of-parent-object)
    - [Check proprties](#check-proprties)
    - [Create our own prototypes](#create-our-own-prototypes)
    - [Only functions has prototype property](#only-functions-has-prototype-property)
    - [Exercise - extend the functionality of a built in object](#exercise---extend-the-functionality-of-a-built-in-object)
    - [Prototypal Inheritance with this](#prototypal-inheritance-with-this)
    - [Section Review](#section-review)
    </details>
  - [**Section 6: Object Oriented Programming**](#section-6-object-oriented-programming)
    <details>
    <summary>Click to expand!</summary>
      
    - [Section Overview](#section-overview)
    - [OOP and FP](#oop-and-fp)
    - [OOP Introduction](#oop-introduction)
    - [OOP1: Factory Functions](#oop1-factory-functions)
    - [OOP2: Object.create()](#oop2-objectcreate)
    - [OOP3: Constructor Functions](#oop3-constructor-functions)
    - [OOP4: ES6 Classes](#oop4-es6-classes)
    - [this - 4 Ways](#this---4-ways)
    - [Inheritance](#inheritance)
    - [Public vs Private](#public-vs-private)
    - [4 Pillars of OOP](#4-pillars-of-oop)
    - [Exercise: OOP and Polymorphism](#exercise-oop-and-polymorphism)
    </details>
  - [**Section 7: Functional Programming**](#section-7-functional-programming)
    <details>
    <summary>Click to expand!</summary>
      
    - [Functional Programming Introduction](#functional-programming-introduction)
    - [Exercise: Amazon shopping](#exercise-amazon-shopping)
    - [Pure Functions](#pure-functions)
    - [Can Everything Be Pure?](#can-everything-be-pure)
    - [Idempotent](#idempotent)
    - [Imperative vs Declarative](#imperative-vs-declarative)
    - [Immutability](#immutability)
    - [Higher Order Functions and Closures](#higher-order-functions-and-closures)
    - [Currying](#currying)
    - [Partial Application](#partial-application)
    - [Compose and Pipe](#compose-and-pipe)
    - [Arity](#arity)
    - [Solution: Amazon](#solution-amazon)
    </details>
  - [**Section 8: OOP vs FP**](#section-8-oop-vs-fp)
    <details>
    <summary>Click to expand!</summary>
      
    - [Composition vs Inheritance](#composition-vs-inheritance)
    - [OOP vs FP](#oop-vs-fp)
    </details>
  - [**Section 9: Asynchronous JavaScript**](#section-9-asynchronous-javascript)
    <details>
    <summary>Click to expand!</summary>
      
    - [Job Queue](#job-queue)
    - [Parallel, Sequence and Race](#parallel-sequence-and-race)
    - [Threads, Concurrency and Parallelism](#threads-concurrency-and-parallelism)
    </details>
  - [**Section 10: Modules In JavaScript**](#section-10-modules-in-javascript)
    <details>
    <summary>Click to expand!</summary>
      
    - [What Is A Module?](#what-is-a-module)
    - [Module Pattern](#module-pattern)
    - [Module Pattern Pros and Cons](#module-pattern-pros-and-cons)
    - [CommonJS, AMD, UMD](#commonjs-amd-umd)
    - [ES6 Modules](#es6-modules)
    </details>
  - [**Section 11: Error Handling**](#section-11-error-handling)
    <details>
    <summary>Click to expand!</summary>
      
    - [Errors In JavaScript](#errors-in-javascript)
    - [Try Catch](#try-catch)
    - [Async Error Handling](#async-error-handling)
    - [Exercise: Error Handling](#exercise-error-handling)
    - [Extending Errors](#extending-errors)
    </details>

## **Section 2: JavaScript Foundation**

### Javascript Engine

- [List of ECMAScript engines](https://en.wikipedia.org/wiki)
- [V8 JavaScript engine](https://v8.dev/)
- [Brendan Eich](https://en.wikipedia.org/wiki/Brendan_Eich)
- [SpiderMonkey](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey)
- [What’s the difference between JavaScript and ECMAScript?](https://www.freecodecamp.org/news/whats-the-difference-between-javascript-and-ecmascript-cba48c73a2b5/)

**[⬆ back to top](#table-of-contents)**

### Inside the Engine

![](js-engine-pipeline.svg)
![](memory-heap-call-stack.png)

- [AST Explorer](https://astexplorer.net/)
- [JavaScript engine fundamentals: Shapes and Inline Caches](https://mathiasbynens.be/notes/shapes-ics)
- [What happens inside JavaScript Engine ?](https://www.geeksforgeeks.org/what-happens-inside-javascript-engine/)
- [How JavaScript works](https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf)

```javascript
const jsengine = code => code.split(/\s+/)
jsengine('var a = 5')
```

**[⬆ back to top](#table-of-contents)**

### Interpreters and Compilers

- Interpreter directly executes the instructions in the source programming language 
- compiler translates instructions into efficient machine code
  - take one language and convert into a different one
- [Compilers and Interpreters](https://medium.com/hackernoon/compilers-and-interpreters-3e354a2e41cf)
- [A Deeper Inspection Into Compilation And Interpretation](https://medium.com/basecs/a-deeper-inspection-into-compilation-and-interpretation-d98952ebc842)
- [Inside the Javascript Engine: Compiler and Interpreter](https://medium.com/@allansendagi/inside-the-javascript-engine-compiler-and-interpreter-c8faa638b0d9)

**[⬆ back to top](#table-of-contents)**

### Babel + TypeScript

Javascript compiler

- [Babel](https://babeljs.io/)
- [TypeScript](https://www.typescriptlang.org/)

**[⬆ back to top](#table-of-contents)**

### Inside the V8 Engine

JIT compiler = Interpreter + Compiler

- It all starts with the JavaScript code you write. The JavaScript engine parses the source code and turns it into an Abstract Syntax Tree (AST). Based on that AST, the interpreter can start to do its thing and produce bytecode. Great! At that point the engine is actually running the JavaScript code.
- To make it run faster, the bytecode can be sent to the optimizing compiler along with profiling data. The optimizing compiler makes certain assumptions based on the profiling data it has, and then produces highly-optimized machine code.
- If at some point one of the assumptions turns out to be incorrect, the optimizing compiler deoptimizes and goes back to the interpreter.

**[⬆ back to top](#table-of-contents)**

### Comparing Other Languages

- Executable file: The product of the linking process. They are machine code which can be directly executed by the CPU.
- [Machine code vs. Byte code vs. Object code vs. Source code vs. Assembly code vs. Executable code](https://medium.com/@rahul77349/machine-code-vs-byte-code-vs-object-code-vs-source-code-vs-assembly-code-812c9780f24c)

**[⬆ back to top](#table-of-contents)**

### Writing Optimized Code

Memoization is a way to cache a return value of a function based on its parameters. This makes the function addTo80 that takes a long time to run much faster over one execution. If the parameter changes, it will have to reevaluate the function.

```javascript
function addTo80(n) {
  return n + 80;
}

function memoizedAddTo80() {
  const cache = {};
  return function(n) {
    console.log(cache);
    if(n in cache) {
      console.log('inside cache');
      return cache[n];
    }
    else {
      console.log('not in cache');
    	cache[n] = addTo80(n);
      return cache[n];
    }
  }
}

const memorized = memoizedAddTo80();
memorized(5)
memorized(5)
memorized(5)
```

[Javascript Hidden Classes and Inline Caching in V8](https://richardartoul.github.io/jekyll/update/2015/04/26/hidden-classes.html)
[Optimizing dynamic JavaScript with inline caches](https://github.com/sq/JSIL/wiki/Optimizing-dynamic-JavaScript-with-inline-caches)

Here are a few things you should avoid when writing your code if possible: 

- eval()
- arguments
- for in
- with 
- delete

There are a few main reasons these should be avoided. 

- Hidden classes
- Inline caching

```javascript
// Inline caching
const findUser = user => `Found ${user.firstName} ${user.lastName}`;

const userData = {
  firstName: 'Johnson',
  lastName: 'Junior'
}

// Code that executes the same method repeatedly will run faster than code that executes many different methods only once (due to inline caching).
findUser(userData)
```

```javascript
// Hidden classes
function Animal(x, y) {
//   Always instantiate your object properties in the same order so that hidden classes, and subsequently optimized code, can be shared.
  this.x = x;
  this.y = y;
}

const obj1 = new Animal(1,2);
const obj2 = new Animal(3,4);

// Adding properties to an object after instantiation will force a hidden class change and slow down any methods that were optimized for the previous hidden class. Instead, assign all of an object’s properties in its constructor.
obj1.a = 30;
obj1.b = 100;
obj2.b = 30;
obj2.a = 100;
```

**[⬆ back to top](#table-of-contents)**

### WebAssembly

Why not just use machine code from the beginning?
- Compile code ahead of time or even just compiling the code on the browser was not feasiblea at all because back in the day that was really really slow
- Impossible all the browsers agree on an executable format to run javascript

In the future

- [WebAssembly](https://webassembly.org/)
- Standard binary executable format

**[⬆ back to top](#table-of-contents)**

### Call Stack and Memory Heap

- Memory Heap: store and write information
- Call Stack: keep track of where we are in the code

```javascript
// memory heap

const number = 610; // allocate memory for number
const string = 'some text'; // allocate memory for a string
const human = { // allocate memory for an object and its value
  first: 'Chester',
  last: 'Heng'
};

const subtractTwo = num => num - 2;
const calculate = () => subtractTwo(4 + 5)

// call stack - FILO
// subtractTwo
// calculate
// Global Execution Context
```

**[⬆ back to top](#table-of-contents)**

### Stack Overflow

```javascript
// When a function calls itself,
// it is called RECURSION
function inception() {
  inception();
}

inception();
// returns Uncaught RangeError:
// Maximum call stack size exceeded
```

**[⬆ back to top](#table-of-contents)**

### Garbage Collection

- [Memory Management](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management)
- [Garbage collection](https://javascript.info/garbage-collection)
- [Understanding JavaScript Memory Management using Garbage Collection](https://medium.com/front-end-weekly/understanding-javascript-memory-management-using-garbage-collection-35ed4954a67f)

![](mark-and-sweep-garbage-collector-algorithm.gif)

```javascript
var person = {
  first: "Brittney",
  last: "Postma"
};
person = "Brittney Postma";
```

**[⬆ back to top](#table-of-contents)**

### Memory Leaks

- [Garbage Collection in Redux Applications](https://developers.soundcloud.com/blog/garbage-collection-in-redux-applications)
- [Global object](https://developer.mozilla.org/en-US/docs/Glossary/Global_object)

```javascript
// infinite loop
let array = []
for (let i = 5; i > 1; i++) {
  array.push(i-1)
}

// global variable
var a = 1;
var b = 1;
var c = 1;

 var person = {
 first: "Brittney",
 last: "Postma"
 };
person = "Brittney Postma";

// event listeners
var element = document.getElementById('button')
element.addEventListener('click', onClick)

// setInterval
setInterval(() => {
  // reference objec
})
```

**[⬆ back to top](#table-of-contents)**

### Single Threaded

- Only one thing can be executed at a time 
- Javascript only has one call stack 
- Javascript is a synchronous language
  - Imagine an alert on the page
  - Block the user from accessing any part of the page until the OK button is clicked

This is where concurrency and the event loop come in.

**[⬆ back to top](#table-of-contents)**

### Javascript Runtime

- [The Javascript Runtime Environment](https://medium.com/@olinations/the-javascript-runtime-environment-d58fa2e60dd0)
- [JS Runtime Playground](http://latentflip.com/loupe)
- [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API)
  - see window global object for all Web APIs methods
- All synchronous code will be pushed to Call Stack and execute in sequence
- Asynchronous Web APIs code will be executed by browser in the background in sequence
- Browser will store all Callback functions in Callback Queue
- Event Loop check for empty Call Stack to make sure all synchronous code has completed execution
  - Push Callback functions in Callback Queue to Call Stack and start execution

**[⬆ back to top](#table-of-contents)**

### Node.js

Summary

- I/O Intensive
- Non-blocking I/O

References

- [Introduction to Node.js / A beginners guide to Node.js and NPM](https://itnext.io/introduction-to-node-js-a-beginners-guide-to-node-js-and-npm-eca9c408f9fe)
- [How Node.js Works](https://www.youtube.com/watch?v=jOupHNvDIq8)
- [How Node JS Works?](https://www.youtube.com/watch?v=YSyFSnisip0)
- [Global Objects](https://nodejs.org/api/globals.html#globals_global_objects)
- [10 Things I Regret About Node.js](https://www.youtube.com/watch?v=M3BM9TB-8yA)

**[⬆ back to top](#table-of-contents)**

### Advanced JavaScript Cheatsheet

- [JavaScript Cheat Sheet: The Advanced Concepts](https://zerotomastery.io/courses/advanced-javascript/cheatsheet/)
- [JavaScript Cheat Sheet: The Advanced Concepts PDF](ztm-javascript-cheatsheet.pdf)

**[⬆ back to top](#table-of-contents)**

## **Section 3: Javascript Foundation II**

### Execution Context

Global Execution Context

Creation Phase

- Global object created: window
- Initializes this keyword to global
- window === this

Executing Phase

- Variable Environment created - memory space for var variables and functions created
- Initializes all variables to undefined (also known as hoistng) and places them with any functions into memory

```javascript
this;
window;
this === window;
```

**[⬆ back to top](#table-of-contents)**

### Lexical Environment

- lexical environment: the scope or environment the engine is currently reading code in
  - a new lexical environment is created when curly brackets {} are used
- lexical scope: available data + variables where function was defined
- dynamic scope: where function is called

```javascript
function one() {
  var isValid = true;  // local env
  two();  // new execution context
}

function two() {
  var isValid; // undefined
}

var isValid = false; // global
one();

// two() isValid = undefined
// one() isValid = true
// global() isValid = false
// -------------------------
// call stack
```

**[⬆ back to top](#table-of-contents)**

### Hoisting

- Hoisting is the process of putting all variable and function declarations into memory during the compile phase   
  - functions are fully hoisted
  - var variables are hoisted and initialized to undefined
  - let and const variables are hoisted but not initialized a value

```javascript
var favouriteFood = "grapes";

var foodThoughts = function () {
  console.log("Original favourite food: " + favouriteFood);
  var favouriteFood = "sushi";
  console.log("New favourite food: " + favouriteFood);
};

foodThoughts()
```

```javascript
// Global Execution Context
// Creation Phase
var favouriteFood = undefined
var foodThoughts = undefined

// Executing Phase
favouriteFood = "grapes"
foodThoughts = function () {
  console.log("Original favourite food: " + favouriteFood);
  var favouriteFood = "sushi";
  console.log("New favourite food: " + favouriteFood);
}
```

```javascript
foodThoughts()
// Functional Execution Context
// Creation Phase
var favouriteFood = undefined

// Executing Phase
"Original favourite food: undefined"
favouriteFood = "sushi"
"New favourite food: sushi"
```

Avoid hoisting when possible. It can cause memory leaks and hard to catch bugs in your code. Use let and const as your go to variables.

**[⬆ back to top](#table-of-contents)**

### Function Invocation

```javascript
// Function Expression
var canada = () => console.log('cold')

// Function Declaration
function india() {
  console.log('warm')
}

// Function Invocation / Call / Execution
canada()
india()
```

Functional Execution Context

- Only when a function is invoked, does a function execution context get created

Creation Phase

- Argument object created with any arguments
- Initializes this keyword to point called or to the global object if not specified

Executing Phase

- Variable Environment created - memory space for variable and functions created
- Initializes all variables to undefined and places them into memory with any new functions

**[⬆ back to top](#table-of-contents)**

### arguments Keyword

```javascript
function showArgs(arg1, arg2) {
  console.log("arguments: ", arguments);
  console.log(Array.from(arguments));
}
showArgs("hello", "world");

function showArgs2(...args) {
  console.log("arguments: ", args);
  console.log(args[0], args[1]);
}
showArgs2("hello", "world");

function noArgs() {
  console.log("arguments: ", arguments);
}
noArgs();
```

**[⬆ back to top](#table-of-contents)**

### Variable Environment

```javascript
function two() {
  var isValid;
}

function one() {
  var isValid = true;
  two();
}

var isValid = false;
one()

// global execution context creation
// function two() { ... }
// function one() { ... }
// var isValid = undefined;

// global execution context execution
// var isValid = false;

// function one execution context creation
// var isValid = undefined;

// function one execution context execution
// var isValid = true;

// function two execution context creation
// var isValid = undefined;

// function two execution context execution
```

**[⬆ back to top](#table-of-contents)**

### Scope Chain

- Lexical Environment === [[scope]]
- outer scope === [[scope]]

```javascript
// Scope defines the accessibility of variables and functions in the code
// Global Scope is the outer most scope
function sayMyName() {
  var a = 'a';
  return function findName() {
    var b = 'b';
    console.log(a);
    return function printName() {
      var c = 'c';
      console.log(a);
      console.log(b);
      return 'Andrei Neagoie'
    }
  }
}

sayMyName()()()
```

**[⬆ back to top](#table-of-contents)**

### [[scope]]

```javascript
function a() { }

// window: {
//   a: f a() {
//     [[Scopes]] : [
//       Script { },
//       Global { }
//     ]
//   }
// }
```

**[⬆ back to top](#table-of-contents)**

### JS is Weird

```javascript
// Weird Javascript #1 - it asks global scope for height
// Global scope says: ummm... no but here I just created it for you.
// We call this leakage of global variables.
function weird() {
  height = 50
}

weird()
```

```javascript
// leakage of global variables is not allowed
'use strict'
function weird() {
  height = 50
}

weird()
```

```javascript
var heyhey = function doodle() {
  return "heyhey"
}

heyhey();
doodle(); // Error! because it is enclosed in its own scope.
```

**[⬆ back to top](#table-of-contents)**

### Function Scope vs Block Scope

```javascript
// Function Scope
function loop() {
  for( var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i)
}

// Block Scope
function loop2() {
  for( let i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i)
}
```

**[⬆ back to top](#table-of-contents)**

### Global Variables

```javascript
// variable collisions
// all global variables are on the global execution context
// they overwrite each other
var z = 1;
var z = 2;
z
```

**[⬆ back to top](#table-of-contents)**

### IIFE

```javascript
// place all library code inside local scope 
// to avoid any namespace collisions
// function expression
// anonymous function
(function() {

})();

// cannot call function declaration immediately
function a(){}()

var script1 = (function() {
  function a() {
    return 5;
  }
  return {
    a: a
  }
})();
script1.a()
```

**[⬆ back to top](#table-of-contents)**

### this Keyword

this is the object that the function is a property of

```javascript
function a() {
  console.log(this) // this refer to window object
}

const b = () => console.log(this) // this refer to window object

a()
b()
```

```javascript
// gives methods access to their object
const obj = {
  name: 'Billy',
  sing: function() {
    return 'llala ' + this.name + '!'
  },
  singAgain: function() {
    return this.sing()
  }
}

obj.singAgain()
```

```javascript
// execute some code for multiple objects
function importantPerson() {
  console.log(this.name)
}

importantPerson() // this refer to window object

const name = 'Sunny';
const obj1 = { name: 'Cassy', importantPerson }
const obj2 = { name: 'Jacob', importantPerson }

obj1.importantPerson()  // Cassy
obj2.importantPerson()  // Jacob
```

```javascript
var b = {
  name: 'jay',
  say() {console.log(this)} 
}

var c = {
  name: 'jay',
  say() {return function() {console.log(this)}}
}

var d = {
  name: 'jay',
  say() {return () => console.log(this)}
}

b.say()   // this refer to b object
c.say()() // this refer to window object
d.say()() // this refer to b object
```

```javascript
const character = {
  name: 'Simon',
  getCharacter() {
    return this.name;
  }
};

const giveMeTheCharacterNOW = character.getCharacter.bind(character);
giveMeTheCharacterNOW()
```

**[⬆ back to top](#table-of-contents)**

### Dynamic Scope vs Lexical Scope

- lexical scope: available data + variables where function was defined
- dynamic scope: where function is called
  - this keyword is dynamic scope

| Lexical scope                 | Dynamic Scope                    |
| ----------------------------- | -------------------------------- |
| write-time                    | run-time                         |
| where a function was declared | where a function was called from |

```javascript
const a = function() {
  console.log('a', this)  // this refer to window object
  const b = function() {
    console.log('b', this)  // this refer to window object
    const c = {
      hi: function() {
        console.log('c', this)  /// this refer to c object
      }
    }
    c.hi()  
  }
  b()
}

a()
```

```javascript
const obj = {
  name: 'Billy',
  sing: function() {
    console.log('a', this) // refer to obj object
    const anotherFunc = function() {
      console.log('b', this) // refer to window object
    }
  }
}
obj.sing()
```

```javascript
const obj = {
  name: 'Billy',
  sing() {
    console.log('a', this) // refer to obj object
    // arrow function is lexical bound
    const anotherFunc = () => console.log('b', this)  // refer to obj object
    anotherFunc()
  }
}
obj.sing()
```

```javascript
const obj = {
  name: 'Billy',
  sing() {
    console.log('a', this) // refer to obj object
    const anotherFunc = function() {
      console.log('b', this) // refer to obj object
    }
    return anotherFunc.bind(this)
  }
}
obj.sing()()
```

```javascript
const obj = {
  name: 'Billy',
  sing() {
    console.log('a', this) // refer to obj object
    const self = this;
    const anotherFunc = function() {
      console.log('b', self)  // refer to obj object
    }
    return anotherFunc
  }
}
obj.sing()()
```

**[⬆ back to top](#table-of-contents)**

### call(), apply(), bind()

```javascript
function a() {
  console.log('hi')
}
a()
a.call()
a.apply()
```

```javascript
const wizard = {
  name: 'Merlin',
  health: 100,
  heal(num1, num2) {
    this.health += num1 + num2;
  }
}

const archer = {
  name: 'Robin Hood',
  health: 50
}

wizard.heal(10, 60)
// borrow heal method from wizard object
wizard.heal.call(archer, 50, 60)
wizard.heal.apply(archer, [20, 30])

// borrow heal method from wizard object
// call healArcher later on with archer object
const healArcher = wizard.heal.bind(archer, 50, 60);
healArcher()
```

```javascript
const array = [1,2,3];

function getMaxNumber(arr) {
  return Math.max.apply(null, arr);  
}

const getMaxNumber = arr => Math.max.apply(null, arr)

getMaxNumber(array)
```

**[⬆ back to top](#table-of-contents)**

### bind() and currying

- translates a function from callable as f(a, b, c) into callable as f(a)(b)(c)
- [Currying](https://javascript.info/currying-partials)
- [Currying: A Functional Alternative To fn.bind](https://derickbailey.com/2016/06/24/currying-a-functional-alternative-to-fn-bind/)

```javascript
function sum(a, b) {
  return a + b;
}

// curry(f) does the currying transform
function curry(f) { 
  return function(a) {
    return function(b) {
      return f(a, b);
    };
  };
}

let curriedSum = curry(sum);

curriedSum(1)(2);
```

```javascript
function multiply(a, b, c) {
  return a * b * c;
}

const multipleByTwo = multiply.bind(this, 2, 4);
console.log(multipleByTwo(4));

const multipleByThree = multiply.bind(this, 3, 5);
console.log(multipleByThree(4));
```

**[⬆ back to top](#table-of-contents)**

### Context vs Scope

- [Understanding Scope and Context in JavaScript](http://ryanmorr.com/understanding-scope-and-context-in-javascript/)
- Scope is function based
  - what is the variable access of a function when it is invoked?
  - What is in the variable environment?
  - scope refers to the visibility of variables
- Context is object based
  - what is the value of this keyword?
  - context is most often determined by how a function is invoked with the value of this keyword 

**[⬆ back to top](#table-of-contents)**

## **Section 4: Types in JavaScript**

### Javascript Types

[Standard built-in objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)

```javascript
// Primitive
typeof 5
typeof true
typeof 'To be or not to be'
typeof undefined  // absent of definition 
typeof null // absent of value
typeof Symbol('just me')

// Non-Primitive
// has a reference or pointer
typeof {}
typeof []
typeof function() {}

const obj1 = {
  a: 'Tom'
}

// function and array are objects
function a() {
  return 5;
}
a.hi = "hi"

// Object wrapper
true.toString()
Boolean(true).toString()
```

**[⬆ back to top](#table-of-contents)**

### Array.isArray()

```javascript
const array = ['1', '2', '3'];
const obj = {
  0: '1',
  1: '2',
  2: '3'
}

Array.isArray(array)
Array.isArray(obj)
```

**[⬆ back to top](#table-of-contents)**

### Pass By Value vs Pass By Reference

```javascript
// pass by value
var a = 5;
var b = a;
b++;

// pass by reference
let obj1 = { name: 'Yao', password: '123' };
let obj2 = obj1;
obj2.password = 'easy'

var c = [1, 2, 3];
var d = c;
d.push(4)

var c = [1, 2, 3];
var d = [].concat(c); // clone array
d.push(4)
```

**[⬆ back to top](#table-of-contents)**

### Exercise: Compare Objects

[Compare objects with JavaScript](https://bithacker.dev/compare-objects-javascript)

```javascript
var user1 = {name : "nerd", org: "dev", c: { d: "d" } };
var user2 = {name : "nerd", org: "dev", c: { d: "d" } };
JSON.stringify(user1) === JSON.stringify(user2) 
```

**[⬆ back to top](#table-of-contents)**

### Exercise: Pass By Reference

```javascript
const number = 100
const string = "Jay"
let obj1 = {
  value: "a"
}
let obj2 = {
  value: "b"
}
let obj3 = obj2;
 
function change(number, string, obj1, obj2) {
    number = number * 10;
    string = "Pete";
    obj1 = obj2;
    obj2.value = "c";
}
 
change(number, string, obj1, obj2);
 
//Guess the outputs here before you run the code: 
// number  100
// string  'Jay'
// obj1    { value: 'a' }
// obj2    { value: 'c' }
// obj3    { value: 'c' }
```

**[⬆ back to top](#table-of-contents)**

### Type Coercion

- [JS Comparison Table](https://dorey.github.io/JavaScript-Equality-Table/)
- [Equality comparisons and sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)
- [The Abstract Equality Comparison Algorithm](https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3)

```javascript
if(1) { // true
  console.log(5);
}
if(0) { // false
  console.log(5);
}
```

**[⬆ back to top](#table-of-contents)**

## **Section 5: The 2 Pillars: Closures and Prototypal Inheritance**

### Functions are callable Objects

```javascript
// Invoke function
function one() {
  return 1
}
one()
one.call()
one.apply()

const obj = {
  two: function() {
    return 2;
  }
}
obj.two()

const four = new Function('num', 'return num')
four(4)
```

Function

- code ()
- name (optional)
- properties: .call(), .apply(), .bind()
- pass function around like object

```javascript
function woohooo() {
  console.log('woohooo')
}

woohooo.yell = 'ahhhhhhh'
woohooo.name

// const specialObj = {
//   yell: 'ahhhhhhh',
//   name: 'woohooo',
//   (): console.log('woohooo')
// }
```

**[⬆ back to top](#table-of-contents)**

### First Class Citizens

Functions are first class citizens in JavaScript

- Function can be assigned to a variable
- Function can be passed as a paramter to another function
- Function can be returned as a value from other function

```javascript
// can be assigned to a variable
var stuff = function(){}

// pass a function as paramter to another function
function a(fn) {
  fn()
}
a(function() { console.log('hi there')})

// return function as a value from other function
function b() {
  return function c() {  { console.log('bye')} }
}
b()()
var d = b()
d()
```

**[⬆ back to top](#table-of-contents)**

### Extra Bits: Functions

- make sure function is initialize one time only
- use default parameters

```javascript
for (let i = 0; i < 5; i++){
  function a() { }  // initialize 5 times
  a()
}

function a() { }  // initialize once
for (let i = 0; i < 5; i++){
  a()
}
```

```javascript
// default parameters
function b(param = 6) { 
  return param
}
b()
```

**[⬆ back to top](#table-of-contents)**

### Higher Order Functions

- [Defining functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- function() => function(a, b) => HOF

|                    | function()          | function(a, b)      | HOF               |
| ------------------ | ------------------- | ------------------- | ----------------- |
| what data to use ? | function definition | during invocation   | during invocation |
| what to do ?       | function definition | function definition | during invocation |


```javascript
// function()
function letAdamLogin() {
  let array = [];
  for (let i = 0; i < 50000; i++) {
    array.push(i)
  }
  return 'Access Granted to Adam'
}

function letEvaLogin() {
  let array = [];
  for (let i = 0; i < 50000; i++) {
    array.push(i)
  }
  return 'Access Granted to Eva'
}
letAdamLogin()
letEvaLogin()

// function(a, b)
// function with paramter
// what data to use when function is called ?
const giveAccessTo = (name) =>
  'Access Granted to ' + name;
function letUserLogin(user) {
  let array = [];
  for (let i = 0; i < 50000; i++) {
    array.push(i)
  }
  return giveAccessTo(user)
}
function letAdminLogin(admin) {
  let array = [];
  for (let i = 0; i < 1000000; i++) {
    array.push(i)
  }
  return giveAccessTo(admin)
}
letUserLogin('Adam')
letUserLogin('Eva')

// HOF: function(a, b, fn)
// what data to use during invocation ?
// what to do during invocation ?
function authenticate(person) {
  let array = [];
  console.log(`Level: ${person.level}`)
  for (let i = 0; i < 50000; i++) {
    array.push(i)
  }
  return giveAccessTo(person.name)
}

function sing(person) {
  return `lalalala ${person.name}`
}

function letPerson(person, fn) { 
  if (person.level === 'admin') {
    return fn(person)
  } else if (person.level === 'user') {
    return fn(person)
  }
}

letPerson({ level: 'user', name: 'Tim' }, authenticate)
letPerson({ level: 'admin', name: 'Sally' }, sing)
```

```javascript
// multiplyBy is HOF
const multiplyBy = (num1) => {
  return function (num2) {
    return num1 * num2;
  }
}
const multiplyByTwo = multiplyBy(2);
multiplyByTwo(4)

// multiplyBy1 is HOF
const multiplyBy1 = num1 => num2 => num1 * num2;
multiplyBy1(2)(4)
```

**[⬆ back to top](#table-of-contents)**

### Closures

A closure is a function that has access to its outer scope that it is defined
- closure = function() + lexical scope (outer function scope)

```javascript
function a() {
  let grandpa = 'grandpa'
  return function b() {
    let father = 'father'
    return function c() {
      let son = 'son'
      return `${grandpa} > ${father} > ${son}`
    }
  }
}

a()()()
```

```javascript
//closures and higher order function
function boo(string) {
  return function(name) {
    return function(name2) {
      console.log(`${string} ${name} ${name2}`)
    }
  }
}

const boo2 = (string) => (name) => (name2) => console.log(`${string} ${name} ${name2}`)

boo('hi')('john')('tanya');
boo2('hi')('john')('tanya');

const booString = boo2('sing');
const booStringName = booString('John');
const booStringNameName2 = booStringName('tanya')
```

```javascript
function callMeMaybe() {
  setTimeout(function() {
    console.log(callMe);
  }, 4000);
  const callMe = 'Hi!';
}

callMeMaybe();
```

**[⬆ back to top](#table-of-contents)**

### Closures and Memory

```javascript
// create bigArray everytime heavyDuty is executed
function heavyDuty(item) {
  const bigArray = new Array(7000).fill('😄')
  console.log('created!');
  return bigArray[item]
}

heavyDuty(699)
heavyDuty(699)
heavyDuty(699)
```

```javascript
// Memory efficient
// create bigArray once with closure
function heavyDuty2() {
  const bigArray = new Array(7000).fill('😄')
  console.log('created Once!')
  return function(item) {
    return bigArray[item]
  }
}
const getHeavyDuty = heavyDuty2();
getHeavyDuty(699)
getHeavyDuty(699)
getHeavyDuty(699)
```

**[⬆ back to top](#table-of-contents)**

### Closures and Encapsulation

```javascript
// closure hide passTime and launch functions
const makeNuclearButton = () => {
  let timeWithoutDestruction = 0;
  const passTime = () => timeWithoutDestruction++;
  const totalPeaceTime = () => timeWithoutDestruction;
  const launch = () => {
    timeWithoutDestruction = -1;
    return '💥';
  }
  setInterval(passTime, 1000);
  return { totalPeaceTime }
}

const ww3 = makeNuclearButton();
ww3.totalPeaceTime();
```

**[⬆ back to top](#table-of-contents)**

### Closures Exercises and Solutions

```javascript
// Exercise
let view;
function initialize() {
  view = '🏔';
  console.log('view has been set!')
}

initialize();
initialize();
initialize();
view
```

```javascript
// Solution
let view;
function initialize() {
  let called = 0;
  const startOnce = () => {
    if (called > 0) {
      return
    } else {
      view = '🏔';
      called++;
      console.log('view has been set!')
    }
  }
  return { startOnce };
}

const app = initialize();
app.startOnce();
app.startOnce();
app.startOnce();
view
```

```javascript
// Exercise
const array = [1,2,3,4];
for(var i=0; i < array.length; i++) {
  setTimeout(function() {
    console.log('I am at index ' + i)
  }, 3000)
}
```

```javascript
// Solution 1
const array = [1,2,3,4];
for(let i=0; i < array.length; i++) {
  setTimeout(function() {
    console.log('I am at index ' + i)
  }, 3000)
}
```

```javascript
// Solution 2
const array = [1,2,3,4];
for(var i=0; i < array.length; i++) {
  (function(index) {
    setTimeout(function() {
      console.log('I am at index ' + index)
    }, 3000)
  })(i)
}
```

**[⬆ back to top](#table-of-contents)**

### Prototypal Inheritance

```javascript
const array = []
array.__proto__ // Array []
array.__proto__.__proto__ // Object {}


function a() {}
a.__proto__ // Function ()
a.__proto__.__proto__ // Object {}

const obj1 = {}
obj1.__proto__  // Object {}
obj1.__proto__.__proto__  // null
```

**[⬆ back to top](#table-of-contents)**

### Inherit the properties of parent object

```javascript
let dragon = {
  name: 'Tanya',
  fire: true,
  fight() {
    return 5
  },
  sing() {
    if (this.fire) {
      return `I am ${this.name}, the breather of fire`
    }
  }
}

let lizard = {
  name: 'Kiki',
  fight() {
    return 1
  }
}

// lizard inherit the properties of dragon
// only need memory for one instance of sing() method
lizard.__proto__ = dragon;
lizard.sing()
lizard.fire
lizard.fight()

dragon.__proto__
dragon.isPrototypeOf(lizard);

// list all proprties of lizard
for(let prop in lizard) {
  if(lizard.hasOwnProperty(prop)) {
    console.log(`lizard: ${prop}`) 
  }
  else console.log(`dragon: ${prop}`) 
}
```

**[⬆ back to top](#table-of-contents)**

### Check proprties

```javascript
// __proto__: pointer to parent prototype object
const obj = { name: 'Sally' }
obj.hasOwnProperty('name')
obj.__proto__.hasOwnProperty('hasOwnProperty')
Object.prototype.hasOwnProperty('hasOwnProperty')

function a() {}
a.hasOwnProperty('name')
a.prototype
a.__proto__.hasOwnProperty('call')
a.__proto__.hasOwnProperty('apply')
a.__proto__.hasOwnProperty('bind')
Function.prototype.hasOwnProperty('call')
Function.prototype.hasOwnProperty('apply')
Function.prototype.hasOwnProperty('bind')
```

**[⬆ back to top](#table-of-contents)**

### Create our own prototypes

```javascript
var human = { mortal: true }
var socrates = Object.create(human);
socrates.age = 70
human.isPrototypeOf(socrates);
socrates.hasOwnProperty('age')
socrates.__proto__.hasOwnProperty('mortal')
```

**[⬆ back to top](#table-of-contents)**

### Only functions has prototype property

```javascript
function multiply5(num) {
  return num * 5;
}
multiply5.prototype
multiply5.__proto__  // Function
Function.prototype  // Function
multiply5.__proto__.__proto__  // Object
Object.prototype  // Object
multiply5.__proto__.__proto__.__proto__  // null
```

**[⬆ back to top](#table-of-contents)**

### Exercise - extend the functionality of a built in object

```javascript
// Date object => to have new method .lastYear() which shows you last year 'YYYY' format.
Date.prototype.lastYear = function() {
  return this.getFullYear() - 1;
}
new Date('1900-10-10').lastYear() //'1899'
```

```javascript
// Mofify .map() to print '🗺' at the end of each item.
Array.prototype.map = function() {
  let arr = [];
  for(let i = 0; i < this.length; i++ ){
    arr.push(`${this[i]}🗺`)
  }
  return arr;
}
console.log([1,2,3].map())  //1🗺, 2🗺, 3🗺
```

**[⬆ back to top](#table-of-contents)**

### Prototypal Inheritance with this

```javascript
Function.prototype.bind = function(whoIsCallingMe) {
  const self = this;
  return function() {
    return self.apply(whoIsCallingMe, arguments);
  };
}
```
**[⬆ back to top](#table-of-contents)**

### Section Review

- [The Scheme Programming Language](https://www.scheme.com/tspl4/)
- [Java](https://www.java.com/en/)
- [Brendan Eich on Creating JavaScript in 10 Days, and What He’d Do Differently Today](https://thenewstack.io/brendan-eich-on-creating-javascript-in-10-days-and-what-hed-do-differently-today/)

**[⬆ back to top](#table-of-contents)**

## **Section 6: Object Oriented Programming**

### Section Overview

Programming paradigms
- Clear + Understandable
- Easy to Extend
- Easy to Maintain
- Memory Efficient
- DRY

[History of programming languages](https://en.wikipedia.org/wiki/History_of_programming_languages)

- Procedure programming
- object oriented programming
- Functional programming

**[⬆ back to top](#table-of-contents)**

### OOP and FP

Data and behavior

| Scheme    | Java    |
| --------- | ------- |
| Functions | Objects |
| FP        | OOP     |

**[⬆ back to top](#table-of-contents)**

### OOP Introduction

Object oriented programming is all about modeling real world objects and relationships.

**[⬆ back to top](#table-of-contents)**

### OOP1: Factory Functions

```javascript
// each elf object has a copy of attack method
function createElf(name, weapon) {
  return {
    name: name,
    weapon: weapon,
    attack() {
      return `${name} attacks with ${weapon}`
    }
  }
}
const sam = createElf('Sam', 'stones');
const peter = createElf('Peter', 'fire');

sam.attack()
peter.attack()
```

**[⬆ back to top](#table-of-contents)**

### OOP2: Object.create()

```javascript
// all elf object access to shared copy of elfFunctions via __proto__ pointer
const elfFunctions = {
  attack: function() {
    return `${this.name} attacks with ${this.weapon}`
  }
}
function createElf(name, weapon) {
  const newElf = Object.create(elfFunctions)
  console.log(newElf.__proto__)
  newElf.name = name;
  newElf.weapon = weapon
  return newElf
}

const sam = createElf('Sam', 'stones');
const peter = createElf('Peter', 'fire');

sam.attack()
peter.attack()
```

**[⬆ back to top](#table-of-contents)**

### OOP3: Constructor Functions

```javascript
function Elf(name, weapon) {
  this.name = name;
  this.weapon = weapon;
}

Elf.prototype.attack = function() { 
  return `${this.name} attacks with ${this.weapon}`
}

const sam = new Elf('Sam', 'stones');
const peter = new Elf('Peter', 'fire');

sam.attack()
peter.attack()
```

**[⬆ back to top](#table-of-contents)**

### OOP4: ES6 Classes

```javascript
class Elf {
  // run constructor with new keyword
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  // shared attack method by all objects
  attack() {
    return `${this.name} attacks with ${this.weapon}`
  }
}

const sam = new Elf('Sam', 'stones');
const peter = new Elf('Peter', 'fire');

sam.attack()
peter.attack()
```

**[⬆ back to top](#table-of-contents)**

### this - 4 Ways

```javascript
// new binding
function Person(name, age) {
  this.name = name;
  this.age =age;
  console.log(this);
}

const person1 = new Person('Xavier', 55)
```

```javascript
//implicit binding
const person = {
  name: 'Karen',
  age: 40,
  hi() {
    console.log('hi' + this.name)
  }
}

person.hi()
```

```javascript
//explicit binding
const person3 = {
  name: 'Karen',
  age: 40,
  hi: function() {
    console.log('hi' + this.setTimeout)
  }.bind(window)
}

person3.hi()
```

```javascript
// arrow functions
const person4 = {
  name: 'Karen',
  age: 40,
  hi: function() {
    var inner = () => {
      console.log('hi ' + this.name)
    }
    return inner()
  }
}

person4.hi()
```

**[⬆ back to top](#table-of-contents)**

### Inheritance

```javascript
class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return `${this.name} attacks with ${this.weapon}`
  }
}

class Elf extends Character { 
  constructor(name, weapon, type) {
    // console.log('what am i?', this); this gives an error
    super(name, weapon) 
    console.log('what am i?', this);
    this.type = type;
  }
}

class Ogre extends Character {
  constructor(name, weapon, color) {
    super(name, weapon);
    this.color = color;
  }
  makeFort() { // this is like extending our prototype.
    return 'strongest fort in the world made'
  }
}

const houseElf = new Elf('Dolby', 'cloth', 'house')
houseElf.makeFort() // error
const shrek = new Ogre('Shrek', 'club', 'green')
shrek.makeFort()
```

**[⬆ back to top](#table-of-contents)**

### Public vs Private

[JavaScript’s New Private Class Fields, and How to Use Them](https://www.sitepoint.com/javascript-private-class-fields/)

**[⬆ back to top](#table-of-contents)**

### 4 Pillars of OOP

- Encapsulation: wrap data and code into objects
- Abstraction: hide the complexity in classes
- Inheritance
- Polymorphism: call the same methods on different objects with different responses

**[⬆ back to top](#table-of-contents)**

### Exercise: OOP and Polymorphism

```javascript
class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return 'atack with ' + this.weapon
  }
}

class Queen extends Character { 
  constructor(name, weapon, kind) {
    super(name, weapon) 
    this.kind = kind;
  }
  attack() {
    console.log(super.attack());
    return `I am the ${this.name} of ${this.kind}, now bow down to me! `
  }
}

const victoria = new Queen('Victoria', 'army', 'hearts');
victoria.attack()
```

**[⬆ back to top](#table-of-contents)**

## **Section 7: Functional Programming**

### Functional Programming Introduction

- [Functional Programming - Lambda Calculus](https://www.tutorialspoint.com/functional_programming/functional_programming_lambda_calculus.htm)
- Separate between data over a program and the behavior of a program
- All objects created in functional programming are immutable
- Pure functions

**[⬆ back to top](#table-of-contents)**

### Exercise: Amazon shopping

```javascript
const user = {
  name: 'Kim',
  active: true,
  cart: [],
  purchases: []
}

//Implement a cart feature:
// 1. Add items to cart.
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart

//Bonus:
// accept refunds.
// Track user history.
```

**[⬆ back to top](#table-of-contents)**

### Pure Functions

- no side effect
- no mutation
- same input -> same output
- map and concat methods can fix this issue of mutation
- [Referential Transparency](https://www.sitepoint.com/what-is-referential-transparency)

```javascript
// Side effects
// mutateArray modifies array outside of itself
// mutateArray2 modifies array outside of itself
const array = [1,2,3];

function mutateArray(arr) {
  arr.pop()
}

function mutateArray2(arr) {
  arr.forEach(item => arr.push(1
  ))
}

array
mutateArray(array)
mutateArray2(array)
array
```

```javascript
// No side effects
const array = [1,2,3];
function mutateArray(arr) {
  const newArray = [].concat(arr);
  newArray.pop()
  return newArray;
}
function mutateArray2(arr) {
  const newArray = [].concat(arr);
  newArray.forEach(item => newArray.push(1
  ))
  return newArray;
}
function mutateArray3(arr) {
  return arr.map(item => item * 2)
}

array
mutateArray(array)
mutateArray2(array)
mutateArray3(array)
array
```

**[⬆ back to top](#table-of-contents)**

### Can Everything Be Pure?

Functional programming at the end of the day is just about making your code predictable

The Perfect Function 

- Do 1 task only
- Return Statement
- Pure
- No shared state
- Immutable state
- Composable
- Predictable

**[⬆ back to top](#table-of-contents)**

### Idempotent

- Idempotence is a property of some operations such that no matter how many times you execute them, you achieve the same result

```javascript
function notGood(num) {
  return Math.random(num)
}

// Idempotence
function good() {
  return 5
}

Math.abs(Math.abs(10))
```

**[⬆ back to top](#table-of-contents)**

### Imperative vs Declarative

- [Imperative versus declarative code… what’s the difference?](https://medium.com/front-end-weekly/imperative-versus-declarative-code-whats-the-difference-adc7dd6c8380)
- [Imperative vs. Declarative Programming (in 60 seconds)](https://www.youtube.com/watch?v=JqvMTwnbhnA)
- Imperative: How?
- Declarative: What?

```javascript
// Imperative
for (let i = 0; i < 3, i++) {
  console.log(i)
}
```

```javascript
// Declarative
[1, 2, 3].forEach(item => console.log(item))
```

**[⬆ back to top](#table-of-contents)**

### Immutability

[Immutable.js, persistent data structures and structural sharing](https://medium.com/@dtinth/immutable-js-persistent-data-structures-and-structural-sharing-6d163fbd73d2)

```javascript
const obj = { name: 'Andrei' }
function clone(obj) {
  return { ...obj }; // this is pure
}

function updateName(obj) {
  const obj2 = clone(obj);
  obj2.name = 'Nana'
  return obj2
}

const updatedObj = updateName(obj)
```

**[⬆ back to top](#table-of-contents)**

### Higher Order Functions and Closures

```javascript
//HOF
const hof = (fn) => fn(5);
hof(function a(x) { return x} )

//Closure and HOF
const closure = function() {
  let count = 55;
  return function getCounter() {
    return count;
  }
}

const getCounter = closure()
getCounter()
```

**[⬆ back to top](#table-of-contents)**

### Currying

```javascript
const multiply = (a, b) => a * b
const curriedMultiply = a => b => a * b
curriedMultiply(5)(3);

const curriedMultiplyBy5 = curriedMultiply(5);
curriedMultiplyBy5(3)
```

**[⬆ back to top](#table-of-contents)**

### Partial Application

```javascript
const multiply = (a, b, c) => a * b * c
const curriedMultiply = a => b => c => a * b * c
curriedMultiply(5)(4)(10)
```

```javascript
const multiply = (a, b, c) => a * b * c
const partialMultiplyBy5 = multiply.bind(null, 5)
partialMultiplyBy5(4, 10)
```

**[⬆ back to top](#table-of-contents)**

### Compose and Pipe

- [compose](https://ramdajs.com/docs/#compose)
- [pipe](https://ramdajs.com/docs/#pipe)

```javascript
// compose(fn1, fn2, fn3)(50)
// right to lext
// data -> fn3 -> data -> fn2 -> data -> fn1 -> data
const compose = (f, g) => a => f(g(a));
const multiplyBy3 = num => num * 3;
const Add10 = num => num + 10;
const multiplyBy3AndAbsolute = compose(multiplyBy3, Add10);
multiplyBy3AndAbsolute(-50)

// pipe(fn1, fn2, fn3)(50) 
// left to right
// data -> fn1 -> data -> fn2 -> data -> fn3 -> data
const pipe = (f, g) => (a) => g(f(a));
const multiplyBy3AndAbsolute2 = pipe(multiplyBy3, Add10);
multiplyBy3AndAbsolute2(-50)
```

**[⬆ back to top](#table-of-contents)**

### Arity

Arity of a function (or operation) describes the number of arguments that the function (or operation) takes

- [Function arity](https://medium.com/@igorwojda/function-arity-4be140702f1d)
- arity: 1 to 2 is preferred

**[⬆ back to top](#table-of-contents)**

### Solution: Amazon

```javascript
const user = {
  name: 'Kim',
  active: true,
  cart: [],
  purchases: []
}
const history1 = [];
const compose = (f, g) => (...args) => f(g(...args))
const pipe = (f, g) => (...args) => g(f(...args))
const purchaseItem  = (...fns) => fns.reduce(compose);
const purchaseItem2  = (...fns) => fns.reduce(pipe);

function addItemToCart(user, item) {
  history1.push(user)
  const updatedCart = user.cart.concat(item)
  return Object.assign({}, user, { cart: updatedCart });
}

function applyTaxToItems(user) {
  history1.push(user)
  const { cart } = user;
  const taxRate = 1.3;
  const updatedCart = cart.map(item => ({
    name: item.name,
    price: item.price * taxRate
  }))
  return Object.assign({}, user, { cart: updatedCart });
}

function buyItem(user) {
  history1.push(user)
  const itemsInCart = user.cart;
  return Object.assign({}, user, { purchases: itemsInCart });
}

function emptyUserCart(user) {
  history1.push(user)
  return Object.assign({}, user, { cart: [] });
}
history1
purchaseItem2(
  addItemToCart,
  applyTaxToItems,
  buyItem,
  emptyUserCart,
)(user, { name: 'laptop', price: 60 })
history1

function refundItem() {

}

function getUserState() {

}

function goBack() {

}

function goForward() {

}
```

**[⬆ back to top](#table-of-contents)**

## **Section 8: OOP vs FP**

### Composition vs Inheritance

- Inheritance: a superclass that is extended to smaller pieces that add or overwrite things
- Composition: smaller pieces that are combined to create something bigger

**[⬆ back to top](#table-of-contents)**

### OOP vs FP

| FP                            | OOP                           |
| ----------------------------- | ----------------------------- |
| many operations on fixed data | few operations on common data |
| stateless                     | stateful                      |
| pure                          | side effect                   |
| declarative                   | imperative                    |

**[⬆ back to top](#table-of-contents)**

## **Section 9: Asynchronous JavaScript**

### Job Queue

- Job Queue has high priority than Callback Queue
- [Understanding Event Loop, Call Stack, Event & Job Queue in Javascript](https://medium.com/@Rahulx1/understanding-event-loop-call-stack-event-job-queue-in-javascript-63dcd2c71ecd)

```javascript
// Callback Queue - Task Queue
setTimeout(() => { console.log('1', 'is the loneliest number') }, 0)
setTimeout(() => { console.log('2', 'can be as bad as one') }, 10)

// Job Queue - Microtask Queue
Promise.resolve('hi').then( data => console.log('2', data))

console.log('3','is a crowd')
```

**[⬆ back to top](#table-of-contents)**

### Parallel, Sequence and Race

[Promises for asynchronous programming](https://exploringjs.com/impatient-js/ch_promises.html#promise.allsettled-es2020-1)

```javascript
const promisify = (item, delay) =>
  new Promise((resolve) =>
    setTimeout(() =>
      resolve(item), delay));

const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);

async function parallel() {
  const promises = [a(), b(), c()];
  const [output1, output2, output3] = await Promise.all(promises);
  return `prallel is done: ${output1} ${output2} ${output3}`
}

async function race() {
  const promises = [a(), b(), c()];
  const output1 = await Promise.race(promises);
  return `race is done: ${output1}`;
}

async function sequence() {
  const output1 = await a();
  const output2 = await b();
  const output3 = await c();
  return `sequence is done ${output1} ${output2} ${output3}`
}

sequence().then(console.log)
parallel().then(console.log)
race().then(console.log)
```

**[⬆ back to top](#table-of-contents)**

### Threads, Concurrency and Parallelism

- [Concurrency vs Parallelism](https://www.codeproject.com/Articles/1267757/Concurrency-vs-Parallelism)
- [A gentle introduction to multithreading](https://www.internalpointers.com/post/gentle-introduction-multithreading)
- [Using Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Scaling Node.js Applications](https://www.freecodecamp.org/news/scaling-node-js-applications-8492bd8afadc/)

**[⬆ back to top](#table-of-contents)**

## **Section 10: Modules In JavaScript**

### What Is A Module?

[Modules, introduction](https://javascript.info/modules-intro)

**[⬆ back to top](#table-of-contents)**

### Module Pattern

[JavaScript Module Pattern Basics](https://coryrylan.com/blog/javascript-module-pattern-basics)

- global scope
- module scope
- function scope
- block scope - let and const

```javascript
// IIFE
// Module Pattern
var fightModule = (function() {
  var harry = 'potter'
  var voldemort = 'He who must not be named'

  function fight(char1, char2) {
    var attack1 = Math.floor(Math.random() * char1.length);
    var attack2 = Math.floor(Math.random() * char2.length);
    return attack1 > attack2 ? `${char1} wins` : `${char2} wins`
  }
  return { fight }
})()

fightModule.fight('harry', 'voldemort')
```

**[⬆ back to top](#table-of-contents)**

### Module Pattern Pros and Cons

[JavaScript Module Pattern](https://vegibit.com/javascript-module-pattern/)

**[⬆ back to top](#table-of-contents)**

### CommonJS, AMD, UMD

- [What are CJS, AMD, UMD, and ESM in Javascript?](https://dev.to/iggredible/what-the-heck-are-cjs-amd-umd-and-esm-ikm)
- [Browserify](http://browserify.org/)

**[⬆ back to top](#table-of-contents)**

### ES6 Modules

- [export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
- [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)

**[⬆ back to top](#table-of-contents)**

## **Section 11: Error Handling**

### Errors In JavaScript

Call Stack

- ERROR!
- Is there a catch?
- Is there a catch?


- Runtime catch: onerror() - browser
- process.on('uncaughtException') - Node JS 

```javascript
throw 'Error2';   // String type
throw 42;         // Number type
throw true;       // Boolean type
throw Error
throw new Error // will create an instance of an Error in JavaScript and stop the execution of your script. 

function a() {
  const b =  new Error('what?')
  return b
}

a().stack

let error = new Error(message);
let error2 = new SyntaxError(message);
let error3 = new ReferenceError(message);
```

**[⬆ back to top](#table-of-contents)**

### Try Catch

```javascript
function fail() {
  try {
    console.log('this works');
    throw new Error('oopsie');
  } catch(e) {
    console.log('error', e);
  } finally {
    console.log('still good');
    return 'returning from fail';
  }
  console.log('never going to get here'); // not reachable
}
fail();
```

**[⬆ back to top](#table-of-contents)**

### Async Error Handling

```javascript
Promise.resolve('asyncfail')
  .then(response => {
    console.log(response)
    throw new Error('#1 fail')
  })
  .then(response => {
    console.log(response)
  })
  .catch(err => {
    console.error('error', err.message)
  })
  .then(response => {
    console.log('hi am I still needed?', response)
    return 'done'
  })
  .catch(err => {
    console.error(err)
    return 'failed'
  })
```

```javascript
(async function() {
  try {
    await Promise.reject('oopsie')
  } catch (err) {
    console.error(err)
  }

  console.log('This is still good!')
})()
```

**[⬆ back to top](#table-of-contents)**

### Exercise: Error Handling

```javascript
(function () {
  try {
    throw new Error();
  } catch (err) {
    var err = 5;
    var boo = 10;
    console.log(err);
  }
  //Guess what the output is here:
  console.log(err);
  console.log(boo);
})();
```

**[⬆ back to top](#table-of-contents)**

### Extending Errors

```javascript
class authenticationError extends Error {
  constructor(message) {
    super(message)
    this.name = 'ValidationError'
    this.message = message
  }
}
class PermissionError extends Error {
  constructor(message) {
    super(message)
    this.name = 'PermissionError'
    this.message = message
    this.favouriteSnack = 'grapes'
  }
}
class DatabaseError extends Error {
  constructor(message) {
    super(message)
    this.name = 'DatabaseError'
    this.message = message
  }
}

throw new PermissionError('A permission error')
```

**[⬆ back to top](#table-of-contents)**
