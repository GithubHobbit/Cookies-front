import axios from "axios";

const API_URL = "http://localhost:3000/api/v1";

export const request = async ({ url, method, data }) => {
  const response = await axios({
    url: `${API_URL}/${url}`,
    data: data,
    method: method,
  });
  console.log(response);
  return response.data;
};
