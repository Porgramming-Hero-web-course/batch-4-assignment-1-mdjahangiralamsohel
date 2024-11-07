**Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.**

A type guard is a construct in TypeScript that allows you to narrow down the type of a variable or expression to a more specific type. Just like type guard
works a set of conditions that check variable or expression type with if.Type guards help to ensure code is type-safe and behaves perfectly and also narrowing down the type of a variable or expression to a more specific type.
Catching error from the code perfectly

Various Types of Type Guards and Their Use Cases.Let discuss with code:

**1. simple type guard example:**

function getProductPrice(product:string | number):number{
if(typeof product ==="string"){
return parseInt(product);
}
return product;
}

Here simply check string and parseInt return ineteger or NaN.

**2.# Instanceof:**

let newDate = new Date();
if(newDate instanceof Date){
console.log("ok");
}else{
console.log("Not ok");
}

Here newDate instanceof Date object.

**3. Specific value check:**

let someValue = null;
if(someValue===null){
console.log("success");
}else{
console.log("fail");
}

Here specific value null check

**4. Truthy/Falsy value check:**

let someValue = true;

if(someValue===true){
console.log("truthy value");
}else{
console.log("falsy value");
}

Here Truthy/Falsy value check

**5. Built-in method:**

let someArr = 123;

if(Array.isArray(someArr)){
console.log("success");
}else{
console.log("fail");
}

Here use in Built-in method

**6. Property presence check:**

let someObject = {name: "TS"}

if("name" in someObject){
console.log("found");
}else{
console.log("not found");
}

Here check object property

From above discussion we realise Type guards narrow down the type of a variable within a conditional block.Use the typeof and instanceof operators to implement type guards in the conditional blocks.
