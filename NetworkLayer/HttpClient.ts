import axios from 'axios';

import Config from '../Config/index';

const httpClient = axios.create({
  baseURL: Config.API_BASE_URL,
});
// httpClient.defaults.timeout = 600;

export default httpClient;
