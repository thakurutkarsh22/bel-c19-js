
/*

// Variable - its something whose value can change (supports both declaration and assignment)
// 1. let 
// 2. var


// let name = "abcd";

// DECLARATION of variable
let nameOfInstructor;

// ASSIGNMENT of variable
nameOfInstructor = "utkarsh";
nameOfInstructor = "akash";
nameOfInstructor = "akshat";
console.log(nameOfInstructor);


var age = 20; // we do not use this in modern javascript, because of its scoping issues.


// Constants - we cant change the value, it do not support declaration
// 1. const

const pi = 3.14;

// pi = 3.1415; // this will throw an error, because we cannot change the value of a constant variable.

*/

// ----------------------------Data Types in JavaScript-----------------------------
// 1. Primitive Data Types
// 2. NonPrimitive Data Types

// Primitive Data Types (STACK memory)
// 1. String
// 2. Number
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol


// Non Primitive Data Types (HEAP memory)
// 1. Object
// 2. Array
// 3. Function








/*
//  ---------------------------- Strings and Numbers -----------------------------
const firstName = "utkarsh";
const lastName = 'thakur';

const age = 20;

const commentary = `My name is ${firstName} ${lastName} and I am ${age} years old.`

console.log(commentary);



//  ---------------------------- Boolean -----------------------------
const isHeCool = true;
const isSunHot = false;


//  ---------------------------- Undefined -----------------------------
// this is the default value of a variable which is declared but not assigned any value.

// let myName;

// console.log('myName:', myName); // this will print 'myName: undefined'


// ----------------------------- Null -----------------------------
// this is a special value which represents the absence of any value. It is an assignment value, which means we can assign null to a variable.
// user is setting the value of myName to be nothing.

let myName = "utkarsh";

console.log('myName:', myName); // this will print 'myName: utkarsh'

// myName = null;
myName = undefined; 

console.log('myName:', myName);

// ----------------------------- Object -----------------------------

const hello = "hello";
const age1 = 20;

const person = {
    name: "utkarsh",
    age: 20,
    isStudent: true
};

console.log('person:', person);

// ----------------------------- Array -----------------------------

const number = [1, 2, 3, 4, 5];
const fruits = ["apple", "banana", "orange"];
const mixedArray = [1, "hello", true, null, undefined, { name: "utkarsh" }, [1, 2, 3]]; // should you do this NOPE but



// ----------------------------- typeof operator -----------------------------

console.log(typeof "utkarsh"); // string
console.log(typeof 20); // number
console.log(typeof isHeCool); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // this is a bug in JavaScript, it should return null but it returns object, because of historical reasons. So we can say that null is of type object in JavaScript.
console.log(typeof person); // object
console.log(typeof numbers); // object (arrays are also objects in JavaScript)

*/


// ----------------------------- PARSING AND EXECUTION OF JAVASCRIPT CODE -----------------------------

/**
 * Travelling in js file is done in 2 parts 
 * 1. Parsing - in this phase, the JavaScript engine reads the code and creates a memory space for all the variables declaration and functions. It also assigns the default values to the variables (undefined for var and let, and null for const). It also creates a global execution context and a global object (window in browsers).
 *  Variable declaration and function 
 * 2. Execution - in this phase, the JavaScript engine executes the code line by line. It assigns the values to the variables and executes the functions. It also creates a local execution context for each function call and manages the call stack.
 */

// Example 1: 
// var a = 12;
// console.log(a); // 12

// a = 13;

// console.log(a); // 13


// Example 2: (HOISTING)

// console.log(a, 'answer1'); // undefined
// var a = 12;

// console.log(a, 'answer2') // 12


// Example 3

// var a;
// console.log(a, 'answer1'); // undefined

// a = 12;
// console.log(a, 'answer2') // 12



// Exmaple 4 

var a;
console.log(a, 'answer1');

// funcation declation
function sum(num1, num2) {
    const sumAggregate = num1 + num2;
    return sumAggregate;
}

const sumAnswer = sum(1,25);
console.log('sumAnswer', sumAnswer);

a = 12;

console.log(a, 'answer2')


