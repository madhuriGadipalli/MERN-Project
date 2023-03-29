import axios from "axios";

const headers = {
   'Content-Type': 'application/json',
   'Access-Control-Allow-Origin': '*',
};
// type headers={
//   accepts:string
// }
export const Get = (url:string) => {
  return axios.get(url);
};

export const Post = (url:string,data:any) => {
  return axios.post(url,data,{headers});
};

export const Delete=(url:string)=>{
  return axios.delete(url)
}

