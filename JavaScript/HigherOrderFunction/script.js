const myArray = [undefined, null, 1, 2, 4, 5, 8, "string", "stringmailung", true, false];

function checkEven(myArray) {
    return myArray % 2 === 0;
}

let checkElements = myArray.every(checkEven);
console.log("The answer is:", checkElements)

// ----------------------------------------------------------------------//

myArray.forEach((item) => {
   console.log("The elements are:", item)
})

// ----------------------------------------------------------------------//

const numbersArray = [1, 2, 3, 5, 7, 10, 17, 21, 27, 30]

function sumReduce(acc, currentValue) {
    return acc + currentValue;
}


let sum = numbersArray.reduce(sumReduce);
console.log("The answer is:", sum)
















  
  




