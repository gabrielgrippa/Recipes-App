/**
 * Retorna um objeto com valores utilitários para manipular rotas/api.
 *
 * @param {"foods" | "drinks"} route - A rota atual, seja "foods" ou "drinks".
 */
function routeHelper(route) {
  switch (route) {
  case 'drinks':
    return {
      currentApiType: 'drinks',
      oppositeApiType: 'meals',
      currentRoute: '/drinks',
      oppositeRoute: '/foods',
    };
  case 'foods':
    return {
      currentApiType: 'meals',
      oppositeApiType: 'drinks',
      currentRoute: '/foods',
      oppositeRoute: '/drinks',
    };
  default:
    return null;
  }
}

export default routeHelper;
