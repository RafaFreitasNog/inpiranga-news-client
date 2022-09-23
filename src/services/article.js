import Api from "./api";

const ArticleService = {
  getAll: async () => {
    const response = await Api.get("/articles/")
    return response
  }
}

export default ArticleService;