const title = document.getElementById("title")
title.style.color = "#00FFFF"

const body = document.querySelector("body")

const words = ["bottle", "map", "rock", "michelle"]

function randomWords() {
   let random =  words[Math.floor(Math.random() * words.length)]
   return random
}

newGame()
let prevLetters = []
function newGame() {
    let life = 3
    let p = document.createElement('p')
    let lifeP = document.createElement('p')
    let form = document.createElement('Form')
    let currentWord = randomWords()
    // p.textContent = createLines(currentWord.length).join(" ")
    p.textContent = createLines(currentWord)
    lifeP.textContent = life
    let input = document.createElement("INPUT");
    input.setAttribute("type", "text");
    input.name = "letter"
    form.append(input)


    body.lastChild.remove()
    body.append(p)
    body.append(form)
    body.append(lifeP)
    
    
    
    form.addEventListener("submit", function(e) {
        e.preventDefault()
        const currentWordArray = currentWord.split("")
        const letterValue = form.letter.value
        if (currentWordArray.includes(form.letter.value)) {
            let valueIndexes = getAllIndexes(currentWordArray, letterValue)
            // keep track of current guesses and what correct guesses are
            // everytime correct letter is guessed
            if (!isArrayInArray(prevLetters, updateLetter(currentWord, valueIndexes, letterValue))) {
                prevLetters.push(updateLetter(currentWord, valueIndexes, letterValue))
                p.textContent = combineGuesses(prevLetters)
                console.log(prevLetters)
            } else {
                alert("Letter already picked")
            }
        } else {
            life -= 1
            lifeP.textContent = life
            alert("Wrong Letter")
        }

        if (life == 0) {
            alert("you lose")
            body.lastChild.remove()
            body.querySelector("p").remove()
            newGame()
        }
        e.target.reset()
    })
}

function createLines(word) {
    let wordArr = word.split("")

    let dashes = []
    for (let i = 0; i < wordArr.length; i++) {
        dashes.push("_");
    }
    return dashes.join(" ")

}

function updateLetter(word, letterIndexes, letterValue) {
    let wordArr = word.split("")

    let dashes = []
    for (let i = 0; i < wordArr.length; i++) {
        dashes.push("_");
    }
    for (let a = 0; a < letterIndexes.length; a++) {
        dashes[letterIndexes[a]] = letterValue
    }
    return dashes
    
}

function getAllIndexes(arr, val) {
    let indexes = [], i = -1;
    while ((i = arr.indexOf(val, i + 1)) != -1) {
        indexes.push(i);
    }
    return indexes;
}

function combineGuesses(guessesArray){
    let combinedWord = arrayDashes(guessesArray)
    for (let g = 0; g < guessesArray.length; g++) {
        for (let cw = 0; cw < guessesArray[g].length; cw++) {
            if (guessesArray[g][cw] !== " " & guessesArray[g][cw] !== "_" ){
                combinedWord[cw] = guessesArray[g][cw] 
            }
        }
    }
    return combinedWord.join(" ")
}


function arrayDashes(array) {
    dashes = []
    for (let i = 0; i < array[0].length; i++) {
        dashes.push("_");
    }
    return dashes
}

function isArrayInArray(arr, item) {
    let item_as_string = JSON.stringify(item);

    let contains = arr.some(function (ele) {
        return JSON.stringify(ele) === item_as_string;
    });
    return contains;
}