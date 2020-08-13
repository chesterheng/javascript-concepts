function familyTreeFunction() {
  const grandpa = "grandpa";
  return function () {
    const father = "father";
    return function () {
      const son = "son";
      console.log(`Function: ${grandpa} > ${father} > ${son}`);
    };
  };
}

const familyTreeArrowFunction = () => {
  const grandpa = "grandpa";
  return () => {
    const father = "father";
    return () => {
      const son = "son";
      console.log(`Arrow Function: ${grandpa} > ${father} > ${son}`);
    };
  };
};

familyTreeFunction()()();
familyTreeArrowFunction()()();

function greetingFunction(message) {
  return function (firstName) {
    return function (lastName) {
      console.log(`${message} ${firstName} ${lastName}`);
    };
  };
}

const greetingArrowFunction = (message) => (firstName) => (lastName) =>
  console.log(`${message} ${firstName} ${lastName}`);

greetingFunction("Hi")("Jan")("Tan");
greetingArrowFunction("Hi")("Jan")("Tan");

// Memory efficient
function memoryEfficient() {
  const bigArray = new Array(7000).fill("😄");
  console.log("Created once");
  return function (index) {
    return bigArray[index];
  };
}

const getBigArray = memoryEfficient();
console.log(getBigArray(699));
console.log(getBigArray(699));
console.log(getBigArray(699));

// Encapsulation
function encapsulation(initialCount = 0, step = 1) {
  let privateCount = initialCount;
  function increment() {
    privateCount = privateCount + step;
  }
  function decrement() {
    privateCount = privateCount - step;
  }
  function getCount() {
    return privateCount;
  }
  return {
    increment,
    decrement,
    getCount,
  };
}

const counter = encapsulation();
console.log(counter.getCount());
counter.increment();
console.log(counter.getCount());
counter.decrement();
console.log(counter.getCount());

function useState(initialState) {
  let state = initialState;
  return [
    // why is the state value a function? No re-render in vanilla JavaScript like in React.
    // if you just use the value (no function), then change it with the setter function(setState) and then the log value, it will reference a "stale" value (stale closure) -> the initial value not the changed value
    () => state,
    (newState) => {
      state = newState;
    },
  ];
}

const [name, setName] = useState("");
console.log(`name: ${name()}`);
setName("Tom");
console.log(`name: ${name()}`);

// Memoization
function memorizedAddTo80() {
  const cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      cache[n] = n + 80;
      return cache[n];
    }
  };
}

const memorized = memorizedAddTo80();
memorized(5);
memorized(5);
memorized(10);
