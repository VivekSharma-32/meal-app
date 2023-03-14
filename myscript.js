const search = document.getElementById("search");
const submit = document.getElementById("submit");
const clickBtn = document.getElementById("search-btn");
const result = document.getElementById("result-heading");
const meals = document.getElementById("meals ");
const singleMeal = document.getElementById("single-meal");

// event listeners
submit.addEventListener("submit", handleSearchMeal);

// function to handle and search the meal from the api
function handleSearchMeal(e) {
  e.preventDefault();
  const term = search.value;
  fetch(`www.themealdb.com/api/json/v1/1/search.php?s=${term}`).then(
    (response) => response.json()
  );
}
