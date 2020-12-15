const displayDiv = document.createElement('div')
displayDiv.className = "display"
document.body.append(displayDiv)
displayDiv.textContent = "0"
displayDiv.style.color = "green"

const display = displayDiv 
const keyDiv = document.createElement('div')
keyDiv.className = "keys"
document.body.append(keyDiv)

calBtns = [
    {   use: "1"
    },
    {   use: "2"
    },
    {   use: "3"
    },{   use: "4"
    },{   use: "5"
    },{   use: "6"
    },{   use: "7"
    },{   use: "8"
    },{   use: "9"
    },{   use: "0"
    },{   use: "+"
    },{    use: "-"
    },{   use: "AC"
    },{   use: "="
    },{   use: "*"
},{   use: "/"
},{   use: "."
}
]

calBtns.forEach(function (calObj) {
    let btn = document.createElement('button')
    btn.textContent = calObj.use
    keyDiv.append(btn)
})

keyDiv.addEventListener('click', e => {
    if (e.target.matches('button')) {
    const key = e.target 
const keyContent = key.textContent
const displayedNum  = display.textContent 
if (displayedNum === "0") {
    display.textContent = keyContent
} else {
    display.textContent = displayedNum + keyContent 
}
if (keyContent === "7") {
    display.style.color = "orange"
}
if (keyContent === "3") {
    display.style.color = "pink"
}
 }
})

keyDiv.addEventListener('keydown', e => {
    const key = e.target
    const keyValue = e.key
    // debugger
    const displayedNum = display.textContent
    if (displayedNum === "0") {
            display.textContent = keyValue
        } else {
            display.textContent = displayedNum + keyValue 
        }
        if (keyValue === "0") {
            display.style.color = "blue"
        }
        if (keyValue === "Backspace") {
            display.style.color = "red"
        }
})
