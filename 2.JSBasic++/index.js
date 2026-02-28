/*
function sum(a ,b) {
    const c = a + b;
    return c;
}
console.log(sum(1, 2)); // 3


// ------------------------ FUNCTION DECLARATION -----------------------------

// I have declared a function named sum 
function sum(a ,b) {
    const c = a + b;
    return c;
}

const userObj = {
    name: "abc",
    age: 24,
    height: 5.1,
    hobbies: ["cycling", "swimming"]
}

const name = "utkarsh";


// ------------------------ FUNCTION EXPRESSION -----------------------------

const sum2 = function(a,b) {
    return a + b;
}

console.log("sum2:", sum2(3, 4)); // 7


// ------------------------ ARROW FUNCTION -----------------------------

const sum3 = (a, b) => {
    return a + b;
}

console.log("sum3:", sum3(30, 41)); // 71

*/


// ------------------------ CALL SITE -----------------------------

// const sum4 = sum3 // NOT A CALL SITE ( we are just assigning the function not calling)

// sum4() // this is a call site, callsite basically means () after function
// sum4(1,2) // this is a call site, callsite basically means () after function
// sum3(1,2)

// console.log("sum4:", sum4(30, 41)); // 71 // this is a call site



// const sun = 100;

// const howHotIsSun = sun;

// console.log(howHotIsSun, sun);


// function foodCart( type, cash ) {

// }

// foodCart("pizza", 500); // this call site 
// foodCart();



// ------------------------------- what a function returns ----------------


// function sum(a, b) {
//     const sum = a + b;

//     // return undefined
// }


// const result = sum(1, 2);
// console.log(result)



// function sum(a, b) {

//     return 1;

//     return 2;

// }


// console.log(sum(1,2)); // 1

// console.log("100000")




// function sum(a, b) {
//     const sum = a + b;

//     return sum;
// }

// const result = sum();
// // a is undefined
// // b is undefined

// // const sum = undefined + undefined


// console.log(result)  // NaN - not a number



// --------------------- function with default value ----------
/*
function sum(a = 0, b = 0) {
    const sum = a + b;

    return sum;
}

console.log(sum(1, 2)); // 3
console.log(sum()); // 0
*/



// ---------------------------------CLOSURES -----------------------

// FUNCTION + lexical environment (OUTER SCOPE)

// EXAMPLE 1:
// let a = 99;
// let b = 100;

// function sum(a, b, c) {
//     // 1, + undefined + undefined  = NaN
//     return a + b + c;
// }

// sum(1);



// Example 2: 


// let count = 0; // 1 // 2


// function counter() {
//     count++;
//     return count;
// }

// const res = counter(); // 1
// const res2 = counter(); // 2
// const res3 = counter(); // 3

// console.log(res, res2, res3)


// Example 3: 


// let d = 1;
// function foo() {
//     let b = 9;

//     function bar() {
//         let c = 12;
//         console.log(a + b + c + d + e);
//     }

//     let a = 7;

//     return bar;
// }

// var barFunc = foo(); // 1 //. foo is executed,  bar is not  executed 

// var e =1;


// barFunc() //. bar is executed here you will be executing bar() only 
// barFunc()










// function sum (a,b) {
//     return a + b
// }


// function foo() {

//     function bar() {

//     }

  

//     return bar;
// }


// console.log(foo())



// ------------------------------ Arrays -----------------------------
/*
const arr = [1,2,3,4,5, 6, 7, 8, 9, 10];

// req is we want to double the number of array 
// [2,4,6,8,10] 


// 1. for loop 
// 2. implement function we are giving 
// 3 compile the answer and give it to me

// item will be original array items 1 ,2 ,3, 4, 5

// map -> transformation [1,2,3] -> [2, 4, 6]

const compileAnswerDouble = arr.map( (item ) => {
    const double = item * 2;
    return double;
} );

console.log(compileAnswerDouble, 'compileAnswerDouble')



// I want only even numbers.

//[ 1, 2, 3, 4] -> [2, 4]
// 1. for loop 
// 2. implement function we are giving 
// 3 compile the answer and give it to me

const finalFIlteredAnswer = arr.filter( (item) => {
    const areYouEven = item % 2 === 0 // true // false
    return areYouEven;
    // what filter does if areYouEven is true then item  will be included in final answer
} )

console.log("finalFIlteredAnswer", finalFIlteredAnswer)

// arr.reduce
// arr.fill
// arr.findIndex

*/


// ---------------------------------- THIS keywrod ----------------------------
/**
 * 1. this keyword: represent context in which the function is called 
 * to deteermine value of context -> this -> we need to see call site ONLY
 * 
 */

// 1. default binding 

// function foo() {
//     // this -> context -> global object
//     console.log("hello")
//     console.log(this);
// }

// foo() // this is a call site ? yes 
// do you have any extra info ? NO 

// 2. INPLICIT BINDING - js was deciding 

// const obj = {
//     name: "utkarsh",
//     foo: function() {
//         // context -> this -> obj 
//         console.log(this); 
//     }
// }

// console.log(obj.name);

// obj.foo(); // is this a call site ? yes
// do you have any extra info ? YES (obj)



// const obj = {
//     name: "utkarsh",
//     foo: function() {
//         // context -> this -> global obj 
//         console.log(this); 
//     }
// }

// console.log(obj.name);

// const fooCopy = obj.foo; // this is a call site ? NO 
// // fooCopy is foo only

// fooCopy(); // is this a call site ? YES 
// do you have any extra info ? NO 


// 3. Explicit binding - as a developer you are forcing the context
// 1. call, apply , bind

/*
const obj = {
    name: "utkarsh",
    foo: function(a , b, c) {
        console.log(a + b)
        console.log(this); 
    }
}

const obj2 = {
    hello: "world",
    age: 20
}

obj.foo(1,2); // call site ? yes 
// extra info // yes 
// context -> this -> obj 


// i want to call foo function with obj2 as context
obj.foo.call(obj2, 1, 50, 0)

obj.foo.apply(obj2, ["abc", "def", "zzz"])
*/

// Gc , Async await, promise , event loop , soping, callback hell



// ---- ------------------------- event loop -------------------------------

console.log("A");

setTimeout(() => {
    console.log("C");
}, 3000) // 2000 ms -> 2sec

console.log("B1");
console.log("B2");
console.log("B3");
console.log("B4");
console.log("B5");
console.log("B6");
