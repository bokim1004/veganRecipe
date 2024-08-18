


import {atom} from 'recoil';

export const foodListDataState = atom ({
    key: 'foodListData',
    default:[]
})

export const recipeDataState = atom({
    key: 'recipeData',
    default:[]
})

export const selectedFoodIdState = atom<number | null>({
    key: 'selectedFoodId',
    default:null
})