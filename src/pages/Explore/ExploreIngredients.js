import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';
import routeHelper from '../../services/routeHelper';
import { searchApi } from '../../services/API';
import { INGREDIENTS_LIST } from '../../redux/actions';
import DisplayCard from '../../components/DisplayCard';

const DRINKS_IMG = 'https://www.thecocktaildb.com/';
const FOODS_IMG = 'https://www.themealdb.com/';

function ExploreIngredients() {
  const [ingredients, setIngredients] = useState([]);
  const { recipeType } = useParams();
  const route = routeHelper(recipeType);

  const emptyIngredients = ingredients.length === 0;

  const getIngredientImg = (ingredient) => {
    const urlBase = recipeType === 'drinks' ? DRINKS_IMG : FOODS_IMG;
    return `${urlBase}images/ingredients/${ingredient}-small.png`;
  };

  const getIngredients = async () => {
    const ingredientsReq = await searchApi({
      api: route.currentApiType,
      searchType: INGREDIENTS_LIST,
      token: '1',
    });
    const ingredientKey = recipeType === 'drinks' ? 'strIngredient1' : 'strIngredient';
    const QT_MAX = 12;
    const ingredientsNamesList = ingredientsReq
      .slice(0, QT_MAX)
      .map((ingredient) => ingredient[ingredientKey])
      .reduce((fullData, ingredient) => [
        ...fullData, { title: ingredient, image: getIngredientImg(ingredient) }], []);
    setIngredients(ingredientsNamesList);
  };

  useEffect(() => {
    getIngredients();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header title="Explore Ingredients" enableSearch={ false } />
      <Container className="d-flex flex-wrap justify-content-center pb-5">
        { emptyIngredients
          ? <Loading fullPage />
          : (

            ingredients.map((ingredient, index) => (
              <DisplayCard
                key={ ingredient.title }
                typeCard="ingredient"
                index={ index }
                recipe={ ingredient }
                pathname={ recipeType }
              />
            ))

          )}
      </Container>
      <Footer />
    </>
  );
}

export default ExploreIngredients;
