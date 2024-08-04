let arr = [1, 2, 3, 4]
//let sum = 0




function sum (a=0, b = 0)
{
  return console.log(a + b)
}

sum(4,9)

function makeCounter(){
  let count = 0
  return function (){
    return console.log(++count)
  }
}
const counter = makeCounter()
let count = 5
console.log(count)
counter()
counter()


const person = {
  name: 'bobr',
  lastName: 'xxl',
  fun(){
    console.log(this.name + " " + this.lastName)
  }
}
person.fun()

const arrowFunc = () => {
  console.log(arguments); // ReferenceError: arguments is not defined
};

function regularFunc() {
  const arrowFuncInside = () => {
    console.log(arguments); // Logs the arguments of regularFunc
  };
  arrowFuncInside();
}

regularFunc(1, 2, 3); // Logs: [1, 2, 3]

function exampleFunction(a, b, ...rest) {
  console.log(a); // First parameter
  console.log(b); // Second parameter
  console.log(rest); // Array of remaining parameters
}

exampleFunction(1, 2, 3, 4, 5);

def recurse(x):
if x > 0:
print(x)
recurse(x - 1)

recurse(10)

