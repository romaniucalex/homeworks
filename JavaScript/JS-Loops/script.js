let myArray = [2, 3, 5, 10, 8, 9, 24, 13, 27, 31]
let sum = 0
let contor = 1

for (i = 0; i < myArray.length; i++) {
    if ( i < myArray[i]) {
        contor = myArray[i]
        sum = contor + sum
        mediaAritmetica = sum / myArray.length
    }
}


console.log("Suma numerelor este: ", sum)
console.log("Media aritmetica este:", mediaAritmetica)

// ------------------------------------------------------------------//
let array = [5, 13, 18, "text", "abecedar", true, false, true, 22];
let suma = 0
let contor1 = 1

for (i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
        suma = suma + array[i]
        contor = contor1 + 1
        
    }
}

console.log("Suma array-ului este:", suma)

// ------------------------------------------------------------------//
let number = parseInt(prompt("Cate numere doresti sa afiseze consola:"));
let number1 = 0;
let number2 = 1;

console.log("Primele 20 de numere din sirul lui Fibonacci:");
console.log(number1);
console.log(number2);

nextNumber = number1 + number2;
contor = 2
while (contor <= number) {
    console.log(nextNumber)
    contor = contor + 1;
    number1 = number2;
    number2 = nextNumber;
    nextNumber = number1 + number2;
}

