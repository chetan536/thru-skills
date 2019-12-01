let inpt = document.querySelector('#guessField');
let sbmtBtn = document.querySelector('.guessSubmit');
let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');

let randomNumber = parseInt(Math.random() * 100);
let counter = 1;

function playGame() {
    let value = parseInt(inpt.value);
    if(counter == 1) {
        guesses.innerText += `Previous Guesses: `;
    }

    if(counter == 10) {
        // Game Over
        guesses.innerText += ` ${value} `;
        sbmtBtn.disabled = true;
        lastResult.innerText = 'Wrong';
        lastResult.style.backgroundColor = 'red';
        lowOrHi.innerText = 'Game Over'
        startNewGame()
    }
    else if(value == randomNumber) {
        // Guessed the correct Value
        guesses.innerText += ` ${value} `;
        sbmtBtn.disabled = true;
        lastResult.innerText = 'You guessed it correct';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.innerText = '';
        startNewGame()

    }else {
        guesses.innerText += ` ${value}`;
        lastResult.innerText = 'Wrong';
        lastResult.style.backgroundColor = 'red';
        if(value > randomNumber) {
            lowOrHi.innerText = 'Value is too High'
        }else {
            lowOrHi.innerText = 'Value is too Low'
        }
    }

    counter++;
    inpt.value = '';
    inpt.focus();

}

function resetGame() {
    randomNumber = parseInt(Math.random() * 100);
    counter = 1;
    guesses.innerText = ``;
    lastResult.style.backgroundColor = '';
    sbmtBtn.disabled = false;
    lastResult.innerText = '';
    lowOrHi.innerText = ''
    // strtBtn.remove();
    // console.log(this);
    document.body.removeChild(this);
}

function startNewGame() {
    // Logic to start New Game
    let strtBtn = document.createElement('button');
    strtBtn.innerText = 'Start New Game';
    strtBtn.onclick = resetGame;
    document.body.appendChild(strtBtn);
}

sbmtBtn.onclick = playGame;