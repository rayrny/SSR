import { useQuery } from "@tanstack/react-query";
import { ImgHTMLAttributes } from "react";

const LOAD_IMAGE_KEY = "loadImage";

interface IImageAttributes extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

const loadImage = async (src: string) => {
  return new Promise((resolve, reject) => {
    try {
      const img = document.createElement("img");
      img.src = src;
      img.onload = () => resolve(src);
    } catch (err) {
      reject(err);
    }
  });
};

export const useLoadImage = (src: string, id: string) => {
  return useQuery([LOAD_IMAGE_KEY, id], () => loadImage(src));
};
