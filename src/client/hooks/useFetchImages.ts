import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const IMAGE_KEY = "thecatapi";
const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
    "x-api-key": process.env.REACT_APP_API_KEY,
    "Access-Control-Allow-Origin": "*",
  },
});

export interface ICatImages {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds: string[];
  favourite: object;
}

const getImages = async () => {
  const { data } = await axiosInstance.get<ICatImages[]>(
    "https://api.thecatapi.com/v1/images/search?&limit=12"
  );

  return data ?? [];
};

// query hydration
export const useGetImages = () => {
  return useQuery([IMAGE_KEY], () => getImages(), {
    suspense: true,
  });
};
