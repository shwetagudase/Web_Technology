const input = document.getElementById("searchInput");
const button = document.getElementById("searchBtn");
const result = document.getElementById("recipeResult");

button.addEventListener("click", () => {
    const food = input.value;

    if (food === "") {
        result.innerHTML = " Enter food name";
        return;
    }

    getRecipe(food);
});
input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        button.click();
    }
});
const toggleBtn = document.getElementById("toggleMode");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        toggleBtn.textContent = "☀️";
    } else {
        toggleBtn.textContent = "🌙";
    }
});

async function getRecipe(food) {
    try {
        result.innerHTML = "Loading...";

        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`
        );

        const data = await response.json();

        if (data.meals === null) {
            result.innerHTML = " Recipe not found";
            return;
        }
        result.innerHTML=" ";

        data.meals.forEach(meal => {
            result.innerHTML += `
            <h2>${meal.strMeal}</h2>
            <img src="${meal.strMealThumb}">
            <p><b>Category:</b> ${meal.strCategory}</p>
            <p><b>Area:</b> ${meal.strArea}</p>
            <p>${meal.strInstructions.substring(0, 150)}...</p>
        `;
        });
    } catch (error) {
        result.innerHTML = " Error fetching recipe";
    }
}