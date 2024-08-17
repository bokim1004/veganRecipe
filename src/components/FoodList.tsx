import styled from "@emotion/styled";
import {useRecoilValue} from "recoil";
import {foodListDataState} from "@/atoms/atoms";
import Image from "next/image";

interface DataType {
    id:number;
    image:string;
    imageType:string;
    title:string;
}

export default function FoodList () {

    const foodDataList = useRecoilValue(foodListDataState);

    const excludeIndex=[3,6];
    const filterFoodData = foodDataList?.filter((_,index) => !excludeIndex.includes(index));




    console.log("foodDataList",foodDataList);
    return(
        <>
        <List>FOOD LISTS</List>
        <Wrapper>
                {
                    filterFoodData?.map((data :DataType)=> {
                        return(
                              <InsideWrapper key={data?.id}>
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