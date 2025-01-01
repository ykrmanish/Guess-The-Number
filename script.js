'use strict' 

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let guess;
let score = 20
let highscore = 0

const displayMessage = function(message){
    document.querySelector('#message').textContent = message;

}

const startCondition = function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.hidden-number').textContent = '?';
    document.querySelector('#message').textContent = '😊 Start Guessing';
    document.querySelector('#score').textContent = `💯 Score: ${score}`;
    document.querySelector('.highscore').textContent = highscore
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = "";
}



document.querySelector('.check').addEventListener('click',function(){
    guess = Number(document.querySelector('.number').value);
    console.log(guess);

    if(!guess){
        document.querySelector('#message').textContent = '⛔ No Number'
    }

    else if(guess < 1 || guess > 20){
         document.querySelector('#message').textContent = '❌ Number Should be between 1 and 20'
    }
    else if(guess !== secretNumber){
        if (score < 1) {
            document.querySelector('#message').textContent = '😔 Game Over!' 
        }
        else{
            displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!')
            score--;
            document.querySelector('#score').textContent = `💯 Score: ${score}`
        }
    }

    else if(guess === secretNumber){
        document.querySelector('#message').textContent = '✔️ Correct'
        document.querySelector('body').style.backgroundColor = '#A8CD89'
        document.querySelector('.number').style.backgroundColor = '#EEEEEE'
        document.querySelector('.hidden-number').textContent = secretNumber
        if (score > highscore){
            highscore = score
            document.querySelector('.highscore').textContent = highscore

        }
    }


})


document.querySelector('.again').addEventListener('click', startCondition)

startCondition();




