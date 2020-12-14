// Simple calculator

// let one = document.querySelector("#button1")
// let two = document.querySelector("#button2")
// let three = document.querySelector("#button3")
// let four = document.querySelector("#button4")
// let five = document.querySelector("#button5")
// let six = document.querySelector("#button6")
// let seven = document.querySelector("#button7")
// let eight = document.querySelector("#button8")
// let nine = document.querySelector("#button9")
// let zero = document.querySelector("#button0")

// let plus = document.querySelector("#button-plus")
// let minus = document.querySelector("#button-minus")
// let mult = document.querySelector("#button-mult")
// let divide = document.querySelector("#button-div")
// let equal = document.querySelector("#button-equal")


let buttons = document.querySelector(".calc")

buttons.addEventListener("click", (event) => {
    let evaluation = document.querySelector("#result-field")
    const { target } = event
    console.log(target.value)

    let push = event.target.value

    if (push === "C") {
        evaluation.innerText = ""
    }
    else if (push !== "=" & push !== undefined) {
        evaluation.innerText += push
    }
    else if (push === "=") {
        evaluation.innerText = eval(evaluation.textContent)
    }
    


    //calculate(num1, num2, operator)
})

buttons.addEventListener("click", (event) => {
    const { target } = event
    target.style.color = randomColor()
})

function randomColor () {
    colorArray = ["red", "blue", "green", "orange", "yellow", "teal", "cyan"]
    return colorArray[Math.floor ( Math.random() * colorArray.length )]
}

// function calculate (num1, num2, op) {
//     let evaluation = document.querySelector(".result").textContent

//     let result = eval(`${num1} ${operator} ${num2}`)
//     evaluation.innerText = result
// }


// simpler calc 2 var

// let opSelect = ["*", "/", "+", "-"]

// let result = document.querySelector("#result")

// let calcForm = document.querySelector("#calc")

// calcForm.addEventListener("submit", function(evt) {
//     evt.preventDefault()
//     console.log("Form submitted")
//     let n1 = document.querySelector("#num1").value
//     let n2 = document.querySelector("#num2").value
//     let operand = document.querySelector("#operator").value

//     calculateResult(n1, n2, operand)
// })

// function calculateResult(num1, num2, operator) {
//     result.innerText = eval(`${num1} ${operator} ${num2}`)
// }