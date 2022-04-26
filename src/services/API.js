const mealsURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const drinksURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const mealsData = async () => {
  const response = await fetch(mealsURL);
  const data = await response.json();
  return data;
};

export const drinksData = async () => {
  const response = await fetch(drinksURL);
  const data = await response.json();
  return data;
};
