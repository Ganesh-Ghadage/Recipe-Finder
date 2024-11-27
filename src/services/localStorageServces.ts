import { CachedData } from "@/modal/CachedData";
import { Recipe } from "@/modal/Recipe";

const CACHE_EXPIRATION = 3600000; // 1 hour

export const getFromCache = (key: string): Recipe[] | null => {
    const cachedData = localStorage.getItem(key);
    if (cachedData) {
      const parsedData: CachedData<Recipe[]> = JSON.parse(cachedData);
      if (Date.now() < parsedData.expiry) {
        return parsedData.value;
      }
    }
    return null;
};

export const saveToCache = (key: string, data: Recipe[]): void => {
    localStorage.setItem(
      key,
      JSON.stringify({
        value: data,
        expiry: Date.now() + CACHE_EXPIRATION,
      })
    );
};