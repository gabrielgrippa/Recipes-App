import React, { useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import searchAction from '../redux/actions/showcaseActions';

function SearchBar() {
  const [form, updateForm] = useState({ input: '', searchType: 'name' });
  const dispatch = useDispatch();

  const handleSearchClick = () => {
    const CURRENT_API = window.location.pathname.split('/')[1];
    const { input, searchType } = form;

    dispatch(searchAction({
      api: CURRENT_API,
      searchType,
      query: input,
    }));
  };

  const handleInput = ({ target }) => {
    const { input, searchType } = form;

    // Caso usuário tente adicionar mais de 2 caracteres com First Letter selecionado
    if (
      target.name === 'input'
      && target.value.length > 1
      && searchType === 'firstletter'
    ) {
      return global.alert('Your search must have only 1 (one) character');
    }

    // Caso usuário tente mudar para First Letter com mais de 2 caracteres digitados.
    if (
      target.name === 'searchType'
      && target.value === 'firstletter'
      && input.length > 1
    ) {
      return global.alert('Your search must have only 1 (one) character');
    }

    updateForm({
      ...form,
      [target.name]: target.value,
    });
  };

  const getPlaceholder = () => {
    const { searchType } = form;
    switch (searchType) {
    case 'name':
      return 'Search by name...';
    case 'ingredient':
      return 'Search by ingredient...';
    case 'firstletter':
      return 'Search by first letter...';
    default:
      return 'I\'m looking for...';
    }
  };

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
            checked={ form.searchType === 'name' }
            onChange={ handleInput }
            type="radio"
            name="searchType"
            value="name"
            id="name-radio"
            label="Name"
            data-testid="name-search-radio"
          />
          <Form.Check
            checked={ form.searchType === 'ingredient' }
            onChange={ handleInput }
            type="radio"
            name="searchType"
            value="ingredient"
            id="ingredient-radio"
            label="Ingredient"
            data-testid="ingredient-search-radio"
          />
          <Form.Check
            checked={ form.searchType === 'firstletter' }
            onChange={ handleInput }
            type="radio"
            name="searchType"
            value="firstletter"
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
