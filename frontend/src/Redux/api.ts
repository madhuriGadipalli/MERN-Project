import axios from "axios";

const authToken = localStorage.getItem("authToken");

const config = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
  },
};
// type headers={
//   accepts:string
// }
export const Get = (url: string) => {
  return axios.get(url, config);
};

export const Post = (url: string, data: any) => {
  return axios.post(url, data, config);
};

export const Put = (url: string, data: any) => {
  return axios.put(url, data, config);
};

export const Delete = (url: string) => {
  return axios.delete(url);
};
