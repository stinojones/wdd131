import { recipes } from './recipes.mjs';

document.addEventListener('DOMContentLoaded', () => {
    const recipeList = document.getElementById('recipe-list');

    recipes.forEach(recipe => {
        const recipeCard = document.createElement('article');
        recipeCard.className = 'recipe';

        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <div class="recipe-content">
                <h2>${recipe.title}</h2>
                <div
                    class="rating"
                    role="img"
                    aria-label="Rating: ${recipe.rating} out of 5 stars"
                >
                    ${'⭐'.repeat(recipe.rating)}${'☆'.repeat(5 - recipe.rating)}
                </div>
                <p>${recipe.description}</p>
            </div>
        `;

        recipeList.appendChild(recipeCard);
    });
});