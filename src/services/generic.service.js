import axios from "axios";

const API_URL = "http://localhost:3000/api/v1";

export const request = async ({ url, method, data }) => {
  const response = await axios({
    url: `${API_URL}/${url}`,
    data: data,
    method: method,
  });
  return response.data;
};

// const keys = Object.keys(err.response.data);
// console.log(keys);
// const values = Object.values(err.response.data);
// console.log(values);
