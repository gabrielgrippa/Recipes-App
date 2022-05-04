import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';
import routeHelper from '../../services/routeHelper';
import { searchApi } from '../../services/API';
import { INGREDIENTS_LIST } from '../../redux/actions';

function ExploreIngredients() {
  const [ingredients, setIngredients] = useState([]);
  const { recipeType } = useParams();
  const route = routeHelper(recipeType);

  const emptyIngredients = ingredients.length === 0;

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
      .map((ingredient) => ingredient[ingredientKey]);
    setIngredients(ingredientsNamesList);
  };

  useEffect(() => {
    getIngredients();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Header title="Explore Ingredients" enableSearch={ false } />
      { emptyIngredients
        ? <Loading fullPage /> : 'teste'}
      <Footer />
    </Container>
  );
}

export default ExploreIngredients;
