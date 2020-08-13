function multipleBy(a) {
  return function (b) {
    return a * b;
  };
}

const multipleByTwo = multipleBy(2);
console.log(multipleByTwo(10));
console.log(multipleByTwo(20));
