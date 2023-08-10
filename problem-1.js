function cubeNumber(number) {
  if (typeof number === "number") {
    const result = number ** 3;
    return result;
  } else {
    return "It should be number";
  }
}

function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "This two parameter should be string";
  }

  if (string1.includes(string2)) {
    return true;
  } else {
    return false;
  }
}

function sortMaker(arr) {
  if (!Array.isArray(arr)) {
    return "Invalid Input";
  }
  const firstNumber = arr[0];
  const secondNumber = arr[1];

  if (firstNumber < secondNumber) {
    return [secondNumber, firstNumber];
  } else if (firstNumber === secondNumber) {
    return "equal";
  } else if (firstNumber < 0 || secondNumber < 0) {
    return "Invalid Input";
  } else {
    return [firstNumber, secondNumber];
  }
}

function findAddress(obj) {
  let output = "";
  if (obj.hasOwnProperty("street")) {
    output += obj.street + ",";
  } else {
    output += "__,";
  }
  if (obj.hasOwnProperty("house")) {
    output += obj.house + ",";
  } else {
    output += "__,";
  }
  if (obj.hasOwnProperty("society")) {
    output += obj.society;
  } else {
    output += "__";
  }
  return output;
}

function canPay(changeArray, totalDue) {
  if (!Array.isArray(changeArray)) {
    return "You should input array";
  }
  let sum = 0;
  for (let i = 0; i < changeArray.length; i++) {
    sum = sum + changeArray[i];
  }
  if (sum >= totalDue) {
    return true;
  } else {
    return false;
  }
}
