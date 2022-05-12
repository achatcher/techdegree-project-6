// Get the element with the id of qwerty and save it to a variable.
const qwerty = document.getElementById('qwerty');

// Get the element with the id of phrase and save it to a variable.
const phrase = document.querySelector('#phrase ul');

//Get the element with a class of btn__reset and save it to a variable
const startButton = document.getElementsByClassName('btn__reset');

//Create a missed variable, initialized to 0, that you’ll use later to keep track of the number of guesses the player has missed
let missed = 0;

//Declare and initialize the phrases array, storing at least five strings that contain only letters and spaces, no punctuation.
const phrases = [
    "chocolate chip",
    "vanilla bean",
    "blue moon",
    "moose tracks",
    "cake batter",
    "cherry garcia",
    "cookie dough"
];

const randomNumber = Math.floor(Math.random() * phrases.length);

// listen for the start game button to be pressed
startButton[0].addEventListener('click', (e) => {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
});

// return a random phrase from an array
function getRandomPhraseAsArray(arr) {
    let Phrase = arr[randomNumber];
    console.log(Phrase);
    return Phrase;
}
// adds the letters of a string to the display
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

//check if a letter is in the phrase
function checkLetter(arr) {
    const LILetters = document.querySelectorAll('.letter')
    let match = null;
    // console.log(letters);
    for (let i = 0; i < LILetters.length; i += 1) {
        if (LILetters[i].textContent === arr.textContent) {
            LILetters[i].classList.add('show');
            match = arr.textContent;
        }
    }
    return match;   
}

// listen for the onscreen keyboard to be clicked
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
        } else {

        }
    }
});