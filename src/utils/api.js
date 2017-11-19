const API_ID = "3ef37d25"
const APP_KEY = "e5f0fe51867404a899465f5b98ff64e9"

export function fetchRecipes (food = '') {
    food = food.trim()

    return fetch(`https://api.edamam.com/search?q=${food}&app_id=${API_ID}&app_key=${APP_KEY}`)
        .then((res) => res.json())
        .then(({ hits }) => hits.map(({ recipe }) => recipe))
}