const categoriesList = document.querySelector(`#categories`);
categoriesList.classList.add(`categories-list`);

const categoriesArray = categoriesList.querySelectorAll(`li.item`);

categoriesArray.forEach((category) => {
  const categoryListArray = category.querySelectorAll(`ul`);
  for (const categoryList of categoryListArray) {
    categoryList.classList.add(`category-list`);
  }
});

categoriesArray.forEach((category) => {
  const categoryListItemArray = category.querySelectorAll(`li`);
  for (const categoryListItem of categoryListItemArray) {
    categoryListItem.classList.add(`item-with-border`);
  }
});

console.log(`Number of categories: ${categoriesArray.length}`);
categoriesArray.forEach((category) => {
  const categoryTitle = category.querySelector(`h2`);
  const categoryItemsArray = category.querySelectorAll("ul > li");
  console.log(`Category: ${categoryTitle.textContent}`);
  console.log(`Elements: ${categoryItemsArray.length}`);
});
