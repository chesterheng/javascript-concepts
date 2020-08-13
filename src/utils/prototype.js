const dragon = {
  name: "Tanya",
  fire: true,
  fight() {
    return 5;
  },
  sing() {
    if (this.fire) {
      return `I am ${this.name}, the breather of fire`;
    }
  },
};

const lizard = {
  name: "Kiki",
  fight() {
    return 1;
  },
};

lizard.__proto__ = dragon;
console.log(lizard.fire);
console.log(lizard.sing());
console.log(lizard.fight());

console.log(dragon.__proto__);
// dragon is a prototype of lizard
console.log(dragon.isPrototypeOf(lizard));

for (let prop in lizard) {
  if (lizard.hasOwnProperty(prop)) {
    console.log(`lizard: ${prop}`);
  } else {
    console.log(`dragon: ${prop}`);
  }
}

for (let prop in lizard) {
  // ES2022
  if (Object.hasOwn(lizard, prop)) {
    console.log(`lizard: ${prop}`);
  } else {
    console.log(`dragon: ${prop}`);
  }
}
