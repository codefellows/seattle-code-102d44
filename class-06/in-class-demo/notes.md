# JavaScript notes

## Data Types

* Numbers (integers): `5, 6, 7, 42, 3001,` 
* Strings (text, surrounded with quotation marks): `'hello world', '42', 'Kassie',`
* Boolean: `true/false` - often used as an on/off switch
* Arrays -- WE WON'T BE TALKING ABOUT THESE

---

## Basic Commands for Using JavaScript

* `console.log` - prints a message to the console
* `prompt()` - asks the user to enter input
* `alert()` - pops up a box to give the user a message
* `document.write()` - writes Javascript to your HTML document

---

## Variables

* Variables are containers for storing data
* Variables must be declared when you create them:
  * `let` - variable CAN be changed
  * `const` - variable can NOT be changed
  * `var` - old way, we won't use this
  * `(none)` - we won't use this

* EXAMPLES:

  * ```JS
    let sum = 5 + 5; // Declare a variable with LET keyword
    console.log(sum); // Print the value of the variable to the console
    sum = 42; // reassign variable to hold new value
    console.log(sum); // print new value

    
    const thisSum = 5 + 5; // Declare a variable with CONST keyword
    console.log(thisSum); // Print value of the variable to console
    thisSum = 42; // Try to reassign a constant variable, code will break
    console.log(thisSum); // <-- won't ever see this

## Conditional Logic (if/else)

```js
if (this is true){
  execute this code;
} else if (this is true) {
  execute this code;
} else {
  execute this code;
}
```

Example 1: 

```js
if (usersName == "Kassie"){
  document.write("Hiya Teach!");
} else if (usersName == "Ben"){
  document.write("TAs are the best!");
} else {
  document.write("Welcome to my page, " + usersName + "!") // chaining strings and variables together like this is called STRING CONCATENATION
}
```

Example 2:

```js
let guess = prompt("What number am I thinking? 0-50"); // ask the user to guess a number

if(guess == 42){ // is their guess the number we're thinking?
  console.log("You are correct!"); // tell them they are right
} else if (guess < 42){ // is their guess less than our number?
  console.log("That's too low!"); // tell them they are too low
} else if (guess > 42){ // is their guess greater than our number?
  console.log("That's too high!"); // tell them they are too high
} else { // for literally ANYTHING else
  console.log("I have no idea what that is..."); // still give them a message
}
```

---

## References to use for JavaScript

[replit - use the Node.js one for pure JavaScript](https://replit.com/~)
