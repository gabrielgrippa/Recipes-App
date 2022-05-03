import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Navbar, Button } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Profile() {
  const history = useHistory();
  const emailFromLocalStorage = (JSON.parse(localStorage.getItem('user')).email);

  const logout = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <Container>
      <Navbar bg="light" variant="light" className="shadow-sm">

        <Header title="Profile" enableSearch={ false } />

      </Navbar>

      <Navbar.Brand data-testid="profile-email" className="">
        {emailFromLocalStorage}
      </Navbar.Brand>

      <Container>
        <Button
          type="button"
          className="w-40"
          data-testid="profile-done-btn"
          onClick={ () => history.push('/done-recipes') }
        >
          Done Recipes
        </Button>

        <Button
          type="button"
          className="w-40"
          variant="primary"
          data-testid="profile-favorite-btn"
          onClick={ () => history.push('/favorite-recipes') }
        >
          Favorite Recipes
        </Button>

        <Button
          type="button"
          className="w-40"
          data-testid="profile-logout-btn"
          onClick={ logout }
        >
          Logout
        </Button>
      </Container>

      <Footer />

    </Container>
  );
}

export default Profile;
