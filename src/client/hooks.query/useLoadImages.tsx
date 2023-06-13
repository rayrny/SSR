import { useQuery } from "@tanstack/react-query";
import { ICatImage } from "./useFetchImages";

const LOAD_IMAGE_KEY = "loadImages";

const preloadImage = async (image: ICatImage): Promise<HTMLImageElement> => {
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

export const usePreloadImages = (images: ICatImage[], page: number) => {
  return useQuery(
    [LOAD_IMAGE_KEY, page],
    () =>
      Promise.all(
        images.map(
          async (image): Promise<HTMLImageElement> => preloadImage(image)
        )
      ),
    {
      keepPreviousData: true,
    }
  );
};
