let initialValues = [undefined, null, 1, 4, 6, "string", false];
let otherValues = [null, undefined, 2, 3, 5, 8, "text1", "text3", true];

initialValues.push(otherValues);
console.log(initialValues);

x = 2;
sum = 0;

for (i = 0; i < initialValues.length; i++) {
  if (typeof initialValues[i] === "number") {
     sum = initialValues[i] + x
     console.log("The result is:", sum)
  } 
}

initialValues.splice(2, 1, 3);
initialValues.splice(3, 1, 6);
initialValues.splice(4, 1, 8);
console.log(initialValues)

 for (i = 0; i < initialValues.length; i++) {
     if (typeof initialValues[i] === "string") {
         test = initialValues[i].concat(" ", "happy coding")
         console.log("Concatenarea este:", test)
    }
 }

for (i = 0; i < initialValues.length; i++) {
    if (typeof initialValues[i] === "boolean") {
        console.log("Valoarea este acum:", !initialValues[i])
    }
}       



