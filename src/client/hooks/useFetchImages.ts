import { useQuery } from "react-query";
import axios from "axios";

const IMAGE_KEY = "thecatapi";
const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
    "x-api-key": process.env.REACT_APP_API_KEY,
    "Access-Control-Allow-Origin": "*",
  },
});

const getImages = async () => {
  const { data } = await axiosInstance.get(
    "https://api.thecatapi.com/v1/images/search?limit=12"
  );

  return data;
};

export const useGetImages = () => {
  const { isLoading, isFetching, data, isError } = useQuery([IMAGE_KEY], () =>
    getImages()
  );

  return { isLoading, isFetching, data, isError };
};
