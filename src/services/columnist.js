import Api from "./api";

const ColumnistService = {
  register: (params) => Api.post('/columnists/register', params),
  login: async (params) => {
    const response = await Api.post('/columnists/login', params);
    return response
  }
}

export default ColumnistService;