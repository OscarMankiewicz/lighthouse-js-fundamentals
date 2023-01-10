//function that say Hello to multiple people
const sayHello = function (name) {
  console.log("Hello, " + name);
}

sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");

//function where output is shown in console right away
const sayHelloToConsole = function (name) {
  console.log("Hello, " + name);
}

sayHelloToConsole('John');

//return function where the variable must be called to be shown in console
const returnSayHello = function (name) {
  return "Hello, " + name;
}

const greeting = returnSayHello('John');
console.log(greeting);