import { useQuery } from "@tanstack/react-query";
import axios, { AxiosRequestConfig } from "axios";
import { UCA01SERVER } from "../../const/Server.const";

interface Ihrsuserslistapiprops {
  cmd: string;
  bid: string;
  language: string;
}
export interface Ihrsuserslistapires {
  user: string;
}

export const hrsuserslistapi = async (props: Ihrsuserslistapiprops) =>
  await axios
    .post<Ihrsuserslistapires>(`${UCA01SERVER}/api/v1/crs-id-hrs/users`, props)
    .then((res) => res.data);

export interface Iuser {
  userId: number;
  id: number;
  title: string;
  completed: string;
}

export const testApiGet = async () =>
  await axios<Iuser>("https://jsonplaceholder.typicode.com/todos/1");
// .catch((err) => "error from testApiGet");

export const testApiPost = () =>
  axios
    .post<Iuser>(
      "https://jsonplaceholder.typicode.com/posts",
      {
        title: "foo",
        body: "bar",
        userId: 1,
      },
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
    .then((res) => res.data);
