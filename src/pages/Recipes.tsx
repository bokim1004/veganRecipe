"use client"

import styled from "@emotion/styled";
import NavigationBar from "@/components/NavigationBar";
import RecipePage from "@/components/RecipePage";



const Recipes = ()=>{

    return(
        <div>
        <NavigationBar/>
       <RecipePage/>
        </div>
    )
}

export default Recipes;


const Wrapper = styled.div``