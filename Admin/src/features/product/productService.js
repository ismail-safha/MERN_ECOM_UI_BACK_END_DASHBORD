import axios from "axios";
import { base_url } from "../../utils/base_url";

const getProducts = async () => {
  const res = await axios.get(`${base_url}product/`);

  return res.data;
};

const productsService = {
  getProducts,
};
export default productsService;
