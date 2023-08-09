// Problem 1
// Number return function
function cubeNumber(number) {
  const result = number ** 3;
  return result;
}
console.log(cubeNumber(5));

// string return function
function cubeNumber(text) {
  return text;
}
console.log(cubeNumber("Allah, please give me, that i really need"));

// problem 2
function matchFinder(string1, string2) {
  if (typeof string1 === "string" && typeof string2 === "string") {
    return true;
  } else {
    console.log("this two parameter should be string ");
  }

  if (string1.includes(string2)) {
    return true;
  } else {
    return false;
  }
}

console.log(matchFinder("John Doe", "ohn"));
console.log(matchFinder("JavaScript", "Code"));


// // problem 3
function sortMaker(arr) {
  const firstNumber = arr[0];
  const secondNumber = arr[1];
  let arranged = [];

  if (firstNumber < secondNumber) {
    arranged.push(secondNumber, firstNumber);
  } else if (firstNumber === secondNumber) {
    arranged.push("equal");
  } else if (firstNumber < 0 || secondNumber < 0) {
    arranged.push("Invalid Input");
  } else {
    arranged.push(firstNumber, secondNumber);
  }

  return arranged;
}

let arrayNumbers = [3, 5];
console.log(sortMaker(arrayNumbers));


// git remote add origin https://github.com/tayeb012/no-1-js-assingment.git
