import React, { useEffect, useState } from 'react';
import PropType from 'prop-types';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { searchAction } from '../redux/actions/showcaseActions';
import { NACIONALITY_INGREDIENT } from '../redux/actions';
import loadRecipes from '../services/loadRecipes';

function SelectNacionalities({ nacionalities }) {
  const [selectedNacionality, setselectedNacionality] = useState(nacionalities[0]);
  const dispatch = useDispatch();
  const handlerChange = ({ target }) => {
    const { value } = target;
    setselectedNacionality(value);
  };

  useEffect(() => {
    if (selectedNacionality === 'All') {
      loadRecipes('foods', dispatch);
    } else {
      dispatch(
        searchAction({
          api: 'foods',
          searchType: NACIONALITY_INGREDIENT,
          query: selectedNacionality,
        }),
      );
    }
  }, [selectedNacionality, dispatch]);

  return (
    <Form.Control
      as="select"
      data-testid="explore-by-nationality-dropdown"
      value={ selectedNacionality }
      onChange={ handlerChange }
      style={ { width: '95%', margin: '8px 0' } }
    >
      {nacionalities.map((nacionality) => (
        <option
          key={ nacionality }
          data-testid={ `${nacionality}-option` }
          value={ nacionality }
        >
          {nacionality}

        </option>
      ))}
    </Form.Control>
  );
}

SelectNacionalities.propTypes = {
  nacionalities: PropType.arrayOf(PropType.string),
}.isRequired;

export default SelectNacionalities;
