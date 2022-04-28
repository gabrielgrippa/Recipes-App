import { GET_DRINKS, GET_MEALS } from '.';
import { searchApi } from '../../services/API';

const infoDefault = { searchType: 'categoryList', query: '', token: 1 };

const QT_MAX = 5;

const getDrinks = (drinks) => ({ type: GET_DRINKS, drinks });
const getMeals = (meals) => ({ type: GET_MEALS, meals });

// Filtra os elementos recebidos da API, para retornar um array de strings, sendo somentes as 5 primeiras categorias.
const filterCategories = (data) => data
  .filter((_item, index) => index < QT_MAX)
  .map(({ strCategory }) => strCategory);

const fetchCategories = () => async (dispatch) => {
  try {
    const drinksResponse = await searchApi({ api: 'drinks', ...infoDefault });
    const mealsResponse = await searchApi({ api: 'meals', ...infoDefault });

    dispatch(getDrinks(filterCategories(drinksResponse)));
    dispatch(getMeals(filterCategories(mealsResponse)));
  } catch (error) {
    console.log(`Erro encontrando API MEALS ${error}`);
  }
};

export default fetchCategories;
