'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName}. You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       //Creating NEW variables with same nas as outer scope's variable
//       const firstName = 'Steven';// JS first looks at the current scope, then it looks at outer scopes

//       //Reassigning outer scope's variable
//       output = 'NEW OUTPUT!';

//       const str = `Oh, and you are a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     //add(1, 5); // this works IF you have strict mode OFF
//     console.log(millenial); //function scoped- so millenial can be accessed
//     console.log(output);
//   }

//   printAge();

//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);

// //Variables
// console.log(me);
// // console.log(job);
// // console.log(birthYear);

// var me = 'Jonas';
// let job = 'teacher';
// const birthYear = 1991;

// console.log(addDecl(2, 3));
// //console.log(addExpr(2, 3));
// //console.log(addArrow(2, 3));

// //Functions
// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b; // here the addArrow function is not a function because it is declared after and since
// //it is after it is considered a undefined because of the var. Hence, it says it is undefined.

// //Example - why not to use var

// if(!numProducts){ // we want to delete the products if products is 0
//   deleteShoppingCart();
// }

// var numProducts = 10; // returns all products deleted! because of hoisting and how var varaibles works
// //undefined is a falsy value which means that we are effectively evaluating 0 in the if block- making
// //us delete all the products

// function deleteShoppingCart() {
//   console.log('All products deleted');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// //Creates proprety on the global window object
// console.log(x === window.x);
// //Does not create global proptery on window object
// console.log(y === window.y);

// console.log(z === window.z);

//console.log(this);
// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this); // this keyword here is undefined in strict mode or window in sloppy mode
// };
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this); // this keyword here is undefined in strict mode or window in sloppy mode
// };
// calcAgeArrow(1991);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this); //outputs the jonas object
//     console.log(2037 - this.year);
//   },
// };
// jonas.calcAge(); // the reason the object returned jonas is becuase jonas was the one calling the method

// const matilda = {
//   year: 2017,
// };
// matilda.calcAge = jonas.calcAge; //copies over jonas calcAge method to matilda object
// matilda.calcAge();

// const f = jonas.calcAge;
// f(1991); // This does not work because f is now just a regular function and does not have the property year

//var firstName = 'Matilda'; // this is on the global window
//COULD VIOLATE SECURITY IF WE USE VAR

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(this); //outputs the jonas object
//     console.log(2037 - this.year); //can be called self/that

//     //Old way of doing it
//     // const self = this; //this is how we fix it, assign a variable to the this object and now you can access it anywhere in the function block
//     // const isMillenial = function () {
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     //   //console.log(this.year >= 1981 && this.year <= 1996); //this does not work because of simple function call this keyword rules
//     // };

//     //ES6 way of doing it- Arrow functions
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },

//   greet: () => console.log(`Hey ${this.firstName}`), //returns undefined because arrow function does not get own keyword
// };
// jonas.greet();
// jonas.calcAge();

// //Arguments keyword
// const addExpr = function (a, b) {
//   console.log(arguments); //Exists
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   console.log(arguments); //DNE

//   return a + b;
// };
// addArrow(2, 5, 8);

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Jonas',
//   age: 30,
// };

// const friend = me;
// friend.age = 27; // changes me object too? why???
// friend.name = 'Bob';
// console.log('Friend: ', friend);
// console.log('Me: ', me);

// //Basically  whenever we assign friend to me we make a pointer to friend
//Primitive Types
// let lastName = 'Williams';
// let oldLastName = lastName;
// lastName = 'Davis';
// console.log(lastName);
// console.log(oldLastName);
// //Reference Types
// const jessica = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
// };

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';
// console.log('Before marriage:', jessica);
// console.log('After marriage:', marriedJessica);

// //marriedJessica = {}; //ILLEGAL

// //Copying objects
// const jessica2 = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
//   family: ['Alice', 'Bob'],
// };

// const jessicaCopy = Object.assign({}, jessica2); //copies to a new object on the heap
// jessicaCopy.lastName = 'Davis';

// //Creates A SHALLOW COPY. Meaning new object references are not created
// // So both arrays will have Mary and John
// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('John');

// console.log('Before marriage', jessica2);
// console.log('After marriage', jessicaCopy);
