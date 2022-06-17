
const optionContainer = document.querySelector("#exampleDataList")
const recipeContainer = document.querySelector(".recipe-container")
const searchBtn = document.querySelector(".search-btn")
const randomBtn = document.querySelector(".random-btn")


async function getRecipes() {
    recipeContainer.innerHTML = ""
    setTimeout(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '8a3ac3aa56mshbf53916dd8af048p146420jsn78a0b7ccb0e5',
                'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
            }
        };

        fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=100', options)
            .then(response => response.json())
            .then(response => {
                showRecipes(response.recipes)

            })
            .catch(err => console.error(err));

    }, 500);
}

function showRecipes(recipes) {
    // let ingredientArray = []
    console.log(recipes)
    shuffleArray(recipes)

    let recipeData = recipes.slice(0, 4)

    let indivRecipes = recipeData.map((recipe) => {
        console.log(recipe)

        let instructions = recipe.instructions
        let summary = recipe.summary
        let title = recipe.title
        let servings = recipe.servings
        let time = recipe.readyInMinutes
        let id = recipe.id
        let dishType = recipe.dishTypes
        let image = recipe.image
        let ingredientArray = recipe.extendedIngredients
        // let indivIngredients = ingredientArray.map((ingr) => {
        //     let ingredientItems = ingr.original
        //     // console.log(ingredient)

        //     ingredientArray.push(ingredientItems)

        // })
        // console.log(image)
        // console.log(ingredientArray)


        // })


        let newRecipeContainer = document.createElement("li")
        recipeContainer.appendChild(newRecipeContainer)
        newRecipeContainer.setAttribute("class", "container newRecipeContainer")
        // recipeContainer.appendChild(newRecipe)

        let imageDiv = document.createElement("div")
        newRecipeContainer.appendChild(imageDiv)
        imageDiv.classList.add("image-div")

        let recipeImage = document.createElement("img")
        recipeImage.src = `${image}`
        recipeImage.classList.add("recipe-img")
        imageDiv.appendChild(recipeImage)

        let recipeContent = document.createElement("div")
        newRecipeContainer.appendChild(recipeContent)
        recipeContent.classList.add('recipeContent')



        let recipeTitle = document.createElement("h3")
        recipeTitle.innerHTML = `${title}`
        recipeTitle.classList.add("title")
        recipeContent.appendChild(recipeTitle)

        let subContent = document.createElement("div")
        recipeContent.appendChild(subContent)
        subContent.classList.add('subContent')

        let recipeServings = document.createElement("p")
        recipeServings.innerHTML = `Number of Servings: ${servings}`
        recipeServings.classList.add('servings')
        subContent.appendChild(recipeServings)

        let recipeTime = document.createElement("p")
        recipeTime.innerHTML = `Time: ${time} minutes`
        recipeTime.classList.add('time')
        subContent.appendChild(recipeTime)

        // let recipeSummary = document.createElement("p")
        // recipeSummary.innerHTML = `${summary}`
        // recipeContent.appendChild(recipeSummary)
        // let ingredientContainer = document.createElement("ul")
        // recipeContent.appendChild(ingredientContainer)

        // let ingredientItem = document.createElement("li")
        // ingredientItem.innerHTML = `${ingredientArray}`
        // ingredientContainer.appendChild(ingredientItem)

        let recipeInstructions = document.createElement("p")
        recipeInstructions.innerHTML = `${instructions}`
        recipeInstructions.classList.add('instructions')
        recipeContent.appendChild(recipeInstructions)

    })
}
function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }
    return array
}

