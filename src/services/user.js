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
  revalidate: async () => {
    const response = await Api.post('/users/revalidate')
    return response
  }
}

export default UserService;