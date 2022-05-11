// Get the element with the id of qwerty and save it to a variable.
const qwerty = document.getElementById('qwerty');

// Get the element with the id of phrase and save it to a variable.
const phrase = document.getElementById('phrase');

//Get the element with a class of btn__reset and save it to a variable
const startButton = document.getElementsByClassName('btn__reset');

//Create a missed variable, initialized to 0, that you’ll use later to keep track of the number of guesses the player has missed
let missed = 0;

//Declare and initialize the phrases array, storing at least five strings that contain only letters and spaces, no punctuation.
const phrases = [
    "If you suspect deceit hit delete",
    "Think before you click",
    "If you see something say something",
    "Amateurs hack systems professionals hack people",
    "Its not data but people being eploited"
];

// listen for the start game button to be pressed
startButton[0].addEventListener('click', (e) => {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
});
const randomNumber = Math.floor(Math.random() * phrases.length);
// return a random phrase from an array
function getRandomPhraseAsArray(arr) {
    let Phrase = arr[randomNumber];
    console.log(Phrase);
    return Phrase;
}
randomPhrase = getRandomPhraseAsArray(phrases);
function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i += 1) {
        let letter = arr[i];
        const li = document.createElement('li');
        const span = document.createElement('span');  
        span.textContent = letter;
        li.appendChild(span);
        phrase.appendChild(li);
    }
}
addPhraseToDisplay(randomPhrase);
// adds the letters of a string to the display
// const addPhraseToDisplay = arr => {
    
// }

// check if a letter is in the phrase
// const checkLetter = arr => {
    
// }

// check if the game has been won or lost
// const checkWin = arr => {
    
// }


// listen for the onscreen keyboard to be clicked
// qwerty.addEventListener('click', (e) => {

// });