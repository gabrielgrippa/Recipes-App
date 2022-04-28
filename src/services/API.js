const BASE_MEALS = 'https://www.themealdb.com/api/json/v1/';
const BASE_DRINKS = 'https://www.thecocktaildb.com/api/json/v1/';

export const DRINK_TYPE = 'drinks';
export const MEAL_TYPE = 'meals';

export const INGREDIENT_SEARCH = 'ingredients';
export const NAME_SEARCH = 'name';
export const FIRST_LETTER_SEARCH = 'firstletter';

const mapTypeToPath = {
  [NAME_SEARCH]: 'search.php?s=',
  [INGREDIENT_SEARCH]: 'filter.php?i=',
  [FIRST_LETTER_SEARCH]: 'search.php?f=',
};

/**
 * @param {Object} options - Opções da pesquisa.
 * @param {"drinks" | "meals"} options.api - Qual API será requisitada
 * @param {"name" | "ingredient" | "firstletter"} options.searchType - Tipo de pesquisa que será efetuada
 * @param {string | undefined} options.query - Valor da pesquisa
 */
export const searchApi = async ({ api, searchType, query, token }) => {
  const BASE_URL = api === DRINK_TYPE ? BASE_DRINKS : BASE_MEALS;
  const SEARCH_TYPE = mapTypeToPath[searchType];
  const QUERY = query ? query.trim() : '';

  const FULL_URL = `${BASE_URL}${token}/${SEARCH_TYPE}${QUERY}`;

  const request = await fetch(FULL_URL);
  const data = await request.json();
  return data[api];
};
