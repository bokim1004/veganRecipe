"use client"

import styled from "@emotion/styled";
import Image from "next/image";
import veganFood from "../../public/image/vegan_food.svg"
import RecipeCTA from "@/components/RecipeCTA";
import FoodList from "@/components/FoodList";
import {useQuery} from "@tanstack/react-query";
import {fetchFoodData} from "@/utils/fetchFoodApi";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {foodListDataState, recipeDataState, selectedFoodIdState} from "@/atoms/atoms";
import {fetchRecipeAPI} from "@/utils/fetchRecipeAPI";


export default function Main() {
    const { data:foodListData } = useQuery({
        queryKey: ['foodList'],queryFn: fetchFoodData
    });
    const setFoodData = useSetRecoilState(foodListDataState);
    setFoodData(foodListData?.results);

    const foodList= useRecoilValue(foodListDataState);



    return(
        <>
    <Wrapper>
        <Center>
    <Image src={veganFood} alt="vegan_food" width={400} height={400}  style={{ borderRadius: '50%' }} />
        <CenterWrapper>
        <Title>Discover delicious vegan recipes</Title>
        <RecipeCTA/>
        </CenterWrapper>
        </Center>
    </Wrapper>
    <FoodList/>
            </>
)
}



const Wrapper = styled.div`
 
    display:flex;
    justify-content: center;
    flex-direction: column;
    padding:100px 0 15px;
    gap:30px;
    background:beige;

    

`;

const Center = styled.div`
    width:100%;
    
display:flex;
justify-content:center;
    w
`

const Title = styled.div`
    font-weight:bold;
    font-size:40px;
    color:#00243E;
`;

const CenterWrapper = styled.div`
   
display:flex;
flex-direction:column;
align-items:center;
    justify-content: space-around;
`;

