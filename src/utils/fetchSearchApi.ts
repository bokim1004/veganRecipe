import axios from "axios";

export interface RecipeData {
    results: {
        id: number;
        title: string;
        // 추가 필드들
    }[];
}

 export const fetchSearchData = async ():Promise<any> => {
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

     try {
        const response = await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}`);

        return response.data;
    }
    catch (error) {
        console.error(error);
    }


};