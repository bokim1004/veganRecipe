
"use client";

import styled from "@emotion/styled";
import {recipeDataState, selectedFoodIdState} from "@/atoms/atoms";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {useQuery} from "@tanstack/react-query";
import {fetchRecipeAPI} from "@/utils/fetchRecipeAPI";
import Image from "next/image";


export default function RecipePage() {

const selectFoodId = useRecoilValue(selectedFoodIdState);

    const { data:recipeData,error,refetch } = useQuery({
        //selectFoodId가 null, undefined, 0 등의 값이면 false
        queryKey: ['recipe',selectFoodId], queryFn: ()=> fetchRecipeAPI(selectFoodId)
    });

    console.log("data",recipeData)


    return(
        <Wrapper>
            <Food>
            <Image src={recipeData?.image} alt={'image'} width={300} height={250} style={{ borderRadius: '15px' }} />
            <FoodName>{recipeData?.title}</FoodName>
            </Food>
            <Instructions>
                <Title>Instruction</Title>
                <ul>
                    {recipeData?.analyzedInstructions?.[0]?.steps.map ((item :any) => {
                        return (
                          <RecipeList key={item.number}>
                              {item.number}. { item.step}
                              <Ingredient>
                              <p>ingredients: </p>
                              <IngredientList>
                                  {item.ingredients.map((item:any,key:number) => (
                                      <li key={key}> {item.name}</li>
                                  ))}
                              </IngredientList>
                              </Ingredient>
                        </RecipeList>
                        )
                    })}

                </ul>
            </Instructions>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width:100%;
    max-width:900px;
    margin: 0 auto;

`
const FoodName = styled.div`

    color:#000;
    font-size:22px;
`
const Food = styled.div`
    margin-top:30px;
    display:flex;
    justify-content: center;
    align-items: center;
    gap:10px;
`

const Instructions = styled.div`

    display:flex;
    flex-direction:column;
    margin:50px auto;
    padding:0 20px;
    ul {
        list-style:none;
       
    }

`
const RecipeList = styled.li`
    padding-top:20px;
`

const Title = styled.h1`
    padding-bottom:10px;
`

const Ingredient = styled.div`
    display:flex;

    p{
        padding-right:10px;
    }
`
const IngredientList = styled.ul`
    display:flex;
    li {
       padding-right:10px;
        color:lightseagreen;
    }
`;