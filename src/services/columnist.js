import Api from "./api";

const ColumnistService = {
  register: (params) => Api.post('/columnists/register', params),
  login: async (params) => {
    const response = await Api.post('/columnists/login', params);
    localStorage.removeItem("in-columnist")
    localStorage.removeItem("in-user")
    localStorage.removeItem("in-token")
    return response
  },
  revalidate: async () => {
    const response = await Api.post('/columnists/revalidate')
    return response
  },
  getOne: async (columnistId) => {
    const response = await Api.get(`/columnists/${columnistId}`);
    return response
  }
}

export default ColumnistService;