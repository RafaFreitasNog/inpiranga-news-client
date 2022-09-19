import Api from "./api";

const ColumnistService = {
  register: (params) => Api.post('/columnists/register', params)
}

export default ColumnistService;