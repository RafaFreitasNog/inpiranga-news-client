import Api from "./api";

const UserService = {
  register: (params) => Api.post('/users/register', params),
  login: async (params) => {
    const response = await Api.post('/users/login', params);
    localStorage.removeItem("in-columnist")
    localStorage.removeItem("in-user")
    localStorage.removeItem("in-token")
    return response
  },
  getOne: async (userId) => {
    const response = await Api.get(`/users/${userId}`)
    return response
  },
  getFavorites: async (userId) => {
    const response = Api.get(`/users/favorites`)
    return response
  },
  addFavorite: async (articleId) => {
    const response = await Api.put(`/users/favorites/add/${articleId}`)
    return response
  },
  removeFavorite : async (articleId) => {
    const response = await Api.put(`/users/favorites/remove/${articleId}`)
    return response
  },
  revalidate: async () => {
    const response = await Api.post('/users/revalidate')
    return response
  }
}

export default UserService;