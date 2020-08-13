function Person(name, age) {
  this.name = name;
  this.age = age;
  console.log(this);
}

// new binding
const person1 = new Person("Jane", 18);

// implicit binding
const person2 = {
  name: "Mary",
  age: 20,
  hi() {
    console.log(`hello ${this.name}`);
  },
};

person2.hi();

