const grid = document.getElementById("recipeGrid");
const searchInput = document.getElementById("searchInput");
const difficultyFilter = document.getElementById("difficultyFilter");

function renderRecipes() {
  const recipes = getRecipes();
  let filtered = recipes;

  const search = searchInput.value.toLowerCase();
  filtered = filtered.filter((r) => r.title.toLowerCase().includes(search));

  if (difficultyFilter.value !== "all") {
    filtered = filtered.filter((r) => r.difficulty === difficultyFilter.value);
  }

  grid.innerHTML = filtered
    .map(
      (r) => `
        <div class="card" onclick="location.href='recipe.html?id=${r.id}'">
            <img src="${r.image || "https://via.placeholder.com/300"}">
            <h3>${r.title}</h3>
            <p>${r.description.substring(0, 60)}...</p>
            <small>${r.difficulty} • ${r.prep} mins</small>
        </div>
    `
    )
    .join("");
}

searchInput.addEventListener("input", renderRecipes);
difficultyFilter.addEventListener("change", renderRecipes);

renderRecipes();
