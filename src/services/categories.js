import Api from "./api";

const CategoriesService = {
  getAll: async () => {
    const response = Api.get('/categories/')
    return response
  }
}

export default CategoriesService;