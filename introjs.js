/* you can just add HTML to it to make it work nothing fancy */
/* excercise 1 */
//Evaluate the below:
5 + '34'; // 534
5 - '4'; //1
10 % 5; //0
5 % 10; //5 *
'Java' + 'Script'; // JavaScript
' ' + ' '; // '__' //_denotes spacing
' ' + 0; //_0
//{true=1, false=0}
true + true; // 2
true + false; // 1
false + true; // 1
false - true; //-1
3 - 4; //-1
'Bob' - 'bill'; // NaN

//Evaluate the below comparisons:
5 >= 1; //true
0 === 1; //false
4 <= 1; // false
1 != 1; //false
'A' > 'B'; // false
'B' < 'C'; //true
'a' > 'A'; // true {unicode of "a" (which is 97) is greater than the Unicode code point for "A" (which is 65)}
'b' < 'A'; //false
true === false; // false
true != true; //false

// Make the string: "Hi There! It's "sunny" out" by using the + sign:

/* exercise 3 */

// Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
// 2. Stores that first number
// 3. Prompts the user for the second number.
// 4. stores that number and responds with the SUM by using an alert.

// BONUS: Make a program that can subtract, multiply, and also divide!

var firstNum = Number(prompt('enter first number'));
var secondNum = Number(prompt('enter second number'));
var addedNum = firstNum + secondNum;
alert('Sum of your numbers are : ' + addedNum);

/* exercise 4 */
// Make a keyless car!
// This car will only let you drive if you are over 18. Make it do the following:

//using prompt() and alert(), ask a user for their age.
// IF they say they are below 18, respond with:
// "Sorry, you are too young to drive this car. Powering off"

// IF they say they are 18, respond with:
// "Congratulations on your first year of driving. Enjoy the ride!"

// IF they say they are over 18, respond with:
// "Powering On. Enjoy the ride!"

var age = Number(prompt('What is your age'));
if (age < 18) {
  alert('Sorry, you are too young to drive this car. Powering off');
} else if (age == 18) {
  alert('Congratulations on your first year of driving. Enjoy the ride!');
} else {
  alert('Powering On. Enjoy the ride!');
}

/* exercise 5 */

// Make a keyless car EVEN BETTER!
// We are improving our car from previous exercise now.

/* Solutions to future exercises will be in the .js file (meaning Javascript file) from now on. */

//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.
// Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?
function checkDriverAge() {
  var age = prompt('What is your age?');
  if (Number(age) < 18) {
    alert('Sorry, you are too yound to drive this car. Powering off');
  } else if (Number(age) > 18) {
    alert('Powering On. Enjoy the ride!');
  } else if (Number(age) === 18) {
    alert('Congratulations on your first year of driving. Enjoy the ride!');
  }
}

checkDriverAge();

//2. Create another function that does the same thing, called checkDriverAge2() using Function Expression.

//BONUS: Instead of using the prompt. Now, only use console.log and make the checkDriverAge() function accept an argument of age, so that if you enter:
/* 
checkDriverAge(92);
it returns "Powering On. Enjoy the ride!" */

function checkDriverAge2(age) {
  if (Number(age) < 18) {
    console.log('Sorry, you are too yound to drive this car. Powering off');
  } else if (Number(age) > 18) {
    console.log('Powering On. Enjoy the ride!');
  } else if (Number(age) === 18) {
    console.log(
      'Congratulations on your first year of driving. Enjoy the ride!'
    );
  }
}

checkDriverAge2(98);

/* exercise 6 */
// using this array,
var array = ['Banana', 'Apples', 'Oranges', 'Blueberries'];

// 1. Remove the Banana from the array.
array.shift();
// 2. Sort the array in order.
array.sort(); // "Apples"1: "Banana"2: "Blueberries"3: "Oranges"length: 4[[Prototype]]: Array(0)
// 3. Put "Kiwi" at the end of the array.
array.push('Kiwi');
// 4. Remove "Apples" from the array.
array.splice(1, 1);
/* 
var array = ["Banana", "Apples", "Oranges", "Blueberries"];
var nwe = array.splice(1,1);
console.log(array) 
*/

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
array.reverse();
/* you should have at the end:
["Kiwi", "Oranges", "Blueberries"] */

// using this array,
var array2 = ['Banana', ['Apples', ['Oranges'], 'Blueberries']];
// access "Oranges".
array2[1][1][0];

/* exercise 7 */
// Create an object and an array which we will use in our facebook exercise.

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

// 2. Create an array which contains the object you have made above and name the array "database".

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

var database = {
  username: 'Rituraj',
  password: 'Kbae@235',
};

var newsfeed = [
  { username: 'Tiria', timeline: 'rescue' },
  { username: 'Bafri', timeline: 'search' },
  { username: 'Hidins', timeline: 'protect' },
];
