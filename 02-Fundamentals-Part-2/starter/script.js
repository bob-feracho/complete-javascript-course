'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if(hasDriversLicense) console.log("I can drive.");

//const interfaceAudio= 'Audio';
//const private = 534;

// function logger(){
//     console.log('My name is Micah');
// }


// //calling /running / invoking the function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges){
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(4,2);
// console.log(appleOrangeJuice);

//function declaration
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// //function expression 
// const calcAge2 = function (birthYear) { // anonymous function - varaible stores function - like lambdas
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1991);
// console.log(age1, age2);


// const calcAge2 = function(birthYear){
//     return 2037 - birthYear;
// }

// // Arrow Function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     //return retirement;
//     return `${firstName} retires in ${retirement} years.`;
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));

// console.log(yearsUntilRetirement(1991, 'Bob'));


// function cutFruitPieces(fruit){
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges){
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
    
//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges ${apples}`;
//     return juice;
// }

// console.log(fruitProcessor(2,3));

// const birthYear = 0;

// const calcAge = function(birthYear){
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function(birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if(retirement > 0){
//         console.log(`${firstName} retires in  ${retirement} years`);
//         return retirement;

//     }
//     else{
//         console.log(`${firstName} has already retired!`);
//         return -1;
//     }
//     //return `${firstName} retires in ${retirement} years.`;
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1970, 'Mike'));

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);
// for(let friend of friends){
//     console.log(friend);
// }


// //const years = new Array(1991,1984, 2008, 2020);

// console.log(friends[2]);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Simon'; // you can change the const array?
// console.log(friends); //its because primitive types are immutable, array is not a primitive type I GUESS

// //friends = ['Bob', 'Alice'] // this is illegal, cannot replace array
// const firstName = 'Jonas';
// const jonas = [firstName,'Schmedtmann', 2037 - 1991, 'teacher', friends]; //you can do this??? multiple typed array?????
// console.log(jonas);
// // I hate dynamically typed languages...

// //Exercise
// const calcAge = function (birthYear){
//     return 2037 - birthYear;
// }

// const years = [1990, 1967, 2002, 2010, 2018];

// const ages = [];
// for(let year of years){
//     ages.push(calcAge(year));
// }
// console.log(ages);

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

//array methods
//Add elements
// const friends = ['Micah', 'Tassos', 'John'];
// console.log(friends);
// const newLength = friends.push('Kuba'); //push returns length of new array
// console.log(friends, newLength);

// friends.unshift('Jimmy'); //adds elements to the beginning of the array
// console.log(friends);

// //Remove element

// const popped = friends.pop(); //returns removed elements at end of list
// console.log(friends, popped);

// const popped2 = friends.shift(); // removes first element in array
// console.log(friends, popped2);

// console.log(friends.indexOf('Tassos')) //returns and finds index of argument. Returns -1 otherwise

// //ES6 methods 
// let isFriend = friends.includes('Tassos'); // returns true false based on argument. Does strict equalty (has to be same type)
// console.log(isFriend);

// if(friends.includes('Peter')){
//     console.log("hi peter!");
// }
// else{
//     console.log('who is Peter');
// }

// const jonas = {
//     firstName : 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037- 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']

// };
// console.log(jonas);

// //logging a property using dot notation
// console.log(jonas.lastName);

// //logging a property using the bracker notationj (specifies key)
// console.log(jonas['lastName']);


// //Advantage of square brackers, since its a string, you can concatenate and access properties depending on that
// const nameKey = 'Name';
// console.log(jonas[`first${nameKey}`]);
// console.log(jonas[`last${nameKey}`]);

// const interstedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends')

// if(jonas[interstedIn]){
//     console.log(jonas[interstedIn]); //if property DNE then it returns undefined

// }
// else{
//     console.log('Wrong request!');
    
// }

// jonas.location = 'Portugal'; // Add a property using dot notation
// jonas['twitter'] = '@jonasschedtman';
// console.log(jonas);

// //Challenge
// // "Jonas has 3 friends and his best friends is Michael"

// console.log(`First Name ${jonas.firstName}\n # of Friends: ${jonas.friends.length} \n Best Friend: ${jonas.friends[0]}`)

// const jonas = {
//     firstName : 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,
    
//     // calcAge: function(birthYear){ //objects can also hold functions
//     //     return 2037- this.birthYear; // these are called METHODS (this is being called to access its own property)
//     // }
//     calcAge: function(){
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function(){

//         this.summary = `My first name is ${this.firstName} and my last name is ${this.lastName}.
//         I was born in ${this.birthYear} and work as a ${this.job}. My friends are ${this.friends} and the statement
//         I have ${this.hasDriversLicense ? 'a' : 'no'} driver's license. I am now ${this.calcAge()}`;
//         return this.summary;
//     }

//     //function calcAge() function delcarations do not work
// }

// console.log(jonas.calcAge());
// // console.log(jonas['calcAge'](1991));
// console.log(jonas.age);

// console.log(jonas.getSummary());

// const john = {
//     fullName : 'John Smith',
//     mass: 92,
//     height: 1.95,

//     calcBMI : function(){
//         this.bmi = (this.height * this.height) / mass;
//     }
// };

//     const mark = {
//         fullName : 'Mark Miller',
//         mass: 92,
//         height: 1.95,
    
//         calcBMI : function(){
//             this.bmi = (this.height * this.height) / mass;
//         }
    
// };






