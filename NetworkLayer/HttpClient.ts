import axios from 'axios';

import Config from '../Config/index';

const httpClient = axios.create({
  baseURL: Config.API_BASE_URL,
});

export default httpClient;
