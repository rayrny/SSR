import { useQuery } from "@tanstack/react-query";
import { ICatImages } from "./useFetchImages";

const LOAD_IMAGE_KEY = "loadImages";

const preloadImage = async (image: ICatImages): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    try {
      const img = document.createElement("img");
      img.src = image.url;
      img.id = image.id;
      img.onload = () => resolve(img);
    } catch (err) {
      reject(err);
    }
  });
};

export const usePreloadImages = (images: ICatImages[], page: number) => {
  return useQuery(
    [LOAD_IMAGE_KEY, page],
    () =>
      Promise.all(
        images.map(
          async (image): Promise<HTMLImageElement> => preloadImage(image)
        )
      ),
    {
      suspense: true,
    }
  );
};
