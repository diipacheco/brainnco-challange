import axios from 'axios';

export default axios.create({
  baseURL: 'https://brainn-api-loterias.herokuapp.com/api/v1/',
});
