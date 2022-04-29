import React, { useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { searchAction } from '../redux/actions/showcaseActions';
import { FIRST_LETTER_SEARCH, INGREDIENT_SEARCH, NAME_SEARCH } from '../redux/actions';

function SearchBar() {
  const [form, updateForm] = useState({ input: '', searchType: 'name' });
  const dispatch = useDispatch();
  const searchBar = useSelector((state) => state.showcaseReducer.searchBar);

  const isFormValid = () => {
    const { input, searchType } = form;

    if (searchType === FIRST_LETTER_SEARCH && input.length > 1) {
      global.alert('Your search must have only 1 (one) character');
      return false;
    }

    return true;
  };

  const handleSearchClick = () => {
    const CURRENT_API = window.location.pathname.split('/')[1];
    const { input, searchType } = form;

    if (!isFormValid()) return;

    dispatch(searchAction({
      api: CURRENT_API,
      searchType,
      query: input,
    }));
  };

  const handleInput = ({ target }) => {
    updateForm((prevForm) => ({
      ...prevForm,
      [target.name]: target.value,
    }));
  };

  const getPlaceholder = () => {
    const { searchType } = form;
    switch (searchType) {
    case NAME_SEARCH:
      return 'Search by name...';
    case INGREDIENT_SEARCH:
      return 'Search by ingredient...';
    case FIRST_LETTER_SEARCH:
      return 'Search by first letter...';
    default:
      return 'I\'m looking for...';
    }
  };

  if (!searchBar) return null;
  return (
    <Card className="p-2 m-1">
      <Form className="d-flex flex-column gap-2">
        <Form.Control
          value={ form.input }
          name="input"
          onChange={ handleInput }
          placeholder={ getPlaceholder() }
          data-testid="search-input"
        />

        <Container className="d-flex justify-content-between my-2">
          <Form.Check
            checked={ form.searchType === NAME_SEARCH }
            onChange={ handleInput }
            type="radio"
            name="searchType"
            value={ NAME_SEARCH }
            id="name-radio"
            label="Name"
            data-testid="name-search-radio"
          />
          <Form.Check
            checked={ form.searchType === INGREDIENT_SEARCH }
            onChange={ handleInput }
            type="radio"
            name="searchType"
            value={ INGREDIENT_SEARCH }
            id="ingredient-radio"
            label="Ingredient"
            data-testid="ingredient-search-radio"
          />
          <Form.Check
            checked={ form.searchType === FIRST_LETTER_SEARCH }
            onChange={ handleInput }
            type="radio"
            name="searchType"
            value={ FIRST_LETTER_SEARCH }
            id="firstletter-radio"
            label="First Letter"
            data-testid="first-letter-search-radio"
          />
        </Container>

        <Button
          size="sm"
          className="w-100"
          onClick={ handleSearchClick }
          data-testid="exec-search-btn"
        >
          Search
        </Button>
      </Form>
    </Card>
  );
}

export default SearchBar;
