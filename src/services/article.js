import Api from "./api";

const ArticleService = {
  getAll: async () => {
    const response = await Api.get("/articles/")
    return response
  },
  getOne: async (articleId) => {
    const response = await Api.get(`/articles/${articleId}`)
    return response
  },
  post: async (params) => {
    const response = await Api.post('/articles/', params);
    return response
  },
  delete: async (articleId) => {
    const response = await Api.delete(`/articles/${articleId}`)
    return response
  }
}

export default ArticleService;