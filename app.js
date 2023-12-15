let userInput = parseInt(prompt('ENTER A NUMBER'));

while(!userInput){
    userInput = parseInt(prompt('ENTER A VALID NUMBER'));

}

const number = Math.floor(Math.random() * userInput) + 1;
    userInput = prompt('ENTER FIRST GUESS:');



let counter = 1;

while (parseInt(userInput) !== number) {
 if(userInput === 'q') break;
    userInput = parseInt(userInput)

  if (userInput > number) {
    userInput = prompt('NUMBER IS TOO HIGH, TRY AGAIN');
    counter++;
  }

  else if(userInput < number){
    userInput = prompt('NUMBER IS TOO LOW, TRY AGAIN');
    counter++;
}
  
  else {
    userInput = prompt("invalid guess. please enter a numer or 'q' to quit")
  } 
}

if(userInput === 'q'){
    console.log('OH! YOU QUIT');
}
else{
    console.log(`Congratulations! It took you ${counter} guesses to find the correct number: ${number}`);
}






  