import Api from "./api";

const UserService = {
  register: (params) => Api.post('/users/register', params),
  login: async (params) => {
    const response = await Api.post('/users/login', params);
    return response
  }
}

export default UserService;