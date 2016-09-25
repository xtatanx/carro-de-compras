/*@ngInject*/
export default ($http, envConfig) => {
  var endpoint = envConfig.endpoint;

  var getProducts = () => {
    return $http.get(`${endpoint}/data.json`)
  }

  return {
    getProducts: getProducts
  }
}
