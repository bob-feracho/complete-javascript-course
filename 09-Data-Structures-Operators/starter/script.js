'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]}, ${this.mainMenu[mainIndex]} will be delivered to
          
          
          ${address} at ${time}`);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};

// //for of loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) {
//   console.log(item);
// }

// //accessing index of for of loop

// for (const item of menu.entries()) {
//   console.log(item); //logs index and name of the item
// }

// console.log(menu.entries); // logs an array iterator 

// for (const [i, el] of menu.entries()){
//   console.log(`${i + 1}: ${el}`);
// }

//so it works like a map/Hash Set

// //Logical Assignment Operators

// const rest1 = {
//   name: 'Capri',
//   //numGuests: 20,
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// //Or Assignment Operators
// // rest1.numGuests = rest1.numGuests || 10; // Short Circuiting
// // rest2.numGuests = rest2.numGuests || 10; // Short Circuiting

// rest1.numGuests ||= 10; // same as above but more concise
// rest2.numGuests ||= 10;

// //Nullish asignment operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// //And Assignment operator

// // rest1.owner = rest1.owner && '<ANONYMOUS>';
// // rest2.owner = rest2.owner && '<ANONYMOUS>';

// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// //Nullish Coalescing Operator ??

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10; // <--- this is an issue b/c restaurant.numGuests exists but it is a falsy value
// console.log(guests);

// // nUllish : null and undefined (NOT 0 or '') - works with nullish values not falsy values
// const guestsCorrect = restaurant.numGuests ?? 10; // This will return 0
// console.log(guests);

//Short Circuiting && ||
//You can do a lot more than just combine boolean operators with these logical operators

//Logical operators CAN...
//Use ANY DATA TYPE, return ANY DATA TYPE, or short-circuting
// console.log(3 || 'Jonas'); //if first value is truthy then it will not look at other value
// //That's what is means by short circuiting
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null); // returns second value if both are false

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// //&&
// console.log('----AND-----');
// console.log(0 && 'jonas'); // OPPOSITE OF THE || short circuit
// //short circuits when the first value is false and returns THAT value

// console.log(4 && 'Jonas' && true && null && undefined && 0); // returns null
// console.log('First' && 'Second');

// if(restaurant.orderPizza){
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('muschrooms', 'spinach');

// //Spread Operator (...)
// const arr = [1, 2, ...[3, 4]];

// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, risotto, otherFood);

// //Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// //Functions
// const add = function (...numbers) {
//   let total = 0;
//   for (let num of numbers) {
//     total += num;
//   }
//   return total;
// };
// console.log(add(2, 3));
// console.log(add(5, 3, 7, 2));
// console.log(add(8, 2, 5, 3, 2, 1, 4));

// //Advantages, can accept single values and can also accept arrays ( type does not matter)
// const x = [23, 5, 7];
// console.log(add(...x));

// restaurant.orderPizza('Pepperoni', 'olives', 'mushrooms');
// restaurant.orderPizza('mushrooms');

//Spread and rest both use three dots (...)
//However they have different use cases
//Spread is used to separate values delimited by commas
//Rest operator uses variable names to

/* restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});
restaurant.orderDelivery({
  address: '123 Street',
});
 */

// Spread Operator
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr); // we can use the spread operator whenever we need to write code of multiple values like we did earlier

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci']; // can only use it where we write values separated by commas
// console.log(newMenu);

// //Copy array
// const mainMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(mainMenu);

// //Iterables : arrays, strings, maps, sets, NOT objects
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(...str);
// // console.log(`${...str}`) // DOESN'T Work

// //Real-world example

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// //Objects ES16
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };

// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// //Destructuring objects
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// //retrieving values
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// //setting default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //Mutating variables

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// //a and b will be 23 and 7
// ({ a, b } = obj);

// //Nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];
let pageSum = 0;

for(let book of books){
  pageSum += book.pages;
}
console.log(pageSum);
const allAuthors = [];
for(let book of books){
  if(typeof(book.author) == 'object'){
    for(let author of book.author){
      allAuthors.push(author);
    }
  }
  else{
    allAuthors.push(book.author);
  }
};
console.log(allAuthors);

for(let [i, name] of allAuthors.entries()){
  console.log(`${i}: ${name}`);
}

// for (let book of books) {
//   book.edition ??= 1;
// }

// for (let book of books) {
//   book.highlighted &&= book.thirdParty.goodreads.rating < 4.2 && false;
// }

//Challenge 1

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// let players1 = game.players[0];
// let players2 = game.players[1];
// let [gk = players1[0], ...fieldPlayers] = [...players1];

// console.log(`players1: ${players1}, GK: ${gk}, FieldPlayers: ${fieldPlayers}`);

// let allPlayers = [...players1, ...players2];
// console.log('All Players: ' + allPlayers);

// let players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log('Players1Final: ' + players1Final);

// const {odds: {team1, x: draw, team2}} = game;

// console.log(`Team 1 Odds: ${team1}, Team 2 Odds: ${team2}, Draw Odds: ${draw}`);

// const printGoals = function (...playerNames) {
//   for (let name of playerNames) {
//     console.log(name);
//   }
//   console.log(playerNames.length);
// };

// printGoals(['Davies', 'Muller', 'Lewandowski', 'Kimmich']);
// printGoals(game.scored);

// team1 < team2 && console.log('Team 1 is more likely to win');
// team2 < team1 && console.log('Team 2 is more likely to win');
// team2 !== team1 || console.log('Both teams are likely to win equally');

//console.log(fieldPlayers);
//console.log(gk);

// for(let i = 0; i<books.length; i++){
//   books[i].onlineContent ?? console.log(`${books[i].title} provides no data about its online content`);
// }

// const hasExamplesInJava = function(theBook){
//   return theBook.programmingLanguage == 'Java' || 'no data';
// }

// console.log(hasExamplesInJava(books[0]));

// for(let book of books){
//   book.onlineContent == true && console.log(`${book.title} provides online content`);
// }

// const [mainKeyword, ...rest] = books[0].keywords;
// const {publisher: bookPublisher, ...restOfTheBook} = books[1];
// const printBookAuthorsCount = function(title, ...authors){
//   console.log(`The book "${title}" has ${authors.length} authors`);
// };
// printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');

//spread operators
// const bookAuthors = [...books[0].author, ...books[1].author];
// console.log(bookAuthors);

// function spellWord(theWord){
//   console.log(...theWord);
// }
// spellWord('JavaScript');

// const { title, author, ISBN } = books;
// const { tags: keywords } = books;
// const { language, programmingLanguage = 'unknown' } = books[6];

// let bookTitle = 'unknown';
// let bookAuthor = 'unknown';

// ({ title: bookTitle, author: bookAuthor } = books[0]);
// const {
//   thirdParty: {
//     goodreads: { rating: bookRating },
//   },
// } = books[0];
// console.log(bookRating);

// function printBookInfo({title, author, year}){
//   console.log(`${title} by ${author}, ${year}`);
// }
// printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick', year: '2011' });

// //slow way
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr; // fast way
// console.log(x, y, z);
// console.log(arr); //just unpacks the array does not destroy it

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;

// //Switching variables
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// console.log(restaurant.order(2, 0));

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //Nested destructuring
// const nested= [2, 4, [5,6]];
// // const [i, ,j] = nested;
// // console.log(i , j);

// const [i, ,[j,k]] = nested;
// console.log(i,j,k);

// //Setting default values
// const [p=1,q=1,r=1] = [8,9];
// console.log(p,q,r);

// const [firstBook, secondBook] = books;
// const [, , thirdBook] = books;
// const ratings = [['rating', 4.19], ['ratingsCount', 144584]];
// const [[,rating], [,ratingsCount]] = ratings;

// const ratingStars = [63405, 1808];
// const [fiveStarRatings = 0, oneStarRatings=0, threeStarRatings=0] = ratingStars;
