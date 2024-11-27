import axios, { AxiosInstance } from 'axios';
import { Recipe } from '../modal/Recipe';

class SpoonacularServices {
    private api: AxiosInstance;

    constructor() {
        this.api = axios.create({
            baseURL: `https://api.spoonacular.com/recipes`,
        });
    }

    private getRequestConfig(signal?: AbortSignal) {
        return signal ? { signal } : {};
    }

    searchRecipe = (query: string, signal?: AbortSignal): Promise<Recipe[]> => {
        return this.api
            .get(
                `complexSearch?apiKey=${import.meta.env.VITE_SPOONACULAR_API_KEY}&instructionsRequired=true&addRecipeInstructions=true&addRecipeInformation=true&query=${query}&number=20`,
                this.getRequestConfig(signal)
            )
            .then((response) => response.data)
            .then((data) => data.results);
    };

    searchCuisine = (cuisine: string, signal?: AbortSignal): Promise<Recipe[]> => {
        return this.api
            .get(
                `complexSearch?apiKey=${import.meta.env.VITE_SPOONACULAR_API_KEY}&instructionsRequired=true&addRecipeInstructions=true&addRecipeInformation=true&cuisine=${cuisine}&number=20`,
                this.getRequestConfig(signal)
            )
            .then((response) => response.data)
            .then((data) => data.results);
    };

    searchIntolerances = (intolerances: string, signal?: AbortSignal): Promise<Recipe[]> => {
        return this.api
            .get(
                `complexSearch?apiKey=${import.meta.env.VITE_SPOONACULAR_API_KEY}&instructionsRequired=true&addRecipeInstructions=true&addRecipeInformation=true&intolerances=${intolerances}&number=20`,
                this.getRequestConfig(signal)
            )
            .then((response) => response.data)
            .then((data) => data.results);
    };

    searchMealType = (type: string, signal?: AbortSignal): Promise<Recipe[]> => {
        return this.api
            .get(
                `complexSearch?apiKey=${import.meta.env.VITE_SPOONACULAR_API_KEY}&instructionsRequired=true&addRecipeInstructions=true&addRecipeInformation=true&type=${type}&number=20`,
                this.getRequestConfig(signal)
            )
            .then((response) => response.data)
            .then((data) => data.results);
    };

    getRecipeByIngredients = (ingredients: string, signal?: AbortSignal): Promise<Recipe[]> => {
        return this.api
            .get(
                `findByIngredients?apiKey=${import.meta.env.VITE_SPOONACULAR_API_KEY}&ingredients=${ingredients}&number=10&ranking=1`,
                this.getRequestConfig(signal)
            )
            .then((response) => response.data);
    };

    getRecipeBulkInformation = (ids: number[], signal?: AbortSignal): Promise<Recipe[]> => {
        return this.api
            .get(
                `/informationBulk?ids=${ids.join(',')}&apiKey=${import.meta.env.VITE_SPOONACULAR_API_KEY}`,
                this.getRequestConfig(signal)
            )
            .then((response) => response.data);
    };

    getRecipeByID = (id: number, signal?: AbortSignal): Promise<Recipe[]> => {
        return this.api
            .get(
                `${id}/information?apiKey=${import.meta.env.VITE_SPOONACULAR_API_KEY}`,
                this.getRequestConfig(signal)
            )
            .then((response) => response.data);
    };
}

export default new SpoonacularServices();
