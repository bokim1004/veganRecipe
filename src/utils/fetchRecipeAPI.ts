import axios from "axios";


export const fetchRecipeAPI = async (id:number | null)=> {
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY;


    try {
        const response = await axios(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);

        return response.data;
    }
    catch (error) {
        console.error(error);
    }


};