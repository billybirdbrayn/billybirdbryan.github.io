
let qwerty = document.getElementById("qwerty");
let phrase = document.getElementById("phrase");
let overlay = document.getElementById("overlay");

let unorderList = phrase.firstElementChild;
let li = unorderList.children;

let attempts = 0;
let gameInit = document.getElementsByClassName('btn__reset')[0];

let phrases = ["Let it be",
    "I write the songs",
    "I believe in love",
    "What a fool believes",
    "Born in the USA"
];

function getRandomPhraseAsArray(arr) {

    let length = arr.length - 1;
    let selection = randomNumber(0, length);
    let phraseSelected = arr[selection];
    let letters = phraseSelected.split('');
    return letters;
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addPhraseToDisplay(phraseArray) {
    let numberOfLetters = phraseArray.length;
    let phraseLI = '';
    for (let i = 0; i < phraseArray.length; i++) {
        if (phraseArray[i] != ' ') {
            phraseLI += "<li class=\"letter\">" + phraseArray[i] + "</li>";
        } else {
            phraseLI += "<li class=\"space\">" + phraseArray[i] + "</li>";
        }
    }
    phrase.innerHTML = phraseLI;
}

function checkLetter(guess) {

    var letterInPhrase = document.getElementsByClassName("letter");
    var search = 0;

    for (var i = 0; i < letterInPhrase.length; i++) {
        var letter = letterInPhrase[i].innerHTML.toUpperCase();

        guess = guess.toUpperCase();
        if (letter === guess) {
            letterInPhrase[i].className += ' show';
            search = 1;
        }
    }

    if (search) {
        return letter;
    } else {
        return null;
    }
}

function checkWin() {

    let lettersLength = document.getElementsByClassName("letter").length;
    let lettersDisplayed = document.getElementsByClassName("show").length;

    if (lettersLength === lettersDisplayed) {

        overlay.className = 'win';
        overlay.style.opacity = 1;
        overlay.style.height = '100%';
        endGame = 1;
    } else if (attempts == 5) {

        overlay.style.opacity = 1;
        overlay.style.height = '100%';
        overlay.className = 'lose';
        endGame = 1;
    }
}

function reset() {
    let buttons = document.getElementsByTagName("button");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("chosen");
        buttons[i].disabled = false;
    }
    let hearts = document.getElementsByClassName("tries");
    for (let j = 0; j < hearts.length; j++) {
        document.getElementsByClassName("tries")[j].firstChild.src = "images/liveHeart.png";
    }
    attempts = 0;
}

gameInit.addEventListener('click', function (event) {
    overlay.style.opacity = 0;
    reset();
    const phraseArray = getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(phraseArray);
    endGame = 0;
});

overlay.addEventListener('transitionend', function (event) {
    if (endGame === 0) {
        overlay.style.height = 0;
    }
});

qwerty.addEventListener('click', function (e) {

    let button = e.target;

    if (button.className !== "keyrow") {
        let keyPress = button.innerHTML;
        button.disabled = true;
        button.className += ' chosen';
        letterFound = checkLetter(keyPress);

        if (letterFound === null) {
            document.getElementsByClassName("tries")[attempts].firstChild.src = "images/lostHeart.png";
            attempts++;
        }

        checkWin();
    }
});