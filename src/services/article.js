import Api from "./api";

const ArticleService = {
  getAll: async () => {
    const response = await Api.get("/articles/")
    return response
  },
  getOne: async (articleId) => {
    const response = await Api.get(`/articles/${articleId}`)
    return response
  }
}

export default ArticleService;