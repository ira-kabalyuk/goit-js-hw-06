const numberOfCategories = document.querySelectorAll(".item").length;

console.log(`Number of categories: ${numberOfCategories}`);


const categories = document.querySelectorAll(".item");

for (let i = 0; i < categories.length; i += 1) { 
  const categorie = categories[i];
  const categorieTitleContent = categorie.querySelector("h2").textContent;
  console.log(`Category: ${categorieTitleContent}`);
  const numberOfCategorieItem = categorie.querySelectorAll("li").length;
  console.log(`Elements: ${numberOfCategorieItem}`);
}

