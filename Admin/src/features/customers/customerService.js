import axios from "axios";
import { base_url } from "../../utils/base_url";

const getUsers = async () => {
  const res = await axios.get(`${base_url}user/all-users`);

  return res.data;
};

const customerService = {
  getUsers,
};
export default customerService;
