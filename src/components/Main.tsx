"use client"


import styled from "@emotion/styled";
import {theme} from "@/styles/theme";


export default function Main() {


    return(
    <Wrapper>
    <Title>Vegan <br/>
        <Recipe>{``} Recipe </Recipe></Title>
    </Wrapper>
)
}



const Wrapper = styled.div`
 
    display:flex;
    justify-content: flex-end;
    margin-top:100px;
    margin-right:180px;

`; 

const Title = styled.div`
    font-weight:bold;
    font-size:50px;
    line-height:70px;
    color: ${theme.colors.black};
`;

const Recipe = styled.div`
    margin-left:30px;
`