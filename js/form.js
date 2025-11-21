const form = document.getElementById("recipeForm");
const params2 = new URLSearchParams(location.search);
const editId = params2.get("id");

if (editId) {
  document.getElementById("formTitle").innerText = "Edit Recipe";
  loadRecipeForEdit(editId);
}

function loadRecipeForEdit(id) {
  const r = getRecipe(id);
  title.value = r.title;
  description.value = r.description;
  ingredients.value = r.ingredients.join(", ");
  steps.value = r.steps.join(", ");
  prep.value = r.prep;
  difficulty.value = r.difficulty;
  image.value = r.image;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const recipeData = {
    id: editId ? Number(editId) : Date.now(),
    title: title.value,
    description: description.value,
    ingredients: ingredients.value.split(",").map((i) => i.trim()),
    steps: steps.value.split(",").map((i) => i.trim()),
    prep: Number(prep.value),
    difficulty: difficulty.value,
    image: image.value,
  };

  if (editId) updateRecipe(editId, recipeData);
  else addRecipe(recipeData);

  location.href = "index.html";
});
