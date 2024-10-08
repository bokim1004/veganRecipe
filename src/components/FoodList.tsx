import styled from "@emotion/styled";
import {useRecoilValue, useSetRecoilState,useRecoilState} from "recoil";
import {foodListDataState, recipeDataState, selectedFoodIdState} from "@/atoms/atoms";
import Image from "next/image";
import {fetchRecipeAPI} from "@/utils/fetchRecipeAPI";
import {useQuery} from "@tanstack/react-query";
import {useEffect} from "react";

import {useRouter} from "next/navigation";

interface DataType {
    id:number;
    image:string;
    imageType:string;
    title:string;
}

export default function FoodList () {
    const router = useRouter();
    const foodDataList = useRecoilValue(foodListDataState);
    const [selectFoodId,setSelectFoodId]=useRecoilState<number|null>(selectedFoodIdState);

    const excludeIndex=[3,6];
    const filterFoodData = foodDataList?.filter((_,index) => !excludeIndex.includes(index));




    const onRecipeClick = (id: number | null)=>{

            setSelectFoodId(id);
        router.push('/Recipes');



    }


    return(
        <>
        <List>FOOD LISTS</List>
        <Wrapper>
                {
                    filterFoodData?.map((data :DataType)=> {
                        return(
                              <InsideWrapper key={data?.id}  onClick={()=>onRecipeClick(data?.id)}>
                                <Image src={data?.image} alt={'image'} width={300} height={250}/>
                                  <FoodTitle>{data?.title}</FoodTitle>
                              </InsideWrapper>
                        )
                    })
                }
        </Wrapper>
            </>
    )
}

const Wrapper = styled.div`
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    width:100%;
    justify-content: center; 
    align-content: center;
    row-gap: 2.5rem;
    gap: 1.25rem;
    margin:0 auto;
    padding-left:100px;
`

const List = styled.div`
    font-size:17px;
    color:#00243E;
    text-align:center;
    font-weight:bold;
    padding:20px 0 10px;
    
    :hover{
        cursor:pointer;
        color:#0ea58f;

    }
`;


const InsideWrapper = styled.div`
 display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
  

`

const FoodTitle = styled.div`
    font-size:15px;
    font-weight:bold;
    max-width:200px;
    line-height:20px;
    padding-top:10px;
    :hover{
        cursor:pointer;
        color:#0ea58f;

    }

`