import { recipes } from './recipes.mjs';

// Function to get a random number
function getRandomNumber(num) {
    return Math.floor(Math.random() * num);
}

// Function to get a random recipe
function getRandomRecipe() {
    const randomIndex = getRandomNumber(recipes.length);
    return recipes[randomIndex];
}

// Function to generate tags markup
function generateTagsMarkup(tags) {
    return tags.map(tag => `<span class="tag">${tag}</span>`).join("");
}

// Function to generate rating stars markup
function generateRatingStars(rating) {
    const filledStars = '⭐'.repeat(rating);
    const emptyStars = '☆'.repeat(5 - rating);
    return `
        <div
            class="rating"
            role="img"
            aria-label="Rating: ${rating} out of 5 stars"
        >
            ${filledStars}${emptyStars}
        </div>
    `;
}

// Function to generate HTML for a recipe
function generateRecipeHTML(recipe) {
    const defaultImage = "images/defaultRecipe.png";
    return `
        <article class="recipe">
            <img src="${recipe.image || defaultImage}" alt="Image of ${recipe.title || 'Recipe'}">
            <div class="recipe-content">
                <h2>${recipe.title || 'Untitled Recipe'}</h2>
                ${generateRatingStars(recipe.rating || 0)}
                <p>${recipe.description || 'No description available.'}</p>
                <div class="tags">
                    ${generateTagsMarkup(recipe.tags || [])}
                </div>
            </div>
        </article>
    `;
}

// Function to filter recipes by search query
function filterRecipes(query) {
    return recipes.filter(recipe => {
        const searchTerm = query.toLowerCase();
        return (
            recipe.title.toLowerCase().includes(searchTerm) ||
            recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
    });
}

// Function to initialize the page
function init() {
    const recipeList = document.getElementById("recipe-list");
    const randomRecipe = getRandomRecipe();
    recipeList.innerHTML = generateRecipeHTML(randomRecipe);

    // Add click listener to load a random recipe
    document.getElementById("load-random-recipe").addEventListener("click", () => {
        const newRandomRecipe = getRandomRecipe();
        recipeList.innerHTML = generateRecipeHTML(newRandomRecipe);
    });

    // Add submit listener to the search form
    const searchForm = document.getElementById("search-form");
    searchForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the form from refreshing the page
        const query = searchForm.querySelector("input").value;
        const filteredRecipes = filterRecipes(query);

        // If no recipes match the search, display a message
        if (filteredRecipes.length === 0) {
            recipeList.innerHTML = `<p>No recipes found for "${query}".</p>`;
        } else {
            // Otherwise, display the filtered recipes
            recipeList.innerHTML = filteredRecipes.map(generateRecipeHTML).join("");
        }
    });
}

document.addEventListener("DOMContentLoaded", init);
