import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const GET_IMAGES_KEY = "getImages";
const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
    "x-api-key": process.env.REACT_APP_API_KEY,
    "Access-Control-Allow-Origin": "*",
  },
});

export type ICatImages = {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds: string[];
  favorite: object;
};
// infinite query? + windowing

// interface IErrorImages extends Error {
//   id: string;
//   url: string;
// }
const getImages = async () => {
  const { data } = await axiosInstance.get<ICatImages[]>(
    "https://api.thecatapi.com/v1/images/search?&limit=12&order=desc"
  );

  return data ?? [];

  // const rejectedPromise: Promise<IErrorImages[]> = new Promise(
  //   (resolve, reject) => {
  //     setTimeout(() => reject(new Error("서버에서 문제 발생")), 2000);
  //   }
  // );

  // return rejectedPromise;
};

export const useGetImages = () => {
  return useQuery([GET_IMAGES_KEY], () => getImages(), {
    suspense: true,
    onError: () =>
      alert("이미지를 불러오는 도중에 서버에서 문제가 발생했습니다."),
  });
};
