const BASE_MEALS = 'https://www.themealdb.com/api/json/v1/';
const BASE_DRINKS = 'https://www.thecocktaildb.com/api/json/v1/';

const SEARCH_TYPES = {
  name: 'search.php?s=',
  ingredient: 'filter.php?i=',
  firstletter: 'search.php?f=',
};

/**
 * @param {Object} options - Opções da pesquisa.
 * @param {"drinks" | "meals"} options.api - Qual API será requisitada
 * @param {"name" | "ingredient" | "firstletter"} options.searchType - Tipo de pesquisa que será efetuada
 * @param {string | undefined} options.query - Valor da pesquisa
 */
const searchApi = async ({ api, searchType, query, token }) => {
  const BASE_URL = api === 'drinks' ? BASE_DRINKS : BASE_MEALS;
  const SEARCH_TYPE = SEARCH_TYPES[searchType];
  const QUERY = query ? query.trim() : '';

  const FULL_URL = `${BASE_URL}${token}/${SEARCH_TYPE}${QUERY}`;

  const request = await fetch(FULL_URL);
  const data = await request.json();
  return data[api];
};

const removeThis = () => {};

export { searchApi, removeThis };
