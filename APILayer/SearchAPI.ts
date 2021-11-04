import httpClient from '../NetworkLayer/HttpClient';
import Config from '../Config';


class SearchApi {
  async getSearchData(typeStr:string): Promise<any> {
  const arg = {
      type: typeStr,
      latitude: Config.LATITUDE, 
      longitude: Config.LONGITUDE
  }
  const {data} = await httpClient.get('/searchlocal', {
    params: arg
  }
  )
    return data;
  }
}

const getSearchList = new SearchApi();
export default getSearchList;
