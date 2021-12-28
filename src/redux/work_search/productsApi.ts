

const API_URL = "http://135.181.30.244:27007/api/summaries";

const productsAPI = {
  async fetchAll(page:string) {
    const result = await fetch(`${API_URL}/?page=${page}`, { method: "GET" });
    return result.json();
  }
};

export default productsAPI;
