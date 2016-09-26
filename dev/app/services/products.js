/*@ngInject*/
export default ($http, envConfig) => {
  let endpoint = envConfig.endpoint;

  let getProducts = () => {
    return $http.get(`${endpoint}/data.json`)
  }

  return {
    getProducts: getProducts
  }
}
