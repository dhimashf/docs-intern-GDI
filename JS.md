1. apa itu javascripts
Last year, millions of learners from our community started with JavaScript. Why? JavaScript is primarily known as the language of most modern web browsers, and its early quirks gave it a bit of a bad reputation. However, the language has continued to evolve and improve. JavaScript is a powerful, flexible, and fast programming language now being used for increasingly complex web development and beyond!

Since JavaScript remains at the core of web development, it’s often the first language learned by self-taught coders eager to learn and build. We’re excited for what you’ll be able to create with the JavaScript foundation you gain here. JavaScript powers the dynamic behavior on most websites, including this one.

In this lesson, you will learn introductory coding concepts, including 
data types
Preview: Docs Loading link description
 and built-in 
objects
Preview: Docs Loading link description
 — essential knowledge for all aspiring developers. Make sure to take notes and pace yourself. This foundation will set you up for understanding the more complex concepts you’ll encounter later.


 2. Console
 console adalah sebuah panel untuk menampilkan pesan penting seperti error, untuk developer.
 Errors in JavaScript are issues that occur during runtime, represented by the Error object. This object provides information about the error type and message and can be used to throw exceptions or handle them in a try-catch block.

When JavaScript throws an error, it throws an error object that consists of a name and a message property. The name is the general type of the error, and the message is a human-readable description of the specific error that happened.

Thrown errors are caught by the next outer catch block of a try...catch...finally statement. They can also be thrown intentionally by the throw statement.


name Sets or returns an error name. (Type of Error)
message Sets or returns an error message. (Description of specific instance.)
stack Returns a string representing the point in the code where the error was instantiated.
The following types of error can be returned by the name property:

“EvalError” An error has occurred in the eval() function (Note: Depreciated in newer versions of JavaScript)
“RangeError” A number “out of range” has occurred
“ReferenceError” An illegal reference has occurred
“SyntaxError” A syntax error has occurred
“TypeError” A type error has occurred
“URIError” An error in encodeURI() has occurred
These are some example messages for various types of errors:

RangeError
invalid array length
invalid date

3. tipe data

Data Types
8 min
Data types
Preview: Docs Data types are used to classify eight fundamental values used for programming in JavaScript, including primitive and object types.
 are the classifications we give to the different kinds of data that we use in programming. In JavaScript, there are eight fundamental data types:

Number: Any number, including numbers with decimals: 4, 8, 1516, 23.42.
BigInt: Any number, greater than 253-1 or less than -(253-1), with n appended to the number: 1234567890123456n.
String: Any grouping of characters on the keyboard (letters, numbers, spaces, symbols, etc.) surrounded by single quotes: ' ... ' or double quotes " ... ", though we prefer single quotes. Some people like to think of string as a fancy word for text.
Boolean: This data type only has two possible values — either true or false (without quotes). It’s helpful to think of booleans as on and off switches or as the answers to a “yes” or “no” question.
Null: This data type represents the intentional absence of a value, and is represented by the keyword null (without quotes).
Undefined: This data type is denoted by the keyword undefined (without quotes). It also represents the absence of a value, though it has a different use than null. undefined means that a given value does not exist.
Symbol: A newer feature of the language, symbols are unique identifiers that are useful in more complex coding. No need to worry about these for now.
Object: Collections of related data.
The first seven of those types are considered primitive data types. They are the most basic data types in the language. Objects are more complex, and we’ll learn much more about them as we progress through JavaScript. At first, eight types may not seem like that many, but soon we’ll observe how the world opens with possibilities once we start leveraging each one. As we learn more about objects, we’ll be able to create complex collections of data.

But before we do that, let’s get comfortable with strings and numbers!

console.log('Location of Codecademy headquarters: 575 Broadway, New York City');
console.log(40);

Copy to Clipboard

In the example above, we first printed a string. Our string isn’t just a single word; it includes both capital and lowercase letters, spaces, and punctuation.

Next, we printed the number 40, notice we did not use quotes.


4. Aritmatika
Basic arithmetic often comes in handy when programming.

An 
operator
Preview: Docs Loading link description
 is a character that performs a task in our code. JavaScript has several built-in arithmetic operators, that allow us to perform mathematical calculations on numbers. These include the following operators and their corresponding symbols:

Add: +
Subtract: -
Multiply: *
Divide: /
Remainder: %
The first four work as one might assume:

