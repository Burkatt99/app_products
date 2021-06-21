import axios from "axios";

export const getCurrency = async () => {
  const res = await axios.get("https://data.fixer.io/api/latest/");
  return res.data;
};
