import {
  QueryClient,
  useInfiniteQuery,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import axios from "axios";

const GET_IMAGES_KEY = "getImages";
const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
    "x-api-key": process.env.REACT_APP_API_KEY,
    "Access-Control-Allow-Origin": "*",
  },
});

export type ICatImage = {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds: string[];
  favorite: object;
};

export type TInfiniteQuery = {
  data: ICatImage[];
  index: number;
  isLast: boolean;
};
const getImages = async (pageParam: number): Promise<TInfiniteQuery> => {
  const { data } = await axiosInstance.get<ICatImage[]>(
    `https://api.thecatapi.com/v1/images/search?&limit=12&page=${pageParam}&order=asc`
  );

  return {
    data: data,
    index: pageParam,
    isLast: data === undefined,
  };
};

export const useGetImages = (query) => {
  const { pageParam } = query;
  return useInfiniteQuery(
    [GET_IMAGES_KEY],
    ({ pageParam = 0 }) => getImages(pageParam),
    {
      suspense: true,
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      onError: () =>
        alert("이미지를 불러오는 도중에 서버에서 문제가 발생했습니다."),
      getNextPageParam: (lastPage) => {
        if (lastPage.isLast) return undefined;
        return lastPage.index + 1;
      },
    }
  );
};
