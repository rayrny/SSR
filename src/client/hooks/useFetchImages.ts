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
  favourite: object;
};
// infinite query? + windowing

const getImages = async () => {
  const { data } = await axiosInstance.get<ICatImages[]>(
    "https://api.thecatapi.com/v1/images/search?&limit=12&order=desc"
  );

  return data ?? [];
};

// query hydration
export const useGetImages = () => {
  return useQuery([GET_IMAGES_KEY], () => getImages(), {
    suspense: true,
    onError: () => alert("문제 발생"),
  });
};
