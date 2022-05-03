import React from 'react';
import PropTypes from 'prop-types';
import { Container, ResponsiveEmbed } from 'react-bootstrap';

function RecipeVideo({ recipe }) {
  return (
    <Container>
      <hr />

      <h5><strong>Video</strong></h5>
      <ResponsiveEmbed>
        <iframe
          data-testid="video"
          className="border-0"
          width="100%"
          height="300px"
          src={ `https://www.youtube.com/embed/${recipe.video.split('v=')[1]}` }
          title={ `${recipe.title} video` }
        />
      </ResponsiveEmbed>
    </Container>
  );
}

RecipeVideo.propTypes = {
  recipe: PropTypes.shape({
    video: PropTypes.string,
  }),
}.isRequired;

export default RecipeVideo;