console.log(3 + 4); // Prints 7
console.log(5 - 1); // Prints 4
console.log(4 * 2); // Prints 8
console.log(9 / 3); // Prints 3

Copy to Clipboard

Note that when we console.log(), the computer will evaluate the expression inside the parentheses and print that result to the console. If we wanted to print the characters 3 + 4, we would wrap them in quotes and print them as a string.

console.log(11 % 3); // Prints 2
console.log(12 % 3); // Prints 0

Copy to Clipboard

The remainder operator, sometimes called modulo, returns the number that remains after the right-hand number divides into the left-hand number as many times as it evenly can: 11 % 3 equals 2 because 3 fits into 11 three times, leaving 2 as the remainder.
+: Adds to a value; can also be used to concatenate strings.
-: Subtracts from a value.
*: Multiplies by a value.
/: Divides by a value.
%: Modulo finds the remainder after dividing two values.
**: Returns the exponentiation of the first value raised to the power of the second value (first introduced in ES2016).
++: Returns the value incremented by 1.
--: Returns the value decremented by 1.
The operators can be implemented as seen below:

let sum = 5 + 5;

let difference = 10 - 5;

let product = 5 * 10;

let quotient = 10 / 5;

let remainder = 10 % 5;

Copy to clipboard

Other Assignment Operators
An assignment operator assigns a value to its left operand based on the value of its right operand:

+=: Adds and assigns a new value to a variable.
-=: Subtracts and assigns a new value to a variable.
*=: Multiplies and assigns a new value to a variable.
/=: Divides and assigns a new value to a variable.
%=: Assigns the returned remainder (modulo) as a new value to a variable.
**=: Assigns the left operand raised to the power of the right operand.
The following example showcases how these operators are a combination of using an assignment and arithmetic operator in one statement:

let number = 100;

// Both statements will add 10
number = number + 10;
number += 10;

console.log(number);
// Output: 120

Copy to clipboard

Comparison Operators
These operators compare values and return a boolean value of true or false.

==: Returns true or false based on whether the value of two operands are equal.
===: Returns true or false based on whether the value and type of two operands are equal.
!=: Returns true or false based on whether the value of two operands are not equal.
!==: Returns true or false based on whether the value and type of two operands are not equal.
>: Returns true or false based on whether the first value is greater than the second value.
<: Returns true or false based on whether the first value is less than the second value.
>=: Returns true or false based on whether the first value is greater than or equal to the second value.
<=: Returns true or false based on whether the first value is less than or equal to the second value.
Note: The == and === comparison operators are not to be confused with the single equality sign = operator that is used for assignment.

The following example showcases some of these comparison operators:

let tenString = '10';
let numberTen = 10;

console.log(tenString == numberTen);
// Output: true

console.log(tenString === numberTen);
// Output: false

console.log(tenString != numberTen);
// Output: false

console.log(tenString !== numberTen);
// Output: true

Copy to clipboard

Note: The first comparison in the code above yields true even though the variables are of different types. This is because JavaScript uses type coercion by default to evaluate expressions, which may lead to unexpected results. Use the === and !== operators to perform strict type evaluations.

Logical Operators
These operators combine multiple boolean expressions or values to provide a single boolean output:

&& (AND): Returns true if all operands evaluate to true.
|| (OR): Returns true if one or more operands evaluate to true.
! (NOT): Returns the logical opposite of an operand’s boolean value (i.e., !(true) returns false and !(false) returns true).
The following example showcases the usage of logical operators:

const walksLikeADuck = true;
const talksLikeADuck = true;

// AND Operator
let isDuck = walksLikeADuck && talksLikeADuck;

console.log(isDuck);
// Output: true

const isBird = true;
const isPlane = false;

// OR Operator
isDuck = isBird || isPlane;

console.log(isDuck);
// Output: true

// NOT Operator
const isPenguin = !isDuck;

console.log(isPenguin);
// Output: false

Copy to clipboard

Unary Operator
A unary operator, such as the not operator (!), is an operator that is applied to one term or variable. Arithmetic operators are also known as binary operators because they operate on two terms. There are also unary operators in JavaScript that are names rather than symbols, such as the typeof operator.

console.log(typeof 'foo'); // Yields string

Copy to clipboard

Conditional Operator
The conditional, or ternary, operator uses the question mark ? and colon : to assign a value to a variable based on a conditional statement:

