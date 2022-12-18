const random_cocktail = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
const drinks = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink'

document.addEventListener("DOMContentLoaded",() => {
    
    const createRandomcocktail = (image, name, description) => {
        const cardDiv = document.createElement('div')
        cardDiv.classList.add('card', 'col-12')

        const rowDiv = document.createElement('div')
        rowDiv.classList.add('row')

        const imgDiv = document.createElement('div')
        imgDiv.classList.add('col-6')

        const bodyDiv = document.createElement('div')
        bodyDiv.classList.add('col-6','card-body')

        const cocktailImg = document.createElement('img')
        cocktailImg.classList.add('card-img')
        cocktailImg.src = image

        const cocktailTitle = document.createElement('h5')
        cocktailTitle.classList.add('card-title')
        cocktailTitle.innerText = name

        const cocktailDescription = document.createElement('p')
        cocktailDescription.classList.add('card-text')
        cocktailDescription.innerText = description

        bodyDiv.appendChild(cocktailTitle)
        bodyDiv.appendChild(cocktailDescription)

        imgDiv.appendChild(cocktailImg)

        rowDiv.appendChild(imgDiv)
        rowDiv.appendChild(bodyDiv)

        cardDiv.appendChild(rowDiv)

        return cardDiv
    }

    const createDrink = (image,name) => {
        const cardDiv = document.createElement('div')
        cardDiv.classList.add('card','col-4')

        const categoryImg = document.createElement('img')
        categoryImg.classList.add('card-img-top')
        categoryImg.src = image

        const categoryTitle = document.createElement('h4')
        categoryTitle.classList.add('card-title')
        categoryTitle.innerText = name

        cardDiv.appendChild(categoryImg)
        cardDiv.appendChild(categoryTitle)

        return cardDiv
    }

    const loadrandomcocktail = () => {
        fetch(random_cocktail)
        .then((resp) => resp.json())
        .then((data) => {
            const cocktailData = data.drinks[0]
            const name = cocktailData.strDrink
            const description = cocktailData.strInstructions
            const image = cocktailData.strDrinkThumb
            const cocktailElement = createRandomcocktail(image,name,description)
            document.getElementById('random-cocktail').appendChild(cocktailElement)
        })
    }

    const loadDrinks = () => {
        fetch(drinks) 
        .then((resp) => resp.json())
        .then((data) => {
            const drinksData = data.drinks
            const drinkElements = drinksData.map(
                drnk => createDrink(drnk.strDrinkThumb, drnk.strDrink)
            )
            document.getElementById('cocktail-drinks').append(...drinkElements)
        })
    }

    loadrandomcocktail()
    loadDrinks()

})