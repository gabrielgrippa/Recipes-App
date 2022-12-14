import React from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import ProfileIcon from '../images/profileIcon.svg';
import SearchIcon from '../images/searchIcon.svg';
import { toggleSearchBar } from '../redux/actions/showcaseActions';

function Header({
  enableSearch,
  title,
}) {
  const dispatch = useDispatch();

  const toggleSearch = () => dispatch(toggleSearchBar);

  return (
    <Navbar bg="light" variant="light" className="shadow-sm">
      <Container>
        <Link
          to="/profile"
        >
          <img
            style={ { width: '20px' } }
            src={ ProfileIcon }
            alt="Profile icon"
            data-testid="profile-top-btn"
          />
        </Link>

        <Navbar.Brand
          className="m-0"
          data-testid="page-title"
        >
          { title }
        </Navbar.Brand>

        { enableSearch && (
          <Button
            variant="text"
            className="p-0"
            onClick={ toggleSearch }
          >
            <img
              style={ { width: '20px' } }
              src={ SearchIcon }
              alt="Search icon"
              data-testid="search-top-btn"
            />
          </Button>
        ) }
      </Container>
    </Navbar>
  );
}

Header.propTypes = {
  enableSearch: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

Header.defaultProps = {
  enableSearch: true,
};

export default Header;
