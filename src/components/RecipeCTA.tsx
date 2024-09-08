'use client';

import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";



const RecipeCTA= () => {

  return(

    <Wrapper>
        <Text>What do you want to eat?</Text>
         <ButtonBox> <Link href="/Recipes">Find Recipes</Link></ButtonBox>
    </Wrapper>
)
}


const Wrapper = styled.div`
    width:60%;
    height:130px;
    background:white;
    display:flex;
    flex-direction:column;
    justify-content: space-around;
    align-items:center;
    cursor: pointer;
    
`

const Text = styled.div`
    font-size:18px;
    font-weight:bold;
    color:#00242E;
`;

const ButtonBox = styled.div`
    width:90%;
  padding:10px;
    background:#02a58f;
    color:white;
    text-align:center;
    border-radius:4px;
    :hover {
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
 
    }
`


export default RecipeCTA;