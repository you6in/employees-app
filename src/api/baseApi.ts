export default class BaseApi<T> {
  baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async getItems(url: string): Promise<T[]> {
    const data = await fetch(`${this.baseUrl}/${url}`);

    return data.json();
  }
}
