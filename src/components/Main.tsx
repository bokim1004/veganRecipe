"use client"


import styled from "@emotion/styled";
import {theme} from "@/styles/theme";
import Image from "next/image";
import veganFood from "../../public/image/vegan_food.svg"


export default function Main() {


    return(
    <Wrapper>
    <Image src={veganFood} alt="vegan_food" width={400} height={400}  style={{ borderRadius: '50%' }} />
    <Title>Discover delicious vegan recipes</Title>
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
    line-height:100px;
    color:#00243E;
`;
