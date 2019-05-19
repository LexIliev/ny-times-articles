/**
 * @param {*} route
 * @param {*} params
 * @description Takes route and params and replace them into the route and return it.
 */
export function getRoute(route, params = {}) {
  let returnRoute = route;

  Object.keys(params).forEach((param) => {
    let routeParam = params[param];
    returnRoute = returnRoute.replace(
      new RegExp(':' + param + '\\??'),
      routeParam,
    );
  });
  // If there is a optional route param not passed in the function
  returnRoute = returnRoute.replace(new RegExp('/:(.*)\\??', 'g'), '');
  return returnRoute;
}
