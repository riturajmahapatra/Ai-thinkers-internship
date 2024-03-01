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
