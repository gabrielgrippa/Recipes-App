import { CATEGORY_LIST, DRINK_TYPE, GET_DRINKS, GET_MEALS, MEAL_TYPE } from '.';
import searchApi from '../../services/API';

const infoDefault = { searchType: CATEGORY_LIST, query: '', token: 1 };

const QT_MAX = 5;

const getDrinks = (drinks) => ({ type: GET_DRINKS, drinks });
const getMeals = (meals) => ({ type: GET_MEALS, meals });

// Filtra os elementos recebidos da API, para retornar um array de strings, sendo somentes as 5 primeiras categorias.
const filterCategories = (data) => data
  .filter((_item, index) => index < QT_MAX)
  .map(({ strCategory }) => strCategory);

const fetchCategories = () => async (dispatch) => {
  try {
    const drinksResponse = await searchApi({ api: DRINK_TYPE, ...infoDefault });
    const mealsResponse = await searchApi({ api: MEAL_TYPE, ...infoDefault });

    dispatch(getDrinks(filterCategories(drinksResponse)));
    dispatch(getMeals(filterCategories(mealsResponse)));
  } catch (error) {
    console.log(`Erro encontrando API MEALS ${error}`);
  }
};

export default fetchCategories;