variable = condition ? assignedIfTrue : assignedIfFalse;
This operator combines the functionalities of the assignment, comparison, and logical operators.

Multi-Step Ternary Operator Examples
Multiple steps can be performed by a ternary operator, based on certain conditions (similar to an if...else statement).

A key point to consider is where the parentheses (()) are placed.

The following example shows how a ternary operator can conditionally increment numeric values similar to how it’s done in an if...else statement:

let i = true;
let a = 0;
let b = 0;

if (i == true) {
  a++;
  b++;
} else {
  a = 0;
  b = 0;
}

console.log('a = ', a, 'b = ', b);

// The ternary equivalent
i == true ? (a++, b++) : ((a = 0), (b = 0));

console.log('a = ', a, 'b = ', b);

let c = 0;
i == true ? (a++, b++, c++) : ((a = 0), (b = 0), (c = 0));

console.log('a =', a, 'b =', b, 'c =', c);

Copy to clipboard

This will output the following:

a = 1 b = 1
a = 2 b = 2
a = 3 b = 3 c = 1

Copy to clipboard

The following ternary operator will throw a SyntaxError due to how the parentheses are placed:

let i = true;

// This implementation will fail
i == true ? (a++), (b++) : (a = 0), (b = 0);
console.log('a = ', a, 'b = ', b);

Copy to clipboard

This will output:

Output:
i == true ? (a++), (b++) : (a = 0), (b = 0);
                 ^
SyntaxError: Unexpected token ','

Copy to clipboard

Note: The ternary operator and if...else condition performance speeds are roughly the same. Although the ternary operator can help consolidate several lines of code, utilizing it is up to preference.


TYPE COESRCION
Type coercion is the process of converting a value from one data type to another (such as a string to number). It works on both primitive data types and objects. However, it always results in a primitive data type.

Type coercion can be done both implicitly and explicitly. Explicit type coercion is the intentional conversion of a value from one data type to another and is typically done using native constructors such as String() without the new keyword in front of them. There is also implicit type coercion, in which values are converted from one data type to another by JavaScript.


Related learning
Career path
Front-End Engineer
Front-end engineers work closely with designers to make websites beautiful, functional, and fast.
Includes 34 CoursesIncludes 34 Courses
With Professional Certification
With Professional Certification
Beginner Friendly.
Beginner Friendly
115 hours
115 hours
Free course
Learn JavaScript
Learn how to use JavaScript — a powerful and flexible programming language for adding website interactivity.
Beginner Friendly.
Beginner Friendly
15 hours
15 hours
String Type Coercion
To coerce a value into a primitive string value explicitly, the String() function is used. To implicitly coerce a value into a string, the value simply needs to be added to an empty string. When coercing a string, the result is as expected, with the value staying the same, but the data type becomes a string.

Here is an example:

var a = 54.1;

console.log(String(a));
console.log(a + '');

console.log(String(true));
console.log(String(null));

Copy to clipboard

The code above will output:

54.1
54.1
true
null

Copy to clipboard

Number Type Coercion
To explicitly coerce a value into a number, the Number() function is used. A value can be coerced implicitly by using it in a mathematical operation, such as subtracting 0 from it or multiplying it by 1 to not change its value. Implicit coercion will also occur if the value is used with a comparison operator such as <, a bitwise operator such as |, the unary + operator, or with any of the arithmetic operators. It’s important to note that using a comparison operator to coerce a value to a number depends on the type of the operands. For example, if two strings are compared with a comparison operator, they will simply be compared lexicographically, and no type coercion will occur.

Using Number() on booleans gives the expected results of true becoming 1 and false becoming 0. When using Number() on a string, if the string’s value is a valid number, it will successfully be converted into a number. If the string contains any non-numeric characters, the result will be NaN. An empty string returns 0.

Here is an example:

var a = '-76.2';

console.log(Number(a));
console.log(a * 1);

console.log(Number(true));
console.log(Number(null));
console.log(Number(undefined));
console.log(Number('7km'));

Copy to clipboard

The code above will output:

-76.2
-76.2
1
0
NaN
NaN

Copy to clipboard

Boolean Type Coercion
To explicitly coerce a value into a boolean, the Boolean() function is used. A value undergoes implicit coercion when used in a test expression for an if statement, for loop, while loop, or a ternary expression. A value can also undergo implict coercion when used as the left-hand operand to the logical operators (||, &&, and !).

