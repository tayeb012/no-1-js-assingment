function sortMaker(arr) {
    console.log(arr);
    const firstNumber = arr[0];
    const secondNumber = arr[1];
    let arranged = [];
    
    if (firstNumber < secondNumber) {
      arranged.push(secondNumber, firstNumber);
    } 
    
    return arranged;
  }
  
  let arrayNumbers = [2, 3];
  const sortedArray = sortMaker(arrayNumbers);
  console.log(sortedArray);
  