function addTwoNumbers(firstNumber, secondNumber) {
  let sum = firstNumber + secondNumber;
  console.log(sum);
}

function greetUser(){
  let usersName = prompt("What is your name?");
  // if (usersName == ""){
  //   usersName = prompt("No really, please tell me your name!");
  // }
  while (usersName == ""){
    usersName = prompt("No really, please tell me your name!");
  }
  document.write("Hello " + usersName + ", welcome to my page!");
  return usersName;
}

function guessFavColor(){
  let userGuess = prompt("Guess my fav color?");
  while (userGuess !== "yellow"){
    userGuess = prompt("Wrong! Guess again.");
    }
}

function askFood(){
  let foodAnswer = prompt("Do you like food?");
        if (foodAnswer == "yes") {
          document.write("I'm glad you like food too " + yourName + "!");
        } else if (foodAnswer == "no") {
          document.write("How do you survive then " + yourName + "?!?!?!?!");
        } else {
          document.write("I'm not sure what you mean by that " + yourName + "...");
        }
}

function rateMyPage(){
  let rating = prompt("What rating would you give my page? 1-5");

  for (let i = 0; i < rating; i++){
    document.write("<img class='star-pic' src='star.jpeg' alt='bright shiny yellow star' />");
  }
}

