function addTwoNumbers(firstNumber, secondNumber) {
  let sum = firstNumber + secondNumber;
  console.log(sum);
}

function greetUser(){
  let usersName = prompt("What is your name?");
  if (usersName == ""){
    usersName = prompt("No really, please tell me your name!");
  }
  document.write("Hello " + usersName + ", welcome to my page!");
  return usersName;
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