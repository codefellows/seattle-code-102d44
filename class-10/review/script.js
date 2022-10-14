// structure of function -- DECLARATION
// function functionName(parameters go here){
//   code to execute goes here
// }

// Function DECLARATION
function helloWorld(name) {
  console.log('A new world awaits, ' + name);
}

// Don't forget to INVOKE IT/CALL IT
helloWorld("Kassie")

// Function EXPRESSION <-- also works, but bad things can happen
var helloWorld = function(name) {
  console.log('A new world awaits, ' + name);
}

helloWorld("Kassie");

//                   parameters, extra info the function needs to do its job
function addTwoThings(thing1, thing2){
  // return thing1 + thing2;
}
//     arguments go into the parenthesis
addTwoThings(4, 2);
addTwoThings("hello ", "world");