import styled from "@emotion/styled";
import {useRecoilValue, useSetRecoilState,useRecoilState} from "recoil";
import {foodListDataState, recipeDataState, selectedFoodIdState} from "@/atoms/atoms";
import Image from "next/image";
import {fetchRecipeAPI} from "@/utils/fetchRecipeAPI";
import {useQuery} from "@tanstack/react-query";
import {useEffect} from "react";




interface DataType {
    id:number;
    image:string;
    imageType:string;
    title:string;
}

export default function FoodList () {

    const foodDataList = useRecoilValue(foodListDataState);
    const [selectFoodId,setSelectFoodId]=useRecoilState<number|null>(selectedFoodIdState);

    const excludeIndex=[3,6];
    const filterFoodData = foodDataList?.filter((_,index) => !excludeIndex.includes(index));


    console.log("selectFoodId",selectFoodId)

    const { data:recipeData,error,refetch } = useQuery({
        //selectFoodId가 null, undefined, 0 등의 값이면 false
        queryKey: ['recipe',selectFoodId], queryFn: ()=> fetchRecipeAPI(selectFoodId),enabled: !!selectFoodId,
    });
console.log("recipeData",recipeData);
    const setRecipeData = useSetRecoilState(recipeDataState);


    useEffect(() => {

        if (recipeData) {
            console.log("여기")
            setRecipeData(recipeData); // 가져온 데이터를 Recoil 상태로 설정
        }
    }, [recipeData,setRecipeData]);



    const onRecipeClick = async(id: number | null)=>{
        console.log("id",id)
        setSelectFoodId(id);
        window.location.href = `/Recipes`;
        if(id !== null) {
            await refetch();
        }

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
    border:1px solid red;

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