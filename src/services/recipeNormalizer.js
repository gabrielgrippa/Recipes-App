const keymap = {
  meals: {
    id: 'idMeal',
    title: 'strMeal',
    category: 'strCategory',
    instructions: 'strInstructions',
    image: 'strMealThumb',
    video: 'strYoutube',
    nationality: 'strArea',
    tags: 'strTags',
  },
  drinks: {
    id: 'idDrink',
    title: 'strDrink',
    category: 'strCategory',
    instructions: 'strInstructions',
    image: 'strDrinkThumb',
    video: 'strVideo',
    alcoholic: 'strAlcoholic',
    tags: 'strTags',
  },
};

/**
 * Transforma o objeto de uma receita específica em um com chaves genéricas.
 *
 * @param {"meals" | "drinks"} api - Tipo da API dos dados.
 * @param {Object} data - O objeto da receita, vinda da API.
 */
function recipeNormalizer(api, data) {
  const ingredientList = Object.keys(data).reduce((ingredients, key) => {
    if (!key.startsWith('strIngredient')) return ingredients;
    if (!data[key] || !data[key].trim()) return ingredients;

    const ingredientIndex = key.replace('strIngredient', '');
    const ingredientMeasure = data[`strMeasure${ingredientIndex}`];

    return [...ingredients, {
      name: data[key],
      measure: ingredientMeasure,
    }];
  }, []);

  const {
    id,
    category,
    image,
    instructions,
    title,
    video,
    alcoholic,
    nationality,
    tags,
  } = keymap[api];

  return {
    id: data[id],
    category: data[category],
    image: data[image],
    instructions: data[instructions],
    title: data[title],
    video: data[video],
    ingredients: ingredientList,
    source: data,
    alcoholic: data[alcoholic],
    nationality: data[nationality],
    tags: data[tags]?.split(',') || [],
    type: api === 'drinks' ? 'drink' : 'food',
  };
}

export default recipeNormalizer;
