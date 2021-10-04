export default class BaseApi<T> {
  baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async getItems(): Promise<T[]> {
    const data = await fetch(`${this.baseUrl}`);

    return data.json();
  }

  async removeItem(id: string): Promise<T> {
    const data = await fetch(`${this.baseUrl}/${id}`, { method: "DELETE" });

    return data.json();
  }
}
