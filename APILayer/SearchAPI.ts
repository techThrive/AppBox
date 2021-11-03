import httpClient from '../NetworkLayer/HttpClient';


class SearchApi {
  async getSearchData(): Promise<any> {
    const {data} = await httpClient.get('api/goals/all');
    return data;
  }
}

const getSearchList = new SearchApi();
export default getSearchList;
