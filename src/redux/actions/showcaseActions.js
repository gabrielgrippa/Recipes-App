import {
  DRINK_TYPE,
  TOGGLE_SEARCH_BAR,
  SET_SHOWCASE_ITEMS,
  MEAL_TYPE, PATH_FOODS,
  RECIPES_LOADING,
  EXPLORE_INGREDIENTS,
} from '.';

import { searchApi } from '../../services/API';

import recipeNormalizer from '../../services/recipeNormalizer';
import routeHelper from '../../services/routeHelper';

const loadingRecipes = (state) => ({ type: RECIPES_LOADING, state });

const exploreIngredients = (state) => ({ type: EXPLORE_INGREDIENTS, state });

const searchAction = (options) => async (dispatch) => {
  dispatch(loadingRecipes(true));
  const request = await searchApi({
    ...options,
    api: options.api === PATH_FOODS ? MEAL_TYPE : DRINK_TYPE,
    token: 1,
  });
  const route = routeHelper(options.api);
  const QT_MAX = 12;
  const MAX_RECIPES = request ? request.slice(0, QT_MAX) : [];
  const normalizedRecipes = MAX_RECIPES
    .reduce(
      (recipes, recipe) => [
        ...recipes, recipeNormalizer(route.currentApiType, recipe)], [],
    );
  dispatch({
    type: SET_SHOWCASE_ITEMS,
    payload: normalizedRecipes });
};

const toggleSearchBar = { type: TOGGLE_SEARCH_BAR };

export { searchAction, toggleSearchBar, loadingRecipes, exploreIngredients };
