// Run a Function with an Object
const obj = { num: 2 };
function sum(a, b) {
  return this.num + a + b;
}

const resultCall = sum.call(obj, 1, 2);
const resultApply = sum.apply(obj, [1, 2]);
// Create Bound Functions with Bind()
const functBind = sum.bind(obj, 1, 2);
const resultBind = functBind();
console.log(resultCall, resultApply, resultBind);

// Chain Object Constructors
function Item(name, price) {
  this.name = name;
  this.price = price;
  this.description = `${this.name}, ${this.price}`;
}

function FruitCall(name, price) {
  Item.call(this, name, price);
}

function FruitApply(name, price) {
  Item.apply(this, [name, price]);
}

const bananaCall = new FruitCall("Banana", 1);
const bananaApply = new FruitApply("Banana", 1);
console.log(bananaCall, bananaApply);

// One object can use the method of another object
const wizard = {
  name: "Merlin",
  health: 100,
  heal(num1, num2) {
    this.health += num1 + num2;
  },
};

const archer = {
  name: "Robin Hood",
  health: 50,
};

wizard.heal.call(archer, 50, 60);
console.log(archer);
wizard.heal.apply(archer, [20, 30]);
console.log(archer);
const archerHealthFunct = wizard.heal.bind(archer, 50, 60);
const archerHealthBind = archerHealthFunct();
console.log(archer);
