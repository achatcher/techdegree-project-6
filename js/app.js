const qwerty = document.getElementById('qwerty');
const phrase = document.querySelector('#phrase ul');
const startButton = document.querySelector('.btn__reset');
const overlay = document.querySelector('.start');
const winText = document.querySelector('.title');
const ul = document.querySelector('ul');
let missed = 0;
const phrases = [
    "chocolate chip",
    "vanilla bean",
    "blue moon",
    "moose tracks",
    "cake batter",
    "cherry garcia",
    "cookie dough"
];

startButton.addEventListener('click', (e) => {
    overlay.style.display = 'none';
});

function getRandomPhraseAsArray(arr) {
    const randomNumber = Math.floor(Math.random() * phrases.length);
    let Phrase = arr[randomNumber];
    console.log(Phrase);
    return Phrase;
}

const randomPhrase = getRandomPhraseAsArray(phrases);
function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i += 1) {
        let letter = arr[i];
        const li = document.createElement('li');
        const span = document.createElement('span'); 
        li.textContent = letter;
        phrase.appendChild(li);
        if (letter === " ") {
            li.className = 'space';
          } else {
            li.className = 'letter';
        } 
    }
}
addPhraseToDisplay(randomPhrase);

qwerty.addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON' && e.target.className != 'chosen'){
        const button = e.target;
        button.className = 'chosen';
        button.setAttribute("disabled", "");
        const foundLetter = checkLetter(button);
        if (foundLetter === null) {
            const heart = document.querySelectorAll('img');
            heart[missed].setAttribute('src', 'images/lostHeart.png');
            missed ++;
        }
    }
    checkWin();
});

const LILetters = document.querySelectorAll('.letter')
function checkLetter(arr) {
    let match = null;
    for (let i = 0; i < LILetters.length; i += 1) {
        const li = LILetters[i];
        if (li.textContent === arr.textContent) {
            li.classList.add('show');
            li.style.transition = "all .5s ease";
            match = arr.textContent;
        }
    } 
    return match;   
}

function reloadGame() {
    startButton.addEventListener('click', (e) => {
        ul.style.display = 'none';
        location.reload();
    });
}

function checkWin() {
    const LIShow = document.querySelectorAll('.show');
    const LILetter = document.querySelectorAll('.letter');
    if (LILetter.length === LIShow.length) {
        overlay.style.display = 'flex';
        overlay.className='win';
        winText.textContent = 'You Win!';
        startButton.textContent = 'Replay';
    } else if (missed > 4) {
        overlay.style.display = 'flex';
        overlay.className='lose';
        winText.textContent = 'You Lose!';
        startButton.textContent = 'Replay';
    }
    reloadGame();
}

