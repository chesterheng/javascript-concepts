// Module Design Pattern
(function() {
  // declare private variables and/or functions

  return {
      // declare public variables and/or functions
  }
})();

const result = (function sum(a,b) {
  return a + b;
})(1,2);

console.log(result);

const obj = (function () {
  const sum = (a,b) => {
    return a + b;
  }
  return {
    sum
  }
})();

console.log(obj.sum(2,3));

const moduleDesignPattern = (function () {
  let privateVar = 1;
  let publicVar = 12345;

  function privateMethod() {
    console.log(privateVar);
  }

  function publicMethod() {
    publicVar += 1;
    console.log(publicVar);
  }

  return {
    publicMethod,
    publicVar,
    alterPrivateVarWithPublicMethod() {
      privateVar += 2;
      console.log(privateVar);
      return privateVar;
    },
  };
})();

console.log(moduleDesignPattern.publicVar); // 12345
moduleDesignPattern.alterPrivateVarWithPublicMethod(); // 3
moduleDesignPattern.publicMethod(); // 12346
moduleDesignPattern.alterPrivateVarWithPublicMethod(); // 5
console.log(moduleDesignPattern.privateVar); // undefined
// myModule.privateMethod();