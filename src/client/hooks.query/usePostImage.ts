import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const axiosInstance = axios.create({
  headers: {
    "Content-Type": "multipart/form-data",
    "x-api-key": process.env.REACT_APP_API_KEY,
    "Access-Control-Allow-Origin": "*",
  },
});

const postImage = async (formData: FormData) => {
  const { data } = await axiosInstance.post(
    `https://api.thecatapi.com/v1/images/upload`,
    formData
  );

  return data;
};

export const usePostImage = () => {
  return useMutation((formData: FormData) => postImage(formData), {
    onError: (err) => {
      alert("파일 업로드 중 에러가 발생했습니다. 잠시 후 다시 시도해주세요.");
      console.error(err);
    },
    onSuccess: () => {
      alert("파일 업로드 성공");
    },
  });
};
