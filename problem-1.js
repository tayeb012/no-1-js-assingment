// Problem 1
// Number return function
function cubeNumber(number) {
  if (typeof number === 'number') {
    const result = number ** 3;
    return result;
  }
  else{
    return "It should be number"
  }
}
console.log(cubeNumber(5));
console.log(cubeNumber("Tanvir"));


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

// let arrayNumbers = ;
console.log(sortMaker([3, 5]));
console.log(sortMaker([8, 3]));
console.log(sortMaker([6, 6]));
console.log(sortMaker([7, -2]));


