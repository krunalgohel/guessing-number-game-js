// store max number from user 
const max = prompt('enter max number');

// create random number between 1 to max number
const random = Math.floor(Math.random() * max) + 1;

// store guess number input from user
let guess = prompt('guess the number');

// infinite loop for prompt input while user is not guess right number or quit the game
while(true) {
    if(guess == 'quit') {
        console.log('game quit');
        break;
    } 
    
    if(guess == random) {  
        console.log("Congrates you guess right number ",random);
        break;
    } else if(guess < random) {
        guess = prompt('Hint: nubmer is too small!! Please try again');
    } else {
        guess = prompt('Hint: nubmer is too large!! Please try again');
    }
}