
"use client";

import styled from "@emotion/styled";
import {recipeDataState, selectedFoodIdState} from "@/atoms/atoms";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {useQuery} from "@tanstack/react-query";
import {fetchRecipeAPI} from "@/utils/fetchRecipeAPI";
import Image from "next/image";
import Loading from '../../public/image/loading-image.gif'



export default function RecipePage() {

const selectFoodId = useRecoilValue(selectedFoodIdState);

    const { data:recipeData,error,refetch } = useQuery({

        //selectFoodId가 null, undefined, 0 등의 값이면 false
        queryKey: ['recipe',selectFoodId], queryFn: ()=> fetchRecipeAPI(selectFoodId)
    });
    if (!recipeData) return <Image src={Loading} alt="Loading..." width={220} height={220} style={{ margin:'100px auto'}}/>;




    return(
        <Wrapper>
            <Food>
                <FoodName>{recipeData?.title}</FoodName>
            <Image src={recipeData?.image} alt={'image'} width={420} height={250} style={{ borderRadius: '15px' }} />

            </Food>
            <Instructions>
                <Title>Instruction</Title>
                <ul>
                    {recipeData?.analyzedInstructions?.[0]?.steps.map ((item :any) => {
                        return (
                          <RecipeList key={item.number}>
                              {item.number}. { item.step}
                              {item.ingredients.length ?
                              <Ingredient>
                              <p>ingredients: </p>
                              <IngredientList>
                                  {item.ingredients.map((item:any,key:number) => (
                                      <li key={key}> {item.name}</li>
                                  ))}
                              </IngredientList>
                              </Ingredient> : null}
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

    color:lightseagreen;
    font-size:32px;
    padding-bottom:20px;
`
const Food = styled.div`
    margin-top:30px;
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap:10px;
    font-weight:bold;
    
    .foodImg {
        width:100%;
    }
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
    padding-top:7px;

    p{

        padding-right:10px;
        font-weight:bold;
    }
`
const IngredientList = styled.ul`
    display:flex;
    justify-content: center;
    align-items: center;
    gap:5px;
    li {
       padding:2px 5px;
        background:lightseagreen;
        color:white;
        border-radius:10px;
        text-align:center;
     
    }
`;