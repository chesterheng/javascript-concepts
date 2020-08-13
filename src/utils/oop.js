// Factory Functions
// function createElf(name, weapon) {
//   return {
//     name,
//     weapon,
//     attack() {
//       console.log(`${this.name} attacks with ${this.weapon}`);
//     },
//   };
// }

// Object.create
// const elfFunction = {
//   attack() {
//     console.log(`${this.name} attacks with ${this.weapon}`);
//   },
// };

// function createElf(name, weapon) {
//   const newElf = Object.create(elfFunction);
//   newElf.name = name;
//   newElf.weapon = weapon;
//   return newElf;
// }

// const sam = createElf("Sam", "stones");
// const peter = createElf("Peter", "fire");
// sam.attack();
// peter.attack();

// Constructor Functions
// function Elf(name, weapon) {
//   this.name = name;
//   this.weapon = weapon;
//   this.attack = function () {
//     console.log(`${this.name} attacks with ${this.weapon}`);
//   };
// }

// ES6 Classes
class Elf {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    console.log(`${this.name} attacks with ${this.weapon}`);
  }
}

const sam = new Elf("Sam", "stones");
const peter = new Elf("Peter", "fire");
sam.attack();
peter.attack();
