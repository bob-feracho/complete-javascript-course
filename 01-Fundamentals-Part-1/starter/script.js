// let hi = 'Hello World';

// console.log(hi);

// //strings
// const year = 2037;
// const birthYear = 1991;
// const firstName = 'Jonas';
// const job = 'Software Engineer';
// const jonas = "I'm " + firstName + ', a ' + year - birthYear;
// console.log('Just a regular string...');

// console.log('String with \n\
//     multiple \n\
//     lines');
// const jonasNew = `I'm ${firstName}, a ${year - birthYear} ${job}`;

// console.log('String with \n\
//     multiple\n\
//     lines');
    
// console.log(`String
//     multiple
//     lines`); //use template literal


//if else; 

// const age = 15;

// if(age >= 16){
//     console.log("You can learn to drive!");
// }
// else{
//     const yearsLeft = 16 - age;
//     console.log(`You have ${yearsLeft} years before you can start to learn to drive!`);
// }

// let century;
// const birthYear = 1991;
// if(birthYear <= 2000){
//     century = 20;
// }
// else{
//     century = 21;
// }

// console.log(century);
//type conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear); //converts string to number second one is a string
// //Number() simply converts
// console.log(Number(inputYear)+ 18); 

// console.log(Number('Jonas')); //gives NaN (Not a Number) or invalid number
// console.log(typeof NaN); //somehow a number but a invalid number? Such a weird language

// console.log(String(23));// Convert Number to String

// //type coercion

// console.log('I am ' + 23 + ' years old'); //automatically converts 23 to String(23)
// //same thing with template literals- takes all the numbers and automatically converts them

// console.log('23' - '10' - 3 ); //here the minus operator converts the strings to numbers and performs arithmetic.
// console.log('23' * '2'); // Both multiplication and division operators provide numbers too
// //So really the only operator that actually converst TO STRINGS is the + operator

// let n = 2+3+4+'5'; //This returns 95, Adds 2,3,4 and then Concatenates 9 and 5
// console.log(n);

// let m = '10'-'4'-'3'-2 + '5'; // Returns 15
// console.log(m);

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(''));
// console.log(Boolean(null));
// console.log(Boolean(Number('Hello')));
// console.log(Boolean("Jonas")); //true

// const money =1;
// if(money){
//     console.log("Don't spend it all!");
// }
// else{
//     console.log("You should get a job.");
// }


// let height=0;
// if(height || height == 0){
//     console.log("Height is defined");
// }
// else{
//     console.log("Height is undefined");
// }

// const age = 18;
// if(age === 18){ //returns true compares if age is exactly 18
//     console.log("You just became an adult");
// }
// else{
//     console.log("you are too young or too old.")
// }

// if(age == '18'){ //loose equality operator, basically does type coercion in the background
//     console.log("This is a string");
// }
// if (age !== '18'){ // does not do type coercion so we good
//     console.log('Get Wrecked');
// }

// if (age != '18'){
//     console.log("Does not print");
// }


// const favorite = Number(prompt("What is your favorite number? "));
// console.log(typeof favorite);

// if( favorite === 69) { 
//     console.log(`Cool! ${favorite} is a cool number!`);
// }
// else if(favorite === 42){
//     console.log('7 is a cool number!');
// }else{
//     console.log(`I guess ${favorite} is a cool number`);
// }

// if (favorite !== 23) console.log('Why not 23?');

// const favorite = 9;
// function hello(e){
//     return e.class === Array.class;
// }

// console.log(hello(favorite));

// const hasDriversLicense= true;
// const hasGoodVision = true;
// if(hasDriversLicense && hasGoodVision){
//     console.log('AND')
// }

// if(hasDriversLicense || hasGoodVision){
//     console.log('OR')
// }

// if(!hasDriversLicense){
//     console.log('NOT')
// }

// const scoreDolphins = (96+108+89)/3;
// const scoreKoalas = (88+91+110);

// if(scoreDolphins > scoreDolphins){
//     console.log("Dolphins win the trophy");
// }
// else if(scoreKoalas > scoreDolphins){
//     console.log("Koalas win the trophy");
// }
// else if(scoreDolphins === scoreKoalas){
//     console.log('Both win the trophy');
// }
// const age = 20;
// const pDiddyAngry = true;
// switch(age){
//     case 16:
//         console.log("watch out for p diddy");
//         break;
//     case 20:
//     case 17:
//         console.log('pdiddy aint angry but he might be coming for you...');
//         break;
//     case 18:
//         console.log("p diddy might be coming but IDK");
//         break;
//     default:
//         console.log("you are too old for p diddy's tastes");
//         break;
// }

// const age = 13;
// age >= 18 ? console.log('I like to drink wine!') : console.log('I like to drink water!');

// const drink =  age >= 18 ? 'wine' : 'water'; //expression

// console.log(drink);
// console.log(`I like to drink ${age >= 18 ? 'beer' : 'juice'}`);
// const bill = 275;
// const tip = bill >= 50 && bill <=300 ? bill * .15 : bill * .2;
// console.log(String(tip));

















