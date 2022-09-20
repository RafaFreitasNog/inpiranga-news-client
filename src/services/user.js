import Api from "./api";

const UserService = {
  register: (params) => Api.post('/users/register', params),
  login: async (params) => {
    const response = await Api.post('/users/login', params);
    localStorage.removeItem('user');
    localStorage.removeItem('columnist');
    localStorage.removeItem('token');
    localStorage.setItem('user', JSON.stringify(response.data.user))
    localStorage.setItem('token', response.data.token)
  }
}

export default UserService;