Nearly all possible values will convert into true, but only a handlful will convert into false. The values that will become false are:

undefined
null
false
0
NaN
""
All other values, including objects, when coerced to a boolean, will be converted into true.

Here is an example:

var a = 'lamp';

console.log(Boolean(a));
console.log(!!a);

console.log(Boolean(''));
console.log(Boolean(null));

Copy to clipboard

The code above will output:

true
true
false
false

Copy to clipboard

Loose vs Strict Equals
When using loose equals ==, only the values of the operands are compared. If the values are of different types, one or both of the values will be implicitly coerced. On the other hand, strict equals === will not allow coercion and compares both the value and type of the operands.

Here is an example:

var a = '12';
var b = 12;

console.log(a == b);
console.log(a === b);

Copy to clipboard

The code above will output:

true
false

console.log("2026" - 1969); jelasin juga ini kenapa bisa dikurangi ? jelasin cara kerja javascript sebenarnya 


5. STRING CONCET

.length

6. Methods
7. Built-in-Objects
In addition to console, there are other objects built into JavaScript. Down the line, we’ll build our own 
objects
Preview: Docs Loading link description
, but for now, these built-in objects are full of useful functionality.

For example, if we wanted to perform more complex mathematical operations than arithmetic, JavaScript has the built-in Math object.

The great thing about objects is that they have methods! Let’s call the .random() method from the built-in Math object:

console.log(Math.random()); // Prints a random number between 0 and 1

Copy to Clipboard

In the example above, we called the .random() method by appending the object name with the dot operator, the name of the method, and opening and closing parentheses. This method returns a random number between 0 (inclusive) and 1 (exclusive).

To generate a random number between 0 and 50, we could multiply this result by 50, like so:

Math.random() * 50;

Copy to Clipboard

The example above will likely evaluate to a decimal. To ensure the answer is a whole number, we can take advantage of another useful Math method, Math.floor().

Math.floor() takes a decimal number and rounds it down to the nearest whole number. Math.floor() can be used to round down a random number like this:

Math.floor(Math.random() * 50);

Copy to Clipboard

In this case:

Math.random() generates a random number between 0 and 1.
We then multiply that number by 50, so now we have a number between 0 and 50.
Then, Math.floor() rounds the number down to the nearest whole number.
If we wanted to see the number printed to the terminal, we would still need to use a console.log() statement:

console.log(Math.floor(Math.random() * 50)); // Prints a random whole number between 0 and 50

Copy to Clipboard

To see all of the properties and 
methods
Preview: Docs Loading link description
 on the Math object, take a look at the Math documentation.

8. MATH METHOD, BIKIN PENJELASAN APA SAJA METHOD NYA DAN FUNGSINYA, KALO ADA LAWAN NYA BIKIN JADI 1 KAYAK CEIL DAN FLOOR, MIN DAN MAX


RINGKASAN COURSE
Data is printed, or logged, to the console, a panel that displays messages, with console.log().
We can write single-line 
comments
Preview: Docs Loading link description
 with // and multi-line comments between /* and */.
There are eight fundamental 
data types
Preview: Docs Loading link description
 in JavaScript: numbers, BigInts, 
strings
Preview: Docs Loading link description
, booleans, null, undefined, symbols, and 
objects
Preview: Docs Loading link description
.
Numbers are any number without quotes. For example: 23.8879
Strings are characters wrapped in single or double quotes. For example: 'Sample String'
The built-in arithmetic 
operators
Preview: Docs Loading link description
 include +, -, *, /, and %.
Objects, including instances of data types, can have properties that store information. The properties are denoted with a . after the name of the object, for example: 'Hello'.length.
Objects, including instances of data types, can have 
methods
Preview: Docs Loading link description
 that perform actions. Methods are called by appending the object or instance with a period, the method name, and parentheses. For example: 'hello'.toUpperCase().
We can access properties and methods by using the . (dot operator).
Built-in objects, including Math, are collections of methods and properties that JavaScript provides.
Here are a few more resources to add to your toolkit:

var is used in pre-ES6 versions of JavaScript. It is function scoped.
let is the preferred way to declare a variable when it can be reassigned. It is block scoped.
const is the preferred way to declare a variable with a constant value. It is also block scoped.