import {
  CATEGORY_LIST,
  DRINK_TYPE,
  FIRST_LETTER_SEARCH,
  INGREDIENT_SEARCH,
  NAME_SEARCH,
  CATEGORY_SEARCH,
  INGREDIENTS_LIST,
  NACIONALITIES_LIST,
  NACIONALITY_INGREDIENT,
} from '../redux/actions';

const BASE_MEALS = 'https://www.themealdb.com/api/json/v1/';
const BASE_DRINKS = 'https://www.thecocktaildb.com/api/json/v1/';

const mapTypeToPath = {
  [NAME_SEARCH]: 'search.php?s=',
  [INGREDIENT_SEARCH]: 'filter.php?i=',
  [CATEGORY_SEARCH]: 'filter.php?c=',
  [FIRST_LETTER_SEARCH]: 'search.php?f=',
  [CATEGORY_LIST]: 'list.php?c=list',
  [INGREDIENTS_LIST]: 'list.php?i=list',
  [NACIONALITIES_LIST]: 'list.php?a=list',
  [NACIONALITY_INGREDIENT]: 'filter.php?a=',
};

/**
 * @param {Object} options - Opções da pesquisa.
 * @param {"drinks" | "meals"} options.api - Qual API será requisitada
 * @param {"name" | "ingredient" | "category" | "firstletter" | "categoryList" | "ingredientsList" | "nacionalitiesList" | "nacionalityIngredient"} options.searchType - Tipo de pesquisa que será efetuada
 * @param {string | undefined} options.query - Valor da pesquisa
 */
const searchApi = async ({ api, searchType, query, token }) => {
  const BASE_URL = api === DRINK_TYPE ? BASE_DRINKS : BASE_MEALS;
  const SEARCH_TYPE = mapTypeToPath[searchType];
  const QUERY = query ? query.trim() : '';

  const FULL_URL = `${BASE_URL}${token}/${SEARCH_TYPE}${QUERY}`;
  console.log(FULL_URL); // temporario
  try {
    const request = await fetch(FULL_URL);
    const data = await request.json();
    return data[api];
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

async function getRecipe(api, id) {
  const BASE = api === DRINK_TYPE ? BASE_DRINKS : BASE_MEALS;
  const URL = `${BASE}1/lookup.php?i=${id}`;

  try {
    const request = await fetch(URL);
    const data = await request.json();
    return data[api][0];
  } catch (err) {
    console.log(err);
    return null;
  }
}

// Mesma lógica da função de getRecipe, talvez poderiamos unificar elas, fazendo um searchType.
async function getRandomRecipeId(api) {
  const BASE = api === DRINK_TYPE ? BASE_DRINKS : BASE_MEALS;
  const URL = `${BASE}1/random.php`;

  try {
    const request = await fetch(URL);
    const data = await request.json();
    return data[api][0];
  } catch (error) {
    console.log(`Random API: ${error}`);
  }
}

export { searchApi, getRecipe, getRandomRecipeId };
