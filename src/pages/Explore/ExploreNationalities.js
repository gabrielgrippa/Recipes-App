import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SelectNacionalities from '../../components/SelectNacionalities';
import Loading from '../../components/Loading';
import { searchApi } from '../../services/API';
import { NACIONALITIES_LIST } from '../../redux/actions';
import ShowCase from '../../components/ShowCase';
import SearchBar from '../../components/SearchBar';
import loadRecipes from '../../services/loadRecipes';

function ExploreNationalities() {
  const loading = useSelector((state) => state.showcaseReducer.loading);
  const [nacionalities, setNacionalities] = useState([]);

  const history = useHistory();
  const { recipeType } = useParams();
  const dispatch = useDispatch();

  const getNacionalityNames = async () => {
    const nacionalitiesReq = await searchApi({
      api: 'meals',
      searchType: NACIONALITIES_LIST,
      token: '1',
    });
    const nacionalitiesFiltered = nacionalitiesReq
      .map(({ strArea }) => strArea);
    setNacionalities(['All', ...nacionalitiesFiltered]);
  };

  useEffect(() => {
    getNacionalityNames();
    loadRecipes(recipeType, dispatch);
  }, [dispatch, recipeType]);

  if (recipeType !== 'foods') history.push('*');

  return (
    <>
      <Header title="Explore Nationalities" />
      <SearchBar />
      <div className="d-flex flex-wrap justify-content-center">
        <SelectNacionalities nacionalities={ nacionalities } />
        { loading
          ? <Loading fullPage />
          : (
            <ShowCase />
          )}
      </div>

      <Footer />
    </>
  );
}

export default ExploreNationalities;
