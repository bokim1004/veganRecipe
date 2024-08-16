"use client"

import styled from "@emotion/styled";


export default function NavigationBar() {
    return(<>
        <Wrapper>
            <Title>All of the Delicious Vegan Recipes</Title>
            <NavBox>
                <Box>Home</Box>
                <Box>Recipe</Box>
            </NavBox>
            <BottomDiv/>
        </Wrapper>

        </>
    )
}

const Wrapper = styled.nav`
    position:relative;
display:flex;
    align-items:center;
    justify-content: space-between;
    width:100%;
    height:100px;
    background:white;
 
`

const NavBox = styled.div`
    display:flex;
    margin-right:130px;
    gap:50px;
    font-size:18px;
    color:#02a58f;

`

const Box = styled.div`
    
`;

const BottomDiv = styled.div`
  position:absolute;
    bottom:0;
    width:100%;
    height:15px;
    background: linear-gradient(45deg, #d4fc79, #96e6a1); 
`

const Title = styled.div`
    font-weight:bold;
    font-size:25px;
    color:#02a58f;
    padding-left:100px;
`;