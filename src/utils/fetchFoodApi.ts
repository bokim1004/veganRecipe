import axios from "axios";



 export const fetchFoodData = async ():Promise<any> => {
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

     try {
        const response = await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}`);

        return response.data;
    }
    catch (error) {
        console.error(error);
    }


};