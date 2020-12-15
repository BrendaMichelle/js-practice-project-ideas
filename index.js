let drinksArray = [
    {
        image:  "https://miro.medium.com/max/10020/0*pVTtTdJA65mVudPx",
        description: "This drink is pretty but not great"
    },

    {
        image:  "https://hips.hearstapps.com/del.h-cdn.co/assets/15/38/1442432590-delish-halloween-cocktails-sweet-poison.png",
        description: "Yummers!"
    },

    {
        image:  "https://www.homemadefoodjunkie.com/wp-content/uploads/2020/01/Bacardi-Cocktail-on-table-735x734.jpg",
        description: "OOOOOh SPICY!!!!!!!!!"
    },
]

let logo = document.querySelector("#logo")

logo.addEventListener("click", function(evt) {
    evt.target.style.color = "blue"
})

let drinkButton = document.querySelector("#drinkButton")

drinkButton.addEventListener("click", function(evt) {
    if (drinksArray.length > 0) {
        let drink = drinksArray.pop()

        drinkToHTML(drink.image, drink.description)
    } else {
        drinkButton.textContent = "No Drinks Left! :("
    }
       
})


let newDrinkForm = document.querySelector("form#newDrinkForm")

newDrinkForm.addEventListener("submit", function(evt) {
    evt.preventDefault()

    let drinkImage = evt.target.image.value
    let drinkDescription = evt.target.description.value

    drinkToHTML(drinkImage, drinkDescription)

    evt.target.reset()
})

function drinkToHTML(drinkURL, drinkDescription) {
    let outerDiv = document.createElement("div")
        outerDiv.className = "post"

    let h4 = document.createElement("h4")
        h4.className = "description"
        h4.textContent = drinkDescription

    let innerDiv = document.createElement("div")
        innerDiv.className = "image"

    let img = document.createElement("img")
        img.src = drinkURL

    innerDiv.append(img)
    outerDiv.append(innerDiv, h4)

    let outerMostDiv = document.querySelector(".postHolder")
    outerMostDiv.append(outerDiv)
}


/* <div class="postHolder">
        <div class="post">
            <div class="image">
                <img src="https://content.hy-vee.com/remote.axd/3f4c2184e060ce99111b-f8c0985c8cb63a71df5cb7fd729edcab.ssl.cf2.rackcdn.com/media/15072/rainbowparadisecocktail.jpg?v=1&mode=crop&width=800&height=640&upscale=false">
            </div>
            <h4 class="description">This Drink was delish</h4>
        </div>
    </div> */