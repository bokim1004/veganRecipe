"use client"

import styled from "@emotion/styled";
import Image from "next/image";
import veganFood from "../../public/image/vegan_food.svg"
import SearchBar from "@/components/SearchBar";


export default function Main() {


    return(
    <Wrapper>
    <Image src={veganFood} alt="vegan_food" width={400} height={400}  style={{ borderRadius: '50%' }} />

        <CenterWrapper>
        <Title>Discover delicious vegan recipes</Title>
        <SearchBar/>
        </CenterWrapper>
    </Wrapper>
)
}



const Wrapper = styled.div`
 
    display:flex;
    justify-content: center;
    align-items:flex-start;
    padding:100px 0 15px;
    gap:30px;
    background:beige;
    

`;

const Title = styled.div`
    font-weight:bold;
    font-size:40px;
    color:#00243E;
`;

const CenterWrapper = styled.div`
    height:200px;
display:flex;
flex-direction:column;
align-items:center;
    justify-content: space-between;
`;

