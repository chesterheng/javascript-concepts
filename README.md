# JavaScript: The Advanced Concepts

## Table of Contents

- [JavaScript: The Advanced Concepts](#javascript-the-advanced-concepts)
  - [Table of Contents](#table-of-contents)
  - [**Section 2: JavaScript Foundation**](#section-2-javascript-foundation)
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

Memoization is a way to cache a return value of a funcBon based on its parameters. This makes the funcBon that takes a long Bme run much faster aoer one execuBon. If the parameter changes, it will sBll have to reevaluate the funcBon.

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

**[⬆ back to top](#table-of-contents)**

### Advanced JavaScript Cheatsheet

- [JavaScript Cheat Sheet: The Advanced Concepts](https://zerotomastery.io/courses/advanced-javascript/cheatsheet/)
- [JavaScript Cheat Sheet: The Advanced Concepts PDF](ztm-javascript-cheatsheet.pdf)

**[⬆ back to top](#table-of-contents)**