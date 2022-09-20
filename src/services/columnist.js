import Api from "./api";

const ColumnistService = {
  register: (params) => Api.post('/columnists/register', params),
  login: async (params) => {
    const response = await Api.post('/columnists/login', params);
    localStorage.removeItem('columnist');
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.setItem('columnist', JSON.stringify(response.data.columnist))
    localStorage.setItem('token', response.data.token)
    return response
  }
}

export default ColumnistService